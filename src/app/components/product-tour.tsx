"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ─── helpers ─── */
const font = {
  regular: "font-['iFood_RC_Textos:Regular',sans-serif] font-normal",
  medium: "font-['iFood_RC_Textos:Medium',sans-serif] font-medium",
};
const iconFilled = "font-['pomodoro-icon-filled:Regular',sans-serif]";
const ICON_LOCK = "\uE85A";

/* ─── Tour step definitions ─── */
interface TourStepDef {
  /** CSS selector for the target element */
  target: string;
  /** Fallback selector if main target not visible (e.g. mobile) */
  fallback?: string;
  title: string;
  description: string;
  /** Preferred tooltip placement */
  placement: "top" | "bottom" | "right" | "left";
}

export const INITIAL_TOUR_STEPS: TourStepDef[] = [
  {
    target: '[data-tour-step="sidebar-menu"]',
    fallback: '[data-tour-step="steps-timeline"]',
    title: "Etapas de configuração",
    description:
      "Aqui ficam as etapas para configurar sua loja. Você pode navegar entre elas e acompanhar o progresso de cada uma.",
    placement: "right",
  },
  {
    target: '[data-tour-step="steps-timeline"]',
    title: "Complete para vender",
    description:
      "São 6 etapas obrigatórias. Faça na ordem que preferir — cada uma leva poucos minutos.",
    placement: "top",
  },
  {
    target: '[data-tour-step="conclusao-menu"]',
    fallback: '[data-tour-step="steps-timeline"]',
    title: "Desbloqueie a conclusão",
    description:
      "A etapa de Conclusão será desbloqueada automaticamente quando você finalizar as etapas anteriores.",
    placement: "right",
  },
  {
    target: '[data-tour-step="cta-start"]',
    title: "Comece por aqui!",
    description:
      "Quando estiver pronto, clique para iniciar a primeira etapa. Boas vendas!",
    placement: "top",
  },
];

export const VIDEOS_TOUR_STEPS: TourStepDef[] = [
  {
    target: '[data-tour-step="cta-pronto-vender"]',
    title: "Estou pronto para vender",
    description:
      "Este botão só será habilitado quando todos os itens do checklist estiverem marcados. Complete cada item para liberar o botão e iniciar suas vendas!",
    placement: "top",
  },
  {
    target: '[data-tour-target="meus-primeiros-passos"]',
    title: "Seus vídeos de apoio",
    description:
      "Enquanto sua loja não abre, aproveite para assistir esses vídeos. Eles trazem dicas práticas para você arrasar logo nos primeiros pedidos.",
    placement: "top",
  },
];

export const PORTAL_TOUR_STEPS: TourStepDef[] = [
  {
    target: '[data-tour-portal="store-status"]',
    title: "Status da sua loja",
    description:
      "Aqui você vê o status da sua loja em tempo real. O indicador verde mostra que sua loja está dentro do horário de funcionamento. Fique atento a esse indicador!",
    placement: "bottom",
  },
  {
    target: '[data-tour-portal="gestor-pedidos"]',
    title: "Gestor de pedidos",
    description:
      "Aqui você acessa o gestor de pedidos. Se você entrar dentro do horário de funcionamento da sua loja, ficará online automaticamente e poderá receber pedidos.",
    placement: "right",
  },
  {
    target: '[data-tour-portal="primeiros-passos"]',
    title: "Vídeo e checklist personalizados",
    description:
      "Separamos um vídeo exclusivo e um checklist de primeiros passos para te guiar. Complete cada item para garantir que está tudo pronto para o seu primeiro pedido!",
    placement: "top",
  },
  {
    target: '[data-tour-portal="investimento"]',
    title: "O iFood investe em você",
    description:
      "O iFood está investindo na sua loja para que você chegue aos primeiros pedidos mais rápido. Aproveite os cupons e benefícios disponíveis!",
    placement: "left",
  },
  {
    target: '[data-tour-portal="radar"]',
    title: "Dicas inteligentes para você",
    description:
      "O Radar iFood usa inteligência artificial para te dar dicas personalizadas. Siga as recomendações para aumentar suas chances de receber o primeiro pedido!",
    placement: "top",
  },
];

