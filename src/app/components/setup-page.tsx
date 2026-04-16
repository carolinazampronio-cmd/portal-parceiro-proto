"use client";

import { useState, useEffect, useRef } from "react";
import { HomePage } from "./home-page";
import svgPaths from "../imports/svg-gqk7d3rskd";
import svgPathsPerfil from "../imports/svg-8gkwtvt5bm";
import { imgRectangle34626331 } from "../imports/svg-ewidz";
import { imgRectangle as imgPerfilMask } from "../imports/svg-579wf";
import { HorariosContent } from "./horarios-content";

/* --- Image constants (local assets) --- */
const imgAvatarImage = "/images/41d4e8aee82aff46fff4cca6964fe1df4c5520aa.png";
const imgImage = "/images/289b77d720a4a66de0b319887d75f5177268e96d.png";
const imgImage1 = "/images/675add243789e305acf40accf6974d6fe2d40199.png";
const imgImage2 = "/images/2a0e97517b3341cc1f0dc3a8593e238f9cf501f7.png";
const imgRectangle41870 = "/images/2b36b14206bda26b7fdbfe67dafae0ccdaef61b4.png";
const imgRectangle41871 = "/images/b6cbf86aa805fa00241ac7a17826f89925f3ab79.png";
const imgRectangle41872 = "/images/ef6b33b4fb40bd3359dba56405fb33c147a07041.png";
const imgRectangle41869 = "/images/0763c5274875b1001b6076fef9545fa56898c452.png";
const imgPerfilLogo = "/images/863013c4d50f27ba796b04109bc6d1804ff359c0.png";
const imgPerfilMascot = "/images/df0235dff04071b34c55ca151e6baaca851f1af8.png";

/* --- helpers --- */
const font = {
  regular: "font-['iFood_RC_Textos:Regular',sans-serif] font-normal",
  medium: "font-['iFood_RC_Textos:Medium',sans-serif] font-medium",
  bold: "font-['iFood_RC_Textos:Bold',sans-serif] font-bold",
};
const iconLine = "font-['pomodoro-icon-line:Regular',sans-serif]";
const iconFilled = "font-['pomodoro-icon-filled:Regular',sans-serif]";

