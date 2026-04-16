"use client";

import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/* --- helpers --- */
const font = {
  regular: "font-['iFood_RC_Textos:Regular',sans-serif] font-normal",
  medium: "font-['iFood_RC_Textos:Medium',sans-serif] font-medium",
  bold: "font-['iFood_RC_Textos:Bold',sans-serif] font-bold",
};
const iconLine = "font-['pomodoro-icon-line:Regular',sans-serif]";
const iconFilled = "font-['pomodoro-icon-filled:Regular',sans-serif]";

const ICON = {
  arrowRight: "\uE891",
  chevronRight: "\uE891",
  payment: "\uE80F",
  delivery: "\uE81C",
  clock: "\uE860",
  store: "\uE852",
  bank: "\uE808",
  menu: "\uE851",
  star: "\uE85A",
  check: "\uE894",
  home: "\uE830",
};

/* --- Icon helper --- */
function Icon({
  glyph,
  filled,
  size = 20,
  color = "#141414",
  className = "",
}: {
  glyph: string;
  filled?: boolean;
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`${filled ? iconFilled : iconLine} leading-[0] not-italic ${className}`}
      style={{ fontSize: size, color }}
    >
      {glyph}
    </span>
  );
}

/* --- Step data --- */
const steps = [
  {
    number: 1,
    icon: ICON.payment,
    iconFilled: false,
    title: "Formas de pagamento",
    description: "Configure as bandeiras de cartões e outros métodos de pagamento que sua loja vai aceitar.",
    status: "pending" as const,
  },
  {
    number: 2,
    icon: ICON.delivery,
    iconFilled: true,
    title: "Área de entrega",
    description: "Defina o raio de entrega e as regiões que sua loja vai atender.",
    status: "pending" as const,
  },
  {
    number: 3,
    icon: ICON.clock,
    iconFilled: false,
    title: "Horários",
    description: "Configure os dias e horários em que sua loja ficará aberta no iFood.",
    status: "pending" as const,
  },
  {
    number: 4,
    icon: ICON.store,
    iconFilled: false,
    title: "Perfil da loja",
    description: "Adicione logo, descrição e informações que seus clientes verão.",
    status: "pending" as const,
  },
  {
    number: 5,
    icon: ICON.bank,
    iconFilled: false,
    title: "Dados bancários",
    description: "Cadastre a conta onde você receberá seus pagamentos.",
    status: "pending" as const,
  },
  {
    number: 6,
    icon: ICON.menu,
    iconFilled: false,
    title: "Cardápio",
    description: "Monte seu cardápio com itens, preços, fotos e descrições.",
    status: "pending" as const,
  },
  {
    number: 7,
    icon: ICON.star,
    iconFilled: false,
    title: "Conclusão",
    description: "Revise tudo e ative sua loja para começar a receber pedidos.",
    status: "pending" as const,
  },
];