/* ─── Overlay cutout path ─── */
function buildOverlayPath(
  rect: DOMRect,
  pad: number,
  r: number,
  ww: number,
  wh: number
) {
  const sx = rect.left - pad;
  const sy = rect.top - pad;
  const sw = rect.width + pad * 2;
  const sh = rect.height + pad * 2;
  return `
    M 0 0 L ${ww} 0 L ${ww} ${wh} L 0 ${wh} Z
    M ${sx + r} ${sy}
    L ${sx + sw - r} ${sy}
    Q ${sx + sw} ${sy} ${sx + sw} ${sy + r}
    L ${sx + sw} ${sy + sh - r}
    Q ${sx + sw} ${sy + sh} ${sx + sw - r} ${sy + sh}
    L ${sx + r} ${sy + sh}
    Q ${sx} ${sy + sh} ${sx} ${sy + sh - r}
    L ${sx} ${sy + r}
    Q ${sx} ${sy} ${sx + r} ${sy}
    Z
  `;
}

/* ─── Tooltip position calculator ─── */
function calcTooltip(
  rect: DOMRect,
  pad: number,
  placement: TourStepDef["placement"],
  ww: number,
  wh: number,
  isMobile: boolean
) {
  const tooltipW = isMobile ? Math.min(ww - 32, 340) : 360;
  const estimatedTooltipH = 200;
  const gap = 14;

  const sx = rect.left - pad;
  const sy = rect.top - pad;
  const sw = rect.width + pad * 2;
  const sh = rect.height + pad * 2;

  let top = 0;
  let left = 0;
  let arrowSide: "top" | "bottom" | "left" | "right" = "top";

  if (placement === "right" && sx + sw + gap + tooltipW < ww) {
    top = sy + sh / 2;
    left = sx + sw + gap;
    arrowSide = "left";
  } else if (placement === "left" && sx - gap - tooltipW > 0) {
    top = sy + sh / 2;
    left = sx - gap - tooltipW;
    arrowSide = "right";
  } else if (placement === "top" && sy - gap - 120 > 0) {
    top = sy - gap;
    left = sx + sw / 2 - tooltipW / 2;
    arrowSide = "bottom";
  } else {
    top = sy + sh + gap;
    left = sx + sw / 2 - tooltipW / 2;
    arrowSide = "top";
  }

  if (left < 16) left = 16;
  if (left + tooltipW > ww - 16) left = ww - 16 - tooltipW;

  if (top < 16) top = 16;
  if (arrowSide !== "bottom" && top + estimatedTooltipH > wh - 16) {
    top = wh - 16 - estimatedTooltipH;
    if (top < 16) top = 16;
  }

  return { top, left, tooltipW, arrowSide, sx, sy, sw, sh };
}

/* ─── Main ProductTour component ─── */
interface ProductTourProps {
  onClose: () => void;
  steps?: typeof INITIAL_TOUR_STEPS;
}