/* --- Icon Unicode map --- */
const ICON = {
  home: "\uE830",
  payment: "\uE80F",
  delivery: "\uE81C",
  clock: "\uE860",
  store: "\uE852",
  bank: "\uE808",
  menu: "\uE851",
  star: "\uE85A",
  users: "\uE801",
  logout: "\uE8BC",
  chevronDown: "\uE978",
  help: "\uE82D",
  check: "\uE894",
  arrowRight: "\uE891",
  close: "\uE82D",
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

/* --- Sidebar menu items --- */
const STEP_ORDER = ["Formas de pagamento", "Área de entrega", "Horários", "Perfil da loja", "Dados bancários", "Cardápio"];

const menuItemsDef = [
  { glyph: ICON.home, label: "Início" },
  { glyph: ICON.payment, label: "Formas de pagamento" },
  { glyph: ICON.delivery, label: "Área de entrega" },
  { glyph: ICON.clock, label: "Horários" },
  { glyph: ICON.store, label: "Perfil da loja" },
  { glyph: ICON.bank, label: "Dados bancários" },
  { glyph: ICON.menu, label: "Cardápio" },
  { glyph: ICON.star, label: "Conclusão" },
];

/* --- Store selector --- */
function StoreSelector({ completedCount }: { completedCount: number }) {
  const total = STEP_ORDER.length;
  const pct = (completedCount / total) * 100;

  let statusLabel: string;
  let statusColor: string;
  if (completedCount === 0) {
    statusLabel = `Vamos começar? (${completedCount} de ${total})`;
    statusColor = "#ccc";
  } else if (completedCount < total) {
    statusLabel = `Em configuração (${completedCount} de ${total})`;
    statusColor = "#EB0033";
  } else {
    statusLabel = `Configuração concluída! (${completedCount} de ${total})`;
    statusColor = "#EB0033";
  }

  return (
    <div className="bg-white rounded-[12px] p-3 w-full">
      <p className={`${font.medium} text-[14px] text-[#141414] leading-[16px]`}>
        Loja fechada
      </p>
      <p className={`${font.regular} text-[12px] text-[#666] leading-[16px] mt-0.5`}>
        {statusLabel}
      </p>
      <div className="mt-1 bg-[#ccc] rounded-full h-1 w-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%`, backgroundColor: statusColor }}
        />
      </div>
    </div>
  );
}

/* --- Sidebar --- */
function Sidebar({
  onClose,
  activeTab,
  onTabChange,
  completedSteps,
}: {
  onClose?: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  completedSteps: Set<string>;
}) {
  const allConfigDone = STEP_ORDER.every((s) => completedSteps.has(s));
  const completedCount = completedSteps.size;
  const isConclusaoLocked = !allConfigDone;

  return (
    <div className="flex flex-col justify-between h-full bg-[#f5f5f5] lg:bg-[#f5f5f5]">
      <div className="flex flex-col gap-2 px-1">
        {/* close btn on mobile */}
        {onClose && (
          <div className="flex justify-end p-2 lg:hidden">
            <button onClick={onClose} className="p-1 cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        )}
        <div className="px-1">
          <StoreSelector completedCount={completedCount} />
        </div>
        {/* Divider */}
        <div className="h-0 relative w-full">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block w-full h-px" fill="none" preserveAspectRatio="none" viewBox="0 0 216 1">
              <path d="M0 0.5H216" stroke="#DCDCDC" />
            </svg>
          </div>
        </div>
        <div data-tour-step="sidebar-menu" className="flex flex-col gap-[8px]">
        {menuItemsDef.map((item, index) => {
          const isActive = activeTab === item.label;
          const isCompleted = completedSteps.has(item.label);
          const isLocked = item.label === "Conclusão" && isConclusaoLocked;

          let iconGlyph = item.glyph;
          let iconColor = "#141414";
          let isFilled = false;

          if (isLocked) {
            iconGlyph = ICON.star;
            iconColor = "#a3a3a3";
            isFilled = false;
          } else if (isCompleted && !isActive) {
            iconGlyph = ICON.check;
            iconColor = "#007a3f";
            isFilled = true;
          } else if (isActive) {
            isFilled = true;
            iconColor = "#141414";
          }

          return (
            <div key={item.label}>
              {index === 1 && (
                <div className="h-0 relative w-full mb-2">
                  <div className="absolute inset-[-0.5px_0]">
                    <svg className="block w-full h-px mx-[0px] mt-[0px] mb-[8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 216 1">
                      <path d="M0 0.5H216" stroke="#DCDCDC" />
                    </svg>
                  </div>
                </div>
              )}
              <button
                data-tour-step={item.label === "Conclusão" ? "conclusao-menu" : undefined}
                disabled={isLocked}
                onClick={() => {
                  if (isLocked) return;
                  onTabChange(item.label);
                  onClose?.();
                }}
                className={`flex gap-[8px] items-center h-[40px] px-3 rounded-[12px] transition-colors w-full text-left relative ${
                  isLocked
                    ? "opacity-50 cursor-not-allowed"
                    : isActive
                    ? "bg-white cursor-pointer"
                    : "hover:bg-[rgba(0,0,0,0.08)] cursor-pointer"
                }`}
              >
                <div className="flex flex-col items-center justify-center shrink-0 w-[12px]">
                  <Icon
                    glyph={iconGlyph}
                    filled={isFilled}
                    size={20}
                    color={iconColor}
                  />
                </div>
                <span
                  className={`${font.medium} text-[14px] leading-[16px] whitespace-nowrap ${
                    isLocked ? "text-[#a3a3a3]" : "text-[#141414]"
                  }`}
                >
                  {item.label}
                </span>
                {isLocked && (
                  <div className="ml-auto shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M4.375 5.833V4.083a2.625 2.625 0 0 1 5.25 0v1.75" stroke="#a3a3a3" strokeWidth="1.2" strokeLinecap="round"/>
                      <rect x="3.208" y="5.833" width="7.583" height="5.542" rx="1.5" stroke="#a3a3a3" strokeWidth="1.2"/>
                      <circle cx="7" cy="8.604" r="0.875" fill="#a3a3a3"/>
                    </svg>
                  </div>
                )}
                {isActive && (
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#ebebeb] inset-0 pointer-events-none rounded-[12px] px-[0px] pt-[8px] pb-[0px]"
                  />
                )}
              </button>
            </div>
          );
        })}
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-2 px-1 pb-6">
        <button className="flex gap-[8px] items-center h-[40px] px-2 rounded-[12px] hover:bg-[rgba(0,0,0,0.08)] transition-colors cursor-pointer w-full text-left">
          <div className="inline-grid leading-[0] shrink-0">
            <div className="w-6 h-6 rounded-full bg-[#e0e0e0] flex items-center justify-center overflow-hidden relative">
              <img
                src={imgAvatarImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className={`${font.medium} text-[14px] text-[#666] leading-[16px]`}>C</span>
            </div>
          </div>
          <span
            className={`${font.medium} text-[14px] text-[#141414] leading-[16px]`}
          >
            Minha conta
          </span>
        </button>
        <button
          onClick={() => {
            onTabChange("Conclusão");
            onClose?.();
          }}
          className="flex gap-[8px] items-center h-[40px] px-3 rounded-[12px] hover:bg-[rgba(0,0,0,0.08)] transition-colors cursor-pointer w-full text-left"
        >
          <div className="flex flex-col items-center justify-center shrink-0 w-[12px]">
            <Icon glyph={ICON.users} size={20} />
          </div>
          <span
            className={`${font.medium} text-[14px] text-[#141414] leading-[16px]`}
          >
            Usuários
          </span>
        </button>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("start-portal-transition"))}
          className="flex gap-[8px] items-center h-[40px] px-3 rounded-[12px] hover:bg-[rgba(0,0,0,0.08)] transition-colors cursor-pointer w-full text-left"
        >
          <div className="flex flex-col items-center justify-center shrink-0 w-[12px]">
            <Icon glyph={ICON.logout} size={20} />
          </div>
          <span
            className={`${font.medium} text-[14px] text-[#141414] leading-[16px]`}
          >
            Sair
          </span>
        </button>
      </div>
    </div>
  );
}

/* --- Progress bar chip --- */
function BarIndicator({
  bars,
}: {
  bars: { color: string }[];
}) {
  return (
    <div className="flex gap-[1.5px] items-end shrink-0">
      {bars.map((b, i) => (
        <div
          key={i}
          className="rounded-t-[1px] w-[3px]"
          style={{
            height: i === 0 ? 5 : i === 1 ? 9 : 13,
            backgroundColor: b.color,
          }}
        />
      ))}
    </div>
  );
}

/* --- Metric Card --- */
function MetricCard({
  title,
  value,
  meta,
  bars,
}: {
  title: string;
  value: string;
  meta: string;
  bars: { color: string }[];
}) {
  return (
    <div className="bg-white rounded-[12px] p-3 sm:p-4 flex flex-col justify-between min-h-[110px] sm:min-h-[130px] flex-1 min-w-0">
      <div className="flex gap-1.5 sm:gap-2 items-center justify-between">
        <p className={`${font.regular} text-[12px] sm:text-[14px] text-[#666] leading-[16px] flex-1`}>
          {title}
        </p>
        <BarIndicator bars={bars} />
      </div>
      <div className="mt-auto">
        <div className="flex items-end justify-between gap-1">
          <div className="min-w-0">
            <p className={`${font.medium} text-[16px] sm:text-[18px] text-[#141414] leading-[20px] sm:leading-[24px]`}>
              {value}
            </p>
            <div className="bg-[#f5f5f5] inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full mt-0.5">
              <span className={`${font.medium} text-[10px] sm:text-[12px] text-[#141414] leading-[14px] sm:leading-[16px] whitespace-nowrap`}>
                {meta}
              </span>
            </div>
          </div>
          <div className="relative w-8 h-8 flex items-center justify-center rounded-[8px] shrink-0">
            <Icon glyph={ICON.arrowRight} filled size={16} />
            <div
              aria-hidden="true"
              className="absolute border border-[#ebebeb] inset-0 pointer-events-none rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Segmentation Progress --- */
function SegmentationBar() {
  return (
    <div className="flex gap-1 w-full">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`flex-1 h-1 rounded-full ${i <= 3 ? "animate-[gradientShift_6s_ease-in-out_infinite]" : "bg-[#ebebeb]"}`}
          style={i <= 3 ? { backgroundImage: "linear-gradient(270deg, #C850C0, #FF0CC1, #EB0033, #FF0CC1, #C850C0)", backgroundSize: "400% 400%" } : undefined}
        />
      ))}
    </div>
  );
}