/* --- Step Card --- */
function StepCard({
  step,
  isLast,
  isCompleted,
  isLocked,
  onClick,
}: {
  step: (typeof steps)[0];
  isLast: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  onClick?: () => void;
}) {
  return (
    <div className="flex gap-2.5 sm:gap-3">
      {/* Left: number + connector */}
      <div className="flex flex-col items-center">
        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 ${
            isCompleted
              ? "bg-[#007a3f]"
              : isLocked
              ? "bg-[#ccc]"
              : "bg-[#141414]"
          }`}
        >
          {isCompleted ? (
            <Icon glyph={ICON.check} filled size={14} color="white" />
          ) : isLocked ? (
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M4.375 5.833V4.083a2.625 2.625 0 0 1 5.25 0v1.75" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              <rect x="3.208" y="5.833" width="7.583" height="5.542" rx="1.5" stroke="white" strokeWidth="1.2"/>
              <circle cx="7" cy="8.604" r="0.875" fill="white"/>
            </svg>
          ) : (
            <span className={`${font.bold} text-[12px] sm:text-[13px] text-white leading-none`}>
              {step.number}
            </span>
          )}
        </div>
        {!isLast && (
          <div className={`w-px flex-1 my-0.5 ${isCompleted ? "bg-[#007a3f]" : "bg-[#dcdcdc]"}`} />
        )}
      </div>

      {/* Right: content */}
      <div className={`flex-1 ${isLast ? "pb-0" : "pb-3 sm:pb-4"}`}>
        <div
          onClick={isLocked ? undefined : onClick}
          className={`bg-white rounded-[10px] px-3 py-2.5 border transition-colors group ${
            isLocked
              ? "border-[#ebebeb] opacity-60 cursor-not-allowed"
              : isCompleted
              ? "border-[#007a3f]/20 cursor-pointer hover:border-[#007a3f]/40"
              : "border-[#ebebeb] hover:border-[#ccc] cursor-pointer"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 transition-colors ${
              isCompleted ? "bg-[#e8f5e9]" : "bg-[#f5f5f5] group-hover:bg-[#ebebeb]"
            }`}>
              <Icon
                glyph={step.icon}
                filled={isCompleted ? true : step.iconFilled}
                size={18}
                color={isCompleted ? "#007a3f" : isLocked ? "#a3a3a3" : "#141414"}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`${font.medium} text-[14px] sm:text-[15px] leading-[18px] ${
                isLocked ? "text-[#a3a3a3]" : isCompleted ? "text-[#007a3f]" : "text-[#141414]"
              }`}>
                {step.title}
              </p>
              <p className={`${font.regular} text-[12px] sm:text-[13px] leading-[16px] sm:leading-[18px] ${
                isLocked ? "text-[#a3a3a3]" : "text-[#999]"
              }`}>
                {step.description}
              </p>
            </div>
            {!isLocked && (
              <Icon glyph={ICON.chevronRight} filled={false} size={14} color="#999" className="shrink-0" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Info Card --- */
function InfoCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-[12px] p-4 border border-[#ebebeb] flex gap-3 items-start flex-1 min-w-[240px]">
      <div className="w-10 h-10 rounded-[10px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
        <Icon glyph={icon} filled size={20} color="#141414" />
      </div>
      <div className="flex-1">
        <p className={`${font.medium} text-[14px] sm:text-[15px] text-[#141414] leading-[20px]`}>
          {title}
        </p>
        <p className={`${font.regular} text-[13px] sm:text-[14px] text-[#666] leading-[18px] sm:leading-[20px] mt-0.5`}>
          {description}
        </p>
      </div>
    </div>
  );
}

/* --- Welcome Modal --- */
function WelcomeModal({
  onAccept,
  onSkip,
}: {
  onAccept: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onSkip}
      />
      {/* Modal card */}
      <div className="relative bg-white rounded-[20px] shadow-[0px_16px_48px_rgba(0,0,0,0.2)] w-full max-w-[440px] overflow-hidden animate-[modalIn_0.3s_ease-out]">
        {/* Gradient top accent */}
        <div
          className="h-[4px] w-full"
          style={{
            background:
              "linear-gradient(90deg, #EB0033 0%, #FF0CC1 50%, #EB0033 100%)",
          }}
        />

        <div className="p-6 sm:p-8 flex flex-col gap-5">
          {/* Icon */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[14px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
              <Icon glyph={ICON.home} filled size={28} color="#EB0033" />
            </div>
            <div className="flex-1">
              <p
                className={`${font.medium} text-[18px] sm:text-[20px] text-[#141414] leading-[24px]`}
              >
                Quer conhecer seu novo painel?
              </p>
            </div>
          </div>

          {/* Description */}
          <p
            className={`${font.regular} text-[14px] sm:text-[15px] text-[#666] leading-[20px] sm:leading-[22px]`}
          >
           Preparamos um tour rápido para mostrar onde ficam as etapas de configuração da sua loja e como acompanhar seu progresso.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-2">
            {[
              { glyph: ICON.menu, text: "Onde configurar sua loja" },
              { glyph: ICON.check, text: "Como acompanhar o progresso" },
              { glyph: ICON.star, text: "Por onde começar" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Icon glyph={item.glyph} filled={false} size={16} color="#666" />
                </div>
                <span
                  className={`${font.regular} text-[13px] sm:text-[14px] text-[#444] leading-[18px]`}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              onClick={onSkip}
              className={`${font.medium} text-[14px] text-[#666] leading-[16px] px-4 py-2.5 rounded-[12px] cursor-pointer hover:bg-[#f5f5f5] transition-colors`}
            >
              Pular
            </button>
            <button
              onClick={onAccept}
              className="bg-[#141414] flex items-center gap-2 px-5 py-2.5 rounded-[12px] cursor-pointer hover:bg-[#333] transition-colors"
            >
              <span
                className={`${font.medium} text-[14px] text-white leading-[16px]`}
              >
                Vamos lá!
              </span>
              <Icon
                glyph={ICON.arrowRight}
                filled={false}
                size={16}
                color="white"
              />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* --- Step order --- */
const STEP_ORDER_HOME = ["Formas de pagamento", "Área de entrega", "Horários", "Perfil da loja", "Dados bancários", "Cardápio"];

/* --- Main Export --- */
export function HomePage({
  onNavigateToStep,
  completedSteps = new Set<string>(),
}: {
  onNavigateToStep?: (step: string) => void;
  completedSteps?: Set<string>;
}) {
  const allConfigDone = STEP_ORDER_HOME.every((s) => completedSteps.has(s));
  const completedCount = completedSteps.size;
  const hasShownModal = useRef(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    if (hasShownModal.current) return;
    hasShownModal.current = true;
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptTour = () => {
    setShowWelcomeModal(false);
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("start-product-tour"));
    }, 300);
  };

  const handleSkipTour = () => {
    setShowWelcomeModal(false);
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full pb-24">
      {/* Welcome modal */}
      {showWelcomeModal && (
        <WelcomeModal onAccept={handleAcceptTour} onSkip={handleSkipTour} />
      )}

      {/* Hero welcome */}
      <div className="relative bg-[#141414] rounded-[16px] sm:rounded-[20px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1661704450248-87df8749d823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc3RvcmUlMjBvd25lciUyMGhhcHB5fGVufDF8fHx8MTc3MzY2OTk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.7) 100%)",
          }}
        />
        {/* Content */}
        <div className="relative z-10 p-4 sm:p-6">
          <div className="flex items-center gap-3 max-w-[600px]">
            <span className="text-[22px] sm:text-[24px]">&#x1F44B;</span>
            <div className="flex flex-col gap-0.5">
              <h1 className={`${font.bold} text-[18px] sm:text-[22px] text-white leading-[24px] sm:leading-[28px]`}>
                Boas vindas ao iFood!
              </h1>
              <p className={`${font.regular} text-[13px] sm:text-[14px] text-white/70 leading-[18px] sm:leading-[20px]`}>
                Vamos te guiar em cada etapa para configurar sua loja e começar a receber pedidos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col gap-1">
          <h2 className={`${font.medium} text-[18px] sm:text-[20px] text-[#141414] leading-[24px]`}>
            Como funciona?
          </h2>
          <p className={`${font.regular} text-[14px] sm:text-[15px] text-[#666] leading-[20px]`}>
            São 3 coisas simples que você precisa saber antes de começar:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <InfoCard
            icon={ICON.menu}
            title="Preencha as etapas"
            description="Complete cada seção com as informações da sua loja, no seu ritmo."
          />
          <InfoCard
            icon={ICON.check}
            title="Acompanhe o progresso"
            description="Veja o que já foi feito e o que falta para ativar sua loja."
          />
          <InfoCard
            icon={ICON.star}
            title="Comece a vender"
            description="Ao finalizar todas as etapas, sua loja estará pronta para receber pedidos."
          />
        </div>
      </div>

      {/* Steps timeline */}
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className={`${font.medium} text-[18px] sm:text-[20px] text-[#141414] leading-[24px]`}>
              Suas etapas de configuração
            </h2>
            <div className="bg-[#f5f5f5] px-2 py-0.5 rounded-full">
              <span className={`${font.medium} text-[12px] text-[#666] leading-[16px]`}>
                {completedCount} de 6
              </span>
            </div>
          </div>
          <p className={`${font.regular} text-[14px] sm:text-[15px] text-[#666] leading-[20px]`}>
            Complete cada etapa abaixo para ativar sua loja. Você pode fazê-las
            na ordem que preferir.
          </p>
        </div>

        <div data-tour-step="steps-timeline" className="bg-[#f5f5f5] rounded-[14px] sm:rounded-[16px] p-2.5 sm:p-4">
          {steps.map((step, i) => {
            const isConclusao = step.title === "Conclusão";
            const isStepCompleted = isConclusao ? allConfigDone : completedSteps.has(step.title);
            const isStepLocked = isConclusao && !allConfigDone;
            return (
              <StepCard
                key={step.number}
                step={step}
                isLast={i === steps.length - 1}
                isCompleted={isStepCompleted}
                isLocked={isStepLocked}
                onClick={() => {
                  if (isConclusao && allConfigDone) {
                    onNavigateToStep?.("Conclusão");
                  } else if (!isConclusao) {
                    onNavigateToStep?.(step.title);
                  }
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Tips section */}
      <div className="bg-[#f5f5f5] rounded-[16px] sm:rounded-[20px] p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
            <span className="text-[20px]">&#x1F4A1;</span>
          </div>
          <div className="flex-1">
            <p className={`${font.medium} text-[15px] sm:text-[16px] text-[#141414] leading-[20px]`}>
              Dica para começar bem
            </p>
            <p className={`${font.regular} text-[13px] sm:text-[14px] text-[#666] leading-[18px] sm:leading-[20px] mt-1`}>
              Comece pela <strong className={font.medium}>Área de entrega</strong> e pelo{" "}
              <strong className={font.medium}>Cardápio</strong> &#8212; são as etapas que mais
              impactam suas chances de receber o primeiro pedido rapidamente.
              Lojas que completam o cadastro em até 7 dias têm 65% mais chances
              de vender na primeira semana!
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <button
          data-tour-step="cta-start"
          onClick={() => onNavigateToStep?.("Formas de pagamento")}
          className="bg-[#141414] text-white w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] cursor-pointer hover:bg-[#333] transition-colors"
        >
          <span className={`${font.medium} text-[16px] leading-[24px]`}>
            Começar configuração
          </span>
          <Icon glyph={ICON.arrowRight} filled={false} size={20} color="white" />
        </button>
        <p className={`${font.regular} text-[13px] text-[#999] leading-[16px]`}>
          Leva em media 15 minutos para completar todas as etapas
        </p>
      </div>
    </div>
  );
}