export function ProductTour({ onClose, steps = INITIAL_TOUR_STEPS }: ProductTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const autoScrollRef = useRef<number | null>(null);

  const totalSteps = steps.length;
  const safeStep = Math.min(currentStep, totalSteps - 1);
  const stepDef = steps[safeStep];

  useEffect(() => {
    if (currentStep >= totalSteps) {
      setCurrentStep(totalSteps - 1);
    }
  }, [currentStep, totalSteps]);

  if (!stepDef) return null;

  const findTarget = useCallback(
    (stepIndex: number): Element | null => {
      const def = steps[stepIndex];
      const el = document.querySelector(def.target);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) return el;
      }
      if (def.fallback) {
        return document.querySelector(def.fallback);
      }
      return null;
    },
    [steps]
  );

  const measureTarget = useCallback(() => {
    const el = findTarget(currentStep);
    if (el) {
      setTargetRect(el.getBoundingClientRect());
    }
    setIsMobile(window.innerWidth < 1024);
  }, [currentStep, findTarget]);

  useEffect(() => {
    setTransitioning(true);
    const el = findTarget(currentStep);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    const timer = setTimeout(() => {
      measureTarget();

      const targetEl = findTarget(currentStep);
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const mobile = window.innerWidth < 1024;
        const p = mobile ? 6 : 10;
        const placement = steps[currentStep].placement;
        const tooltipH = 200;
        const g = 14;

        let neededTop = 0;
        let neededBottom = 0;

        if (placement === "top" || placement === "left" || placement === "right") {
          if (placement === "top") {
            neededTop = rect.top - p - g - tooltipH;
          } else {
            neededTop = rect.top + rect.height / 2 - tooltipH / 2;
          }
          neededBottom = rect.bottom + p;
        } else {
          neededTop = rect.top - p;
          neededBottom = rect.bottom + p + g + tooltipH;
        }

        const wh = window.innerHeight;
        if (neededTop < 16 || neededBottom > wh - 16) {
          const scrollContainer = document.scrollingElement || document.documentElement;
          const currentScroll = scrollContainer.scrollTop;

          if (neededTop < 16) {
            scrollContainer.scrollTo({
              top: currentScroll + neededTop - 24,
              behavior: "smooth",
            });
          } else if (neededBottom > wh - 16) {
            scrollContainer.scrollTo({
              top: currentScroll + (neededBottom - wh) + 24,
              behavior: "smooth",
            });
          }

          setTimeout(() => {
            measureTarget();
            setTransitioning(false);
            if (!visible) setVisible(true);
          }, 400);
          return;
        }
      }

      setTransitioning(false);
      if (!visible) setVisible(true);
    }, 450);

    return () => clearTimeout(timer);
  }, [currentStep, findTarget, measureTarget, visible, steps]);

  useEffect(() => {
    const isVideosTour = steps === VIDEOS_TOUR_STEPS;
    const targetsVideos = stepDef?.target === "[data-tour-videos]";

    const isPortalTour = steps === PORTAL_TOUR_STEPS;
    const targetsPrimeirosPassos = stepDef?.target === '[data-tour-portal="primeiros-passos"]';

    const shouldAnimate = (isVideosTour && targetsVideos) || (isPortalTour && targetsPrimeirosPassos);

    if (!shouldAnimate || transitioning) {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      return;
    }

    let container: Element | null = null;
    if (isVideosTour && targetsVideos) {
      container = document.querySelector("[data-tour-videos]")?.parentElement ?? null;
    } else if (isPortalTour && targetsPrimeirosPassos) {
      container = document.querySelector('[data-tour-portal-scroll="primeiros-passos"]');
    }
    if (!container || !(container instanceof HTMLElement)) return;

    container.scrollLeft = 0;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;

    let startTime: number | null = null;
    const totalDuration = 4000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) % totalDuration;
      const half = totalDuration / 2;

      let progress: number;
      if (elapsed < half) {
        const t = elapsed / half;
        progress = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      } else {
        const t = (elapsed - half) / half;
        const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        progress = 1 - ease;
      }

      (container as HTMLElement).scrollLeft = progress * maxScroll;
      autoScrollRef.current = requestAnimationFrame(animate);
    };

    const delayTimer = setTimeout(() => {
      autoScrollRef.current = requestAnimationFrame(animate);
    }, 600);

    return () => {
      clearTimeout(delayTimer);
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      if (container && container instanceof HTMLElement) container.scrollLeft = 0;
    };
  }, [steps, stepDef, transitioning]);

  useEffect(() => {
    window.addEventListener("resize", measureTarget);
    window.addEventListener("scroll", measureTarget, true);
    return () => {
      window.removeEventListener("resize", measureTarget);
      window.removeEventListener("scroll", measureTarget, true);
    };
  }, [measureTarget]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && currentStep < totalSteps - 1)
        setCurrentStep((s) => s + 1);
      if (e.key === "ArrowLeft" && currentStep > 0)
        setCurrentStep((s) => s - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentStep, totalSteps, onClose]);

  if (!targetRect || !visible) return null;

  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const pad = isMobile ? 6 : 10;
  const r = 14;

  const overlayPath = buildOverlayPath(targetRect, pad, r, ww, wh);
  const { top, left, tooltipW, arrowSide, sx, sy, sw, sh } = calcTooltip(
    targetRect,
    pad,
    stepDef.placement,
    ww,
    wh,
    isMobile
  );

  const isLast = currentStep === totalSteps - 1;
  const isConclusaoStep = steps === INITIAL_TOUR_STEPS && currentStep === 2;

  const handleNext = () => {
    if (isLast) {
      onClose();
    } else {
      setCurrentStep((s) => s + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const arrowStyle: React.CSSProperties = {};
  if (arrowSide === "top") {
    arrowStyle.top = -5;
    arrowStyle.left = Math.max(
      20,
      Math.min(tooltipW - 20, targetRect.left + targetRect.width / 2 - left)
    );
  } else if (arrowSide === "bottom") {
    arrowStyle.bottom = -5;
    arrowStyle.left = Math.max(
      20,
      Math.min(tooltipW - 20, targetRect.left + targetRect.width / 2 - left)
    );
  } else if (arrowSide === "left") {
    arrowStyle.left = -5;
    arrowStyle.top = Math.max(16, Math.min(100, 24));
  } else {
    arrowStyle.right = -5;
    arrowStyle.top = Math.max(16, Math.min(100, 24));
  }

  const tooltipPos: React.CSSProperties =
    arrowSide === "bottom"
      ? { bottom: wh - top, left }
      : arrowSide === "left"
      ? { top: top - 24, left }
      : { top, left };

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay with animated cutout */}
      <motion.svg
        key={`overlay-${currentStep}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        width={ww}
        height={wh}
      >
        <path
          d={overlayPath}
          fill="rgba(0,0,0,0.55)"
          fillRule="evenodd"
        />
      </motion.svg>

      {/* Click-through overlay */}
      <div
        className="absolute inset-0"
        style={{ pointerEvents: "auto" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            // Don't close on background click during tour
          }
        }}
      />

      {/* Spotlight border + pulse */}
      {!transitioning && (
        <>
          <motion.div
            key={`border-${currentStep}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="absolute pointer-events-none"
            style={{
              left: sx,
              top: sy,
              width: sw,
              height: sh,
              borderRadius: r,
              boxShadow:
                "0 0 0 2px rgba(255,255,255,0.5), 0 0 20px rgba(0,0,0,0.1)",
            }}
          />
          <motion.div
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="fixed pointer-events-none overflow-hidden"
            style={{
              left: 0,
              top: 0,
              width: ww,
              height: wh,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: sx - 4,
                top: sy - 4,
                width: sw + 8,
                height: sh + 8,
                borderRadius: r + 4,
                boxShadow: "0 0 0 2px rgba(255,255,255,0.4), 0 0 12px 2px rgba(255,255,255,0.15)",
              }}
            />
          </motion.div>
        </>
      )}

      {/* Tooltip */}
      <AnimatePresence mode="wait">
        {!transitioning && (
          <motion.div
            key={`tooltip-${currentStep}`}
            initial={{ opacity: 0, y: arrowSide === "bottom" ? 8 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: arrowSide === "bottom" ? 8 : -8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute pointer-events-auto"
            style={tooltipPos}
          >
            {/* Arrow */}
            <div
              className="absolute w-[10px] h-[10px] bg-[#1a1a1a] rotate-45 rounded-[2px]"
              style={arrowStyle}
            />

            {/* Card */}
            <div
              className="bg-[#1a1a1a] rounded-[14px] shadow-[0px_8px_28px_rgba(0,0,0,0.35)] overflow-hidden"
              style={{ width: tooltipW }}
            >
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-center gap-2.5">
                  {isConclusaoStep && (
                    <div className="w-[28px] h-[28px] rounded-[8px] bg-white/10 flex items-center justify-center shrink-0">
                      <span
                        className={`${iconFilled} leading-[0] not-italic`}
                        style={{ fontSize: 16, color: "#a3a3a3" }}
                      >
                        {ICON_LOCK}
                      </span>
                    </div>
                  )}
                  <p
                    className={`${font.medium} text-[15px] sm:text-[16px] text-white leading-[20px] flex-1`}
                  >
                    {stepDef.title}
                  </p>
                  <button
                    onClick={onClose}
                    className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-white/10 transition-colors"
                    aria-label="Fechar tour"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M11 3L3 11M3 3l8 8" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <p
                  className={`${font.regular} text-[13px] sm:text-[14px] text-[#a3a3a3] leading-[19px] sm:leading-[20px]`}
                >
                  {stepDef.description}
                </p>

                {/* Footer: dots + nav */}
                <div className="flex items-center justify-between pt-1">
                  {/* Step dots */}
                  <div className="flex gap-[5px]">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === currentStep ? 18 : 6,
                          height: 6,
                          backgroundColor:
                            i === currentStep
                              ? "white"
                              : "rgba(255,255,255,0.25)",
                          borderRadius: 3,
                        }}
                      />
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-2">
                    {currentStep > 0 && (
                      <button
                        onClick={handlePrev}
                        className={`${font.medium} text-[13px] sm:text-[14px] text-[#a3a3a3] leading-[16px] px-3 py-2 rounded-[10px] cursor-pointer hover:text-white hover:bg-white/10 transition-colors`}
                      >
                        Voltar
                      </button>
                    )}
                    <button
                      onClick={handleNext}
                      className={`${font.medium} bg-white text-[#141414] text-[13px] sm:text-[14px] leading-[16px] px-4 py-2 rounded-[10px] cursor-pointer hover:bg-[#e5e5e5] transition-colors`}
                    >
                      {isLast ? "Entendi!" : "Próximo"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step counter bar */}
              <div className="h-[3px] bg-white/10 w-full">
                <motion.div
                  className="h-full bg-white/60 rounded-full"
                  initial={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  animate={{
                    width: `${((currentStep + 1) / totalSteps) * 100}%`,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