/* --- Competitive Analysis header row --- */
function CompetitiveHeader() {
  return (
    <div className="flex items-center gap-1 pl-2">
      <div className="relative w-[23px] h-[23px] shrink-0">
        <div className="absolute inset-[13.95%_11.85%_0_0]">
          <svg
            className="block w-full h-full"
            viewBox="0 0 20.3086 20.3086"
            fill="none"
          >
            <path
              d={svgPaths.p34204600}
              fill="url(#paint_grad_comp)"
            />
            <defs>
              <linearGradient
                id="paint_grad_comp"
                x1="17.8732"
                x2="3.42185"
                y1="-0.152266"
                y2="18.8619"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF0CC1" />
                <stop offset="1" stopColor="#EB0033" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[-7.08%_-7.25%_52.9%_51.75%]">
          <svg
            className="block w-full h-full"
            viewBox="0 0 12.7868 12.7868"
            fill="none"
          >
            <path d={svgPaths.p325f3780} fill="#F5F5F5" />
          </svg>
        </div>
        <div className="absolute inset-[0_0_59.98%_59.01%]">
          <svg
            className="block w-full h-full"
            viewBox="0 0 9.44432 9.44432"
            fill="none"
          >
            <path d={svgPaths.p2dc07000} fill="#141414" />
          </svg>
        </div>
        <div className="absolute inset-[36.84%_29.03%_26.87%_25.06%]">
          <svg
            className="block w-full h-full"
            viewBox="0 0 10.5772 8.56592"
            fill="none"
          >
            <path d={svgPaths.p31ef0600} fill="white" />
            <path d={svgPaths.p14472af0} fill="white" />
          </svg>
        </div>
      </div>
      <span className={`${font.medium} text-[14px] text-[#141414] leading-[16px]`}>
        Análise competitiva
      </span>
    </div>
  );
}

/* --- Top summary card (level bar) --- */
function LevelCard() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
      <div className="bg-white rounded-[12px] p-4 flex flex-col gap-2 justify-center col-span-2">
        <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>
          Nível 3 de 5
        </p>
        <div>
          <p className={`${font.medium} text-[18px] text-[#141414] leading-[24px]`}>
            Pronto para começar a vender!
          </p>
          <div className="mt-2">
            <SegmentationBar />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[12px] p-4 flex flex-col justify-between">
        <div className="flex gap-2 items-center justify-between">
          <p className={`${font.regular} text-[14px] text-[#666] leading-[16px] flex-1`}>
            Investimento iFood para sua loja
          </p>
          <BarIndicator
            bars={[
              { color: "#1fad68" },
              { color: "#1fad68" },
              { color: "#1fad68" },
            ]}
          />
        </div>
        <div className="mt-2">
          <p className={`${font.medium} text-[18px] text-[#141414] leading-[24px]`}>
            R$ 100,00
          </p>
          <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>
            em cupom para clientes
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[12px] p-4 flex flex-col justify-between group/star cursor-pointer">
        <div className="flex gap-2 items-center justify-between">
          <div className="shrink-0 w-3 h-3">
            <svg viewBox="0 0 11.9999 11.9999" fill="none" className="w-full h-full transition-transform duration-700 ease-in-out group-hover/star:rotate-[360deg]">
              <path
                d={svgPaths.p3d4dba00}
                fill="url(#paint_grad_star)"
              />
              <defs>
                <linearGradient
                  id="paint_grad_star"
                  x1="10.5609"
                  x2="2.0219"
                  y1="-0.0899707"
                  y2="11.1451"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF0CC1" />
                  <stop offset="1" stopColor="#EB0033" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className={`${font.regular} text-[14px] text-[#666] leading-[16px] flex-1`}>
            Chances do primeiro pedido
          </p>
        </div>
        <div className="mt-2">
          <p className={`${font.medium} text-[18px] text-[#141414] leading-[24px]`}>
            65%
          </p>
          <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>
            em até 7 dias
          </p>
        </div>
      </div>
    </div>
  );
}

/* --- Video card --- */
function VideoCard({
  image,
  title,
  time,
}: {
  image: string;
  title: string;
  time: string;
}) {
  return (
    <div className="flex flex-col gap-4 shrink-0 w-[260px] sm:w-[275px] group/video cursor-pointer">
      <div className="relative bg-[#d9d9d9] rounded-[13px] overflow-hidden aspect-[16/10] transition-transform duration-300 ease-in-out group-hover/video:scale-[1.03]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-[#f5f5f5] rounded-full p-1.5">
          <svg width="22" height="22" viewBox="0 0 21.875 21.875" fill="none">
            <mask
              id="m_play"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
              width="22"
              height="22"
              x="0"
              y="0"
            >
              <rect fill="#D9D9D9" width="21.875" height="21.875" />
            </mask>
            <g mask="url(#m_play)">
              <path d={svgPaths.p248c8140} fill="#1C1B1F" />
            </g>
          </svg>
        </div>
        <div className="absolute top-2 right-2 bg-black rounded-full px-1.5 py-1">
          <span className={`${font.bold} text-[11px] text-white leading-none`}>
            {time}
          </span>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-black/10 inset-0 pointer-events-none rounded-[13px]"
        />
      </div>
      <p className={`${font.medium} text-[15px] text-[#141414] leading-[17px]`}>
        {title}
      </p>
    </div>
  );
}

/* --- Checklist --- */
const checkItems = [
  "Revisei meu cardápio",
  "Revisei horário de funcionamento",
  "A logística de entrega está pronta",
  "Estou com a operação pronta para receber pedidos",
];

function Checklist({ onAllChecked, className }: { onAllChecked?: (allChecked: boolean) => void; className?: string }) {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  useEffect(() => {
    onAllChecked?.(checked.size === checkItems.length);
  }, [checked, onAllChecked]);

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  return (
    <div className={`flex flex-col rounded-[12px] overflow-hidden ${className ?? ""}`}>
      {checkItems.map((item) => {
        const isChecked = checked.has(item);
        return (
          <button
            key={item}
            onClick={() => toggle(item)}
            className="bg-white flex flex-1 gap-3 items-center px-3 py-3 border-b border-[#f0f0f0] last:border-b-0 cursor-pointer hover:bg-[#fafafa] transition-colors text-left"
          >
            <div
              className={`w-4 h-4 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                isChecked ? "bg-[#141414]" : "border border-[#ccc] bg-white"
              }`}
            >
              {isChecked && <Icon glyph={ICON.check} filled size={16} color="white" />}
            </div>
            <span
              className={`${font.medium} text-[14px] leading-[16px] transition-colors ${
                isChecked ? "text-[#a3a3a3] line-through" : "text-[#141414]"
              }`}
            >
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* --- Videos section with scroll --- */
function VideosSection() {
  const videosScrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onVideosMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - videosScrollRef.current!.offsetLeft);
    setScrollLeft(videosScrollRef.current!.scrollLeft);
  };

  const onVideosMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - videosScrollRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    videosScrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const onVideosMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      data-tour-target="meus-primeiros-passos"
      className="bg-[#f5f5f5] rounded-[20px] p-2 sm:p-3 w-full"
    >
      <div className="pl-2 mb-3 flex items-center gap-1">
        <div className="shrink-0 w-3 h-3 cursor-pointer [&:hover_svg]:animate-[spin360_600ms_ease-in-out_1]">
          <svg viewBox="0 0 11.9999 11.9999" fill="none" className="w-full h-full">
            <path d={svgPaths.p3d4dba00} fill="url(#paint_grad_star_videos)" />
            <defs>
              <linearGradient id="paint_grad_star_videos" x1="10.5609" x2="2.0219" y1="-0.0899707" y2="11.1451" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF0CC1" />
                <stop offset="1" stopColor="#EB0033" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className={`${font.medium} text-[14px] text-[#141414] leading-[16px]`}>
          Meus primeiros passos{" "}
        </span>
      </div>
      <div className="bg-white rounded-[12px] overflow-hidden">
        <div
          ref={videosScrollRef}
          onMouseDown={onVideosMouseDown}
          onMouseMove={onVideosMouseMove}
          onMouseUp={onVideosMouseUp}
          onMouseLeave={onVideosMouseUp}
          className="overflow-x-auto p-3 cursor-grab select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div data-tour-videos="true" className="flex gap-3 w-max">
            <VideoCard
              image={imgImage}
              title="Entenda como ficar com a loja aberta e por onde você receberá os pedidos"
              time="6:15"
            />
            <VideoCard
              image={imgImage1}
              title="Como aparecer no topo do ranking do iFood?"
              time="6:15"
            />
            <VideoCard
              image={imgImage2}
              title="Aprenda como usar o Portal do Parceiro no seu dia a dia"
              time="8:33"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Header bar (top) --- */
function TopHeader({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <div className="bg-[#f5f5f5] flex items-center justify-between h-[46px] px-2 sticky top-0 z-30">
      <div className="flex items-center">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 cursor-pointer rounded-[8px] hover:bg-white/60 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="4" width="16" height="2" rx="1" fill="#141414" />
            <rect x="2" y="9" width="16" height="2" rx="1" fill="#141414" />
            <rect x="2" y="14" width="16" height="2" rx="1" fill="#141414" />
          </svg>
        </button>
        <div className="w-12 h-12 relative shrink-0">
          <svg
            className="absolute inset-0 block w-5 h-5 m-auto"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip_wink)" opacity="0.9">
              <mask
                id="mask_wink"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "luminance" }}
                width="20"
                height="20"
                x="0"
                y="0"
              >
                <path d="M20 0H0V20H20V0Z" fill="white" />
              </mask>
              <g mask="url(#mask_wink)">
                <path d={svgPaths.p392e2e00} stroke="#EB0033" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d={svgPaths.p10bfbe00} stroke="#EB0033" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d={svgPaths.p37304400} fill="#EB0033" />
              </g>
            </g>
            <defs>
              <clipPath id="clip_wink">
                <rect fill="white" width="20" height="20" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="bg-[#f5f5f5] flex gap-[8px] items-center h-[32px] p-2 rounded-[12px]">
          <div className="relative shrink-0 w-[24px] h-[24px]">
            <div className="absolute left-[4px] top-[4px]">
              <Icon glyph={ICON.store} filled size={16} color="#ccc" />
            </div>
            <div className="absolute left-0 top-0">
              <div className="mr-[-12px] relative rounded-[8px] shrink-0 w-[24px] h-[24px]">
                <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                  <div className="absolute left-0 rounded-[7.2px] w-[24px] h-[24px] top-0">
                    <div className="absolute inset-0 pointer-events-none rounded-[7.2px]">
                      <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] w-full h-full" src={imgRectangle41870} />
                      <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] w-full h-full" src={imgRectangle41871} />
                      <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] w-full h-full" src={imgRectangle41872} />
                      <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] w-full h-full" src={imgRectangle41869} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ebebeb] left-[12px] overflow-clip rounded-full w-[20px] h-[20px] top-[10px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px]">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="#A3A3A3" r="4" />
                </svg>
              </div>
            </div>
          </div>
          <span
            className={`${font.medium} text-[12px] text-[#141414] leading-[16px] hidden sm:inline overflow-hidden text-ellipsis whitespace-nowrap`}
          >
            Zamps food
          </span>
          <Icon glyph={ICON.chevronDown} filled size={16} color="#666" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="overflow-clip relative shrink-0 w-[40px] h-[40px]">
          <div className="absolute flex items-center justify-center left-0 p-3 rounded-[12px] w-[40px] h-[40px] top-0">
            <Icon glyph={ICON.help} size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Main content --- */
function MainContent({ onChecklistChange }: { onChecklistChange?: (allChecked: boolean) => void }) {
  return (
    <div className="flex flex-col gap-5 w-full pb-24">
      <div className="flex flex-col gap-1">
        <h1 className={`${font.medium} text-[20px] text-black leading-[24px]`}>
          Parabéns! Você passou por todas as etapas.
        </h1>
        <p className={`${font.regular} text-[16px] text-[#666] leading-[20px]`}>
          <span
            className={`${font.medium} bg-clip-text text-[transparent]`}
            style={{
              backgroundImage:
                "linear-gradient(194.955deg, rgb(255, 12, 193) 17.935%, rgb(246, 6, 127) 50.47%, rgb(235, 0, 51) 87.702%)",
            }}
          >
            Pelos dados preenchidos.
          </span>
          {" "}Te mostramos a força que sua loja tem em relação a outras lojas da
          sua região na mesma categoria
        </p>
      </div>

      <div className="bg-[#f5f5f5] rounded-[20px] p-2 sm:p-3 flex flex-col gap-2">
        <CompetitiveHeader />
        <LevelCard />
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
          <MetricCard
            title="Funcionamento"
            value="9h/semana"
            meta="Meta > 10h/semana"
            bars={[
              { color: "#ffc347" },
              { color: "#ffc347" },
              { color: "#ebebeb" },
            ]}
          />
          <MetricCard
            title="Quantidade de itens"
            value="10 itens"
            meta="Meta > 8 itens"
            bars={[
              { color: "#1fad68" },
              { color: "#1fad68" },
              { color: "#1fad68" },
            ]}
          />
          <MetricCard
            title="Descrição dos itens"
            value="80%"
            meta="Meta = 80%"
            bars={[
              { color: "#1fad68" },
              { color: "#1fad68" },
              { color: "#1fad68" },
            ]}
          />
          <MetricCard
            title="Itens com foto"
            value="60%"
            meta="Meta = 75%"
            bars={[
              { color: "#ffc347" },
              { color: "#ffc347" },
              { color: "#ebebeb" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-5 xl:items-stretch">
        <div className="flex-1 min-w-0">
          <VideosSection />
        </div>
        <div className="w-full xl:w-[380px] shrink-0 flex">
          <div className="bg-[#f5f5f5] rounded-[20px] p-2 sm:p-3 flex-1 flex flex-col gap-4">
            <div className="pl-2">
              <span
                className={`${font.medium} text-[14px] text-[#141414] leading-[16px]`}
              >
                Meus primeiros passos{" "}
              </span>
            </div>
            <Checklist onAllChecked={onChecklistChange} className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Mobile drawer overlay --- */
function MobileDrawer({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#f5f5f5] z-50 transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}
      </div>
    </>
  );
}

/* --- Step footer --- */
function StepFooter({
  tabName,
  onBack,
  onNext,
}: {
  tabName: string;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-[#ebebeb] lg:left-[240px]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <button
          onClick={onBack}
          className="bg-transparent relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <div className="flex gap-[8px] items-center justify-center overflow-clip px-4 py-3">
            <span className={`${font.medium} text-[14px] text-[#EB0033] leading-[16px] whitespace-nowrap`}>
              Voltar
            </span>
          </div>
        </button>
        <button
          onClick={onNext}
          className="flex gap-[8px] items-center justify-center overflow-clip px-5 py-3 rounded-[12px] shrink-0 cursor-pointer hover:bg-[#d8002f] active:bg-[#c5002b] transition-colors bg-[#eb0033]"
        >
          <span className={`${font.medium} text-[14px] text-white leading-[16px] whitespace-nowrap`}>
            Próximo
          </span>
          <Icon glyph={ICON.arrowRight} filled={false} size={16} color="white" />
        </button>
      </div>
    </div>
  );
}

/* --- Config step content --- */
const STEP_DESCRIPTIONS: Record<string, { title: string; desc: string }> = {
  "Formas de pagamento": {
    title: "Formas de pagamento",
    desc: "Configure as bandeiras de cartões e outros métodos de pagamento que sua loja vai aceitar.",
  },
  "Área de entrega": {
    title: "Área de entrega",
    desc: "Defina o raio de entrega e as regiões que sua loja vai atender.",
  },
  "Horários": {
    title: "Horários",
    desc: "Configure os dias e horários em que sua loja ficará aberta no iFood.",
  },
  "Perfil da loja": {
    title: "Perfil da loja",
    desc: "Adicione logo, descrição e informações que seus clientes verão.",
  },
  "Dados bancários": {
    title: "Dados bancários",
    desc: "Cadastre a conta onde você receberá seus pagamentos.",
  },
  "Cardápio": {
    title: "Cardápio",
    desc: "Monte seu cardápio com itens, preços, fotos e descrições.",
  },
};

/* --- Perfil da loja content --- */
const PEDIDO_OPTIONS = ["Sem minimo", "R$10,00", "R$20,00", "Outro valor"];

function PerfilDaLojaContent({ isCompleted }: { isCompleted: boolean }) {
  const [storeName, setStoreName] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoDragging, setLogoDragging] = useState(false);
  const [selectedPedido, setSelectedPedido] = useState<string | null>(null);
  const [customValue, setCustomValue] = useState("");
  const [customFocused, setCustomFocused] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const stepIndex = STEP_ORDER.indexOf("Perfil da loja");

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) return;
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) return;
    const reader = new FileReader();
    reader.onload = (e) => setLogoPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setLogoDragging(false);
    const file = e.dataTransfer.files?.[0];
    handleFileChange(file ?? null);
  };

  return (
    <div className="flex flex-col gap-5 w-full pb-28">
      <div className="flex items-center gap-2">
        <span className={`${font.regular} text-[13px] text-[#999] leading-[16px]`}>Configuração</span>
        <Icon glyph={ICON.arrowRight} filled={false} size={12} color="#999" />
        <span className={`${font.medium} text-[13px] text-[#141414] leading-[16px]`}>Perfil da loja</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-[10px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
          <Icon glyph={ICON.store} filled size={20} color="#141414" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className={`${font.medium} text-[20px] text-[#141414] leading-[24px]`}>Perfil da loja</h1>
            {isCompleted && (
              <div className="flex items-center gap-1 bg-[#e8f5e9] px-2 py-0.5 rounded-full">
                <Icon glyph={ICON.check} filled size={14} color="#007a3f" />
                <span className={`${font.medium} text-[12px] text-[#007a3f] leading-[16px]`}>Concluida</span>
              </div>
            )}
          </div>
          <p className={`${font.regular} text-[14px] text-[#666] leading-[20px] mt-0.5`}>Configure como sua loja será vista no app do iFood</p>
          <p className={`${font.regular} text-[12px] text-[#999] leading-[16px] mt-1`}>Etapa {stepIndex + 1} de {STEP_ORDER.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-[16px] border border-[#ebebeb] p-5 sm:p-8 flex flex-col gap-8 w-full">
        {/* Nome */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className={`font-['iFood_RC_Textos:Bold',sans-serif] font-bold text-[20px] text-[#141414] leading-[24px]`}>Nome</p>
            <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>Esse é o nome que irá aparecer para os clientes</p>
          </div>
          <div className={`relative rounded-[8px] border transition-colors ${nameFocused ? "border-[#141414]" : "border-[#ebebeb]"}`}>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value.slice(0, 60))}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              placeholder="Nome da sua loja"
              className={`${font.regular} w-full px-3 py-3 text-[16px] text-[#141414] leading-[24px] outline-none bg-transparent placeholder:text-[#a3a3a3] rounded-[8px]`}
            />
          </div>
          {storeName.length > 0 && (
            <p className={`${font.regular} text-[12px] text-[#999] leading-[16px]`}>{storeName.length}/60 caracteres</p>
          )}
        </div>

        <div className="bg-[#ebebeb] h-px w-full" />

        {/* Logo */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 w-full">
            <div className="flex flex-col gap-2 shrink-0">
              <p className={`font-['iFood_RC_Textos:Bold',sans-serif] font-bold text-[20px] text-[#141414] leading-[24px]`}>Logo</p>
              <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>Imagem de até 5 MB em JPG, JPEG ou PNG</p>
            </div>
            <div className="flex items-end shrink-0">
              <div className="h-[48px] mr-[-32px] overflow-clip relative shrink-0 w-[64px] z-[2]">
                <div className="absolute inset-[0_0.1%_-32.99%_0.1%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[63.866px_63.834px]" style={{ maskImage: `url('${imgPerfilMask}')` }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPerfilLogo} />
                  </div>
                </div>
              </div>
              <div className="bg-[#ffebef] flex-1 min-w-0 mr-[-32px] relative rounded-[12px] z-[1]">
                <div className="flex items-end justify-center pl-[40px] pr-[16px] py-[9px]">
                  <p className={`${font.regular} text-[10px] text-[#666] leading-[normal]`}>
                    <span>Números de telefone e links para outros sites não podem aparecer na imagem. Consulte nossa </span>
                    <span className="underline cursor-pointer hover:text-[#141414] transition-colors">Política de Conteúdo</span>
                    <span>.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            className="hidden"
            onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
          />
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setLogoDragging(true); }}
            onDragLeave={() => setLogoDragging(false)}
            onDrop={handleDrop}
            className={`relative bg-[#f5f5f5] rounded-[16px] w-full cursor-pointer transition-colors ${logoDragging ? "bg-[#ebebeb] ring-2 ring-[#141414]" : "hover:bg-[#ebebeb]"}`}
          >
            <div className="flex flex-col gap-6 items-center justify-center px-6 py-8">
              {logoPreview ? (
                <div className="relative">
                  <img src={logoPreview} alt="Logo preview" className="w-16 h-16 rounded-[24px] object-cover" />
                  <button
                    onClick={(e) => { e.stopPropagation(); setLogoPreview(null); }}
                    className="absolute -top-2 -right-2 bg-[#141414] text-white rounded-full w-5 h-5 flex items-center justify-center text-[12px] cursor-pointer hover:bg-[#333] transition-colors"
                  >
                    x
                  </button>
                </div>
              ) : (
                <div className="bg-[#ebebeb] rounded-[24px] w-16 h-16 flex items-center justify-center">
                  <span className={`${iconFilled} text-[24px] text-[#a3a3a3] opacity-60 leading-[24px] not-italic`}>{"\uE8E1"}</span>
                </div>
              )}
              <div className="flex flex-col gap-2 items-center">
                <div className="bg-[rgba(0,0,0,0.64)] flex gap-2.5 items-center justify-center px-4 py-2 rounded-full">
                  <span className={`${iconFilled} text-[16px] text-white leading-[16px] not-italic`}>{"\uE8E1"}</span>
                  <span className={`font-['iFood_RC_Textos:Bold',sans-serif] font-bold text-[14px] text-white leading-[16px] whitespace-nowrap`}>
                    {logoPreview ? "Trocar logo" : "Clique para enviar seu logo"}
                  </span>
                </div>
                <p className={`${font.regular} text-[12px] text-[#666] leading-[16px] text-center`}>Tamanho mínimo: 85 x 85 px</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#ebebeb] h-px w-full" />

        {/* Pedido mínimo */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 w-full">
            <div className="flex flex-col gap-2 shrink-0">
              <p className={`font-['iFood_RC_Textos:Bold',sans-serif] font-bold text-[20px] text-[#141414] leading-[24px]`}>Pedido mínimo</p>
              <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>Esse é o valor mínimo de compra na loja</p>
            </div>
            <div className="flex items-end shrink-0">
              <div className="h-[48px] mr-[-32px] overflow-clip relative shrink-0 w-[64px] z-[2]">
                <div className="absolute h-[41.247px] left-[1.24px] top-[13.5px] w-[59.302px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.3018 41.2468">
                    <path d={svgPathsPerfil.p22fe8070} fill="#FFDEEC" />
                  </svg>
                </div>
                <div className="absolute h-[13px] left-[20px] top-[36.5px] w-[17px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0002 13">
                    <path d={svgPathsPerfil.p1325f980} fill="#FCF7F5" />
                  </svg>
                </div>
                <div className="absolute bottom-[-17px] h-[64px] right-[13px] w-[43px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPerfilMascot} />
                </div>
              </div>
              <div className="bg-[#ebf8ff] flex items-end justify-center mr-[-32px] pl-[40px] pr-[16px] py-[9px] rounded-[12px] z-[1]">
                <span className={`${font.medium} text-[12px] text-[#141414] leading-[16px] whitespace-nowrap`}>R$20,00 é um bom começo</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full">
            {PEDIDO_OPTIONS.map((option) => {
              const isActive = selectedPedido === option;
              return (
                <button
                  key={option}
                  onClick={() => setSelectedPedido(option)}
                  className={`flex-1 min-w-[100px] h-[48px] rounded-full flex items-center justify-center px-3 transition-all cursor-pointer relative ${
                    isActive ? "bg-[#141414]" : "bg-white hover:bg-[#f5f5f5]"
                  }`}
                >
                  <span className={`${font.medium} text-[14px] leading-[16px] whitespace-nowrap transition-colors ${isActive ? "text-white" : "text-[#141414]"}`}>
                    {option}
                  </span>
                  <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-full transition-colors ${isActive ? "border-[#141414]" : "border-[#ebebeb]"}`} />
                </button>
              );
            })}
          </div>

          {selectedPedido === "Outro valor" && (
            <div className={`relative rounded-[8px] border transition-colors ${customFocused ? "border-[#141414]" : "border-[#ebebeb]"}`}>
              <div className="flex items-center px-3">
                <span className={`${font.regular} text-[16px] text-[#666] leading-[24px]`}>R$</span>
                <input
                  type="text"
                  value={customValue}
                  onChange={(e) => setCustomValue(e.target.value.replace(/[^0-9,.]/g, ""))}
                  onFocus={() => setCustomFocused(true)}
                  onBlur={() => setCustomFocused(false)}
                  placeholder="0,00"
                  className={`${font.regular} flex-1 py-3 pl-1 text-[16px] text-[#141414] leading-[24px] outline-none bg-transparent placeholder:text-[#a3a3a3]`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StepContent({
  tabName,
  isCompleted,
}: {
  tabName: string;
  isCompleted: boolean;
}) {
  const info = STEP_DESCRIPTIONS[tabName];
  const stepIcon = menuItemsDef.find((m) => m.label === tabName)?.glyph ?? ICON.store;
  const stepIndex = STEP_ORDER.indexOf(tabName);

  return (
    <div className="flex flex-col gap-5 w-full pb-28">
      <div className="flex items-center gap-2">
        <span className={`${font.regular} text-[13px] text-[#999] leading-[16px]`}>
          Configuração
        </span>
        <Icon glyph={ICON.arrowRight} filled={false} size={12} color="#999" />
        <span className={`${font.medium} text-[13px] text-[#141414] leading-[16px]`}>
          {tabName}
        </span>
      </div>

      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-[10px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
          <Icon glyph={stepIcon} filled size={20} color="#141414" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className={`${font.medium} text-[20px] text-[#141414] leading-[24px]`}>
              {info?.title}
            </h1>
            {isCompleted && (
              <div className="flex items-center gap-1 bg-[#e8f5e9] px-2 py-0.5 rounded-full">
                <Icon glyph={ICON.check} filled size={14} color="#007a3f" />
                <span className={`${font.medium} text-[12px] text-[#007a3f] leading-[16px]`}>
                  Concluida
                </span>
              </div>
            )}
          </div>
          <p className={`${font.regular} text-[14px] text-[#666] leading-[20px] mt-0.5`}>
            {info?.desc}
          </p>
          <p className={`${font.regular} text-[12px] text-[#999] leading-[16px] mt-1`}>
            Etapa {stepIndex + 1} de {STEP_ORDER.length}
          </p>
        </div>
      </div>

      <div className="bg-[#f5f5f5] rounded-[16px] p-4 sm:p-6 min-h-[300px] flex flex-col gap-4">
        <p className={`${font.regular} text-[14px] text-[#666] leading-[20px]`}>
          Conteúdo da configuração de <strong className={font.medium}>{tabName}</strong> será exibido aqui.
        </p>
        <div className="flex-1 flex items-center justify-center opacity-30">
          <Icon glyph={stepIcon} filled size={64} color="#a3a3a3" />
        </div>
      </div>
    </div>
  );
}

/* --- Setup Page (main export) --- */
export function SetupPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Início");
  const [completedSteps, setCompletedSteps] = useState(new Set<string>());
  const [checklistReady, setChecklistReady] = useState(false);

  const allConfigDone = STEP_ORDER.every((s) => completedSteps.has(s));

  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const step = (e as CustomEvent).detail;
      if (typeof step === "string") {
        setActiveTab(step);
      }
    };
    window.addEventListener("navigate-to-step", handleNavigate);
    return () => window.removeEventListener("navigate-to-step", handleNavigate);
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab === "Conclusão" && allConfigDone) {
      setActiveTab(tab);
      window.dispatchEvent(new CustomEvent("open-conclusao-dialog"));
      return;
    }
    setActiveTab(tab);
  };

  const handleCompleteAndAdvance = () => {
    const next = new Set(completedSteps);
    next.add(activeTab);
    setCompletedSteps(next);

    const nowAllDone = STEP_ORDER.every((s) => next.has(s));
    if (nowAllDone) {
      setActiveTab("Conclusão");
      window.dispatchEvent(new CustomEvent("open-conclusao-dialog"));
      return;
    }

    const currentIndex = STEP_ORDER.indexOf(activeTab);
    for (let i = 1; i <= STEP_ORDER.length; i++) {
      const nextIndex = (currentIndex + i) % STEP_ORDER.length;
      const nextStep = STEP_ORDER[nextIndex];
      if (!next.has(nextStep)) {
        setActiveTab(nextStep);
        return;
      }
    }
  };

  const handleBack = () => {
    const currentIndex = STEP_ORDER.indexOf(activeTab);
    if (currentIndex <= 0) {
      setActiveTab("Início");
    } else {
      setActiveTab(STEP_ORDER[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <TopHeader onMenuToggle={() => setDrawerOpen(true)} />

      <div className="flex flex-1">
        <div className="hidden lg:block w-[224px] shrink-0 h-[calc(100vh-46px)] sticky top-[46px] overflow-y-auto">
          <Sidebar activeTab={activeTab} onTabChange={handleTabChange} completedSteps={completedSteps} />
        </div>

        <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Sidebar
            onClose={() => setDrawerOpen(false)}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            completedSteps={completedSteps}
          />
        </MobileDrawer>

        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-t-[16px] lg:rounded-[16px] min-h-[calc(100vh-46px)] p-4 sm:p-6">
            {activeTab === "Início" ? (
              <HomePage
                onNavigateToStep={(step) => handleTabChange(step)}
                completedSteps={completedSteps}
              />
            ) : activeTab === "Conclusão" ? (
              <MainContent onChecklistChange={setChecklistReady} />
            ) : activeTab === "Perfil da loja" ? (
              <PerfilDaLojaContent isCompleted={completedSteps.has("Perfil da loja")} />
            ) : activeTab === "Horários" ? (
              <HorariosContent isCompleted={completedSteps.has("Horários")} />
            ) : (
              <StepContent tabName={activeTab} isCompleted={completedSteps.has(activeTab)} />
            )}
          </div>
        </div>
      </div>

      {STEP_ORDER.includes(activeTab) && (
        <StepFooter
          tabName={activeTab}
          onBack={handleBack}
          onNext={handleCompleteAndAdvance}
        />
      )}

      {activeTab === "Conclusão" && (
        <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-[#ebebeb] lg:left-[240px]">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center px-4 sm:px-6 py-3">
            <button
              disabled={!checklistReady}
              onClick={() => {
                if (!checklistReady) return;
                window.dispatchEvent(new CustomEvent("start-portal-transition"));
              }}
              data-tour-step="cta-pronto-vender"
              className={`flex gap-[8px] items-center justify-center overflow-clip px-5 py-3 rounded-[12px] shrink-0 transition-colors ${
                checklistReady
                  ? "bg-[#eb0033] hover:bg-[#d8002f] active:bg-[#c5002b] cursor-pointer"
                  : "bg-[#ccc] cursor-not-allowed"
              }`}
            >
              <span className={`${font.medium} text-[14px] text-white leading-[16px] whitespace-nowrap`}>
                Estou pronto para vender
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
