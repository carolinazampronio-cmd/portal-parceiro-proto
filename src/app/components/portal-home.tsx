"use client";

import svgPaths from "../imports/svg-l9p7v75z7c";
import svgPathsPlay from "../imports/svg-uk87l1hkl3";
import svgArrow from "../imports/svg-19m6eyrroq";

import React from "react";

/* ─── Image constants ─── */
const imgRectangle41870 = "/images/2b36b14206bda26b7fdbfe67dafae0ccdaef61b4.png";
const imgRectangle41871 = "/images/b6cbf86aa805fa00241ac7a17826f89925f3ab79.png";
const imgRectangle41872 = "/images/ef6b33b4fb40bd3359dba56405fb33c147a07041.png";
const imgRectangle41869 = "/images/0763c5274875b1001b6076fef9545fa56898c452.png";
const imgAvatarImage = "/images/06c9cf3d782f106514a2aeda5c3d5870c7d149ae.png";
const imgVideoThumb = "/images/289b77d720a4a66de0b319887d75f5177268e96d.png";

/* ─── Typography helpers ─── */
const f = {
  r: "font-['iFood_RC_Textos:Regular',sans-serif] font-normal",
  m: "font-['iFood_RC_Textos:Medium',sans-serif] font-medium",
  b: "font-['iFood_RC_Textos:Bold',sans-serif] font-bold",
};
const iL = "font-['pomodoro-icon-line:Regular',sans-serif]";
const iF = "font-['pomodoro-icon-filled:Regular',sans-serif]";

/* ═══════════════════════════════════════════
   HEADER :: OS
   ═══════════════════════════════════════════ */
function Symbol() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip_ph)" opacity="0.9">
          <mask height="20" id="mask_ph" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="20" x="0" y="0">
            <path d="M20 0H0V20H20V0Z" fill="white" />
          </mask>
          <g mask="url(#mask_ph)">
            <path d={svgPaths.p392e2e00} stroke="#EB0033" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d={svgPaths.p10bfbe00} stroke="#EB0033" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d={svgPaths.p37304400} fill="#EB0033" />
          </g>
        </g>
        <defs><clipPath id="clip_ph"><rect fill="white" height="20" width="20" /></clipPath></defs>
      </svg>
    </div>
  );
}

function BrandStatus() {
  return (
    <div className="relative shrink-0 size-[24px]">
      {/* Thumbnail */}
      <div className="absolute content-stretch flex items-end justify-end left-0 pr-[12px] top-0">
        <div className="bg-[#db0006] mr-[-12px] overflow-clip relative rounded-[8px] shrink-0 size-[24px]">
          <div className="absolute left-0 rounded-[7.2px] size-[24px] top-0">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[7.2px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] size-full" src={imgRectangle41870} />
              <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] size-full" src={imgRectangle41871} />
              <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] size-full" src={imgRectangle41872} />
            </div>
          </div>
          <div className="absolute left-0 rounded-[7.2px] size-[24px] top-0">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[7.2px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] size-full" src={imgRectangle41870} />
              <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] size-full" src={imgRectangle41871} />
              <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] size-full" src={imgRectangle41869} />
            </div>
          </div>
        </div>
      </div>
      {/* Status indicator */}
      <div className="absolute left-[12px] overflow-clip rounded-[9999px] size-[20px] top-[10px]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="#1FAD68" opacity="0.1" r="10" />
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[8px] top-1/2">
          <svg className="absolute block size-full" fill="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="#1FAD68" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeaderOs() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-between shrink-0 sticky top-0 w-full z-30 px-1 md:px-0">
      {/* Left */}
      <div className="content-stretch flex items-center">
        <div className="content-stretch flex items-center">
          <div className="relative shrink-0 size-[48px] cursor-pointer hover:opacity-80 transition-opacity"><Symbol /></div>
          <div data-tour-portal="store-status" className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <BrandStatus />
            <div className={`flex flex-col ${f.m} justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[12px] text-ellipsis whitespace-nowrap hidden sm:flex`}>
              <p className="leading-[16px] overflow-hidden">{`Zamps food`}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="content-stretch flex items-center relative shrink-0">
        {/* IA badge - hide on mobile */}
        <div className="h-[23.6px] relative shrink-0 w-[23.039px] hidden sm:block cursor-pointer hover:scale-110 transition-transform">
          <div className="absolute inset-[13.95%_11.85%_0_0]">
            <svg className="absolute block size-full" fill="none" viewBox="0 0 20.3086 20.3086">
              <path d={svgPaths.p34204600} fill="url(#pg_ia)" />
              <defs><linearGradient gradientUnits="userSpaceOnUse" id="pg_ia" x1="17.8732" x2="3.42185" y1="-0.152266" y2="18.8619"><stop stopColor="#FF0CC1" /><stop offset="1" stopColor="#EB0033" /></linearGradient></defs>
            </svg>
          </div>
          <div className="absolute inset-[-7.08%_-7.25%_52.9%_51.75%]">
            <svg className="absolute block size-full" fill="none" viewBox="0 0 12.7868 12.7868"><path d={svgPaths.p325f3780} fill="#F5F5F5" /></svg>
          </div>
          <div className="absolute inset-[0_0_59.98%_59.01%]">
            <svg className="absolute block size-full" fill="none" viewBox="0 0 9.44432 9.44432"><path d={svgPaths.p2dc07000} fill="#141414" /></svg>
          </div>
          <div className="absolute inset-[36.84%_29.03%_26.87%_25.06%]">
            <svg className="absolute block size-full" fill="none" viewBox="0 0 10.5772 8.56592">
              <path d={svgPaths.p31ef0600} fill="white" /><path d={svgPaths.p14472af0} fill="white" />
            </svg>
          </div>
        </div>
        {/* Help icon - hide on mobile */}
        <div className="overflow-clip relative shrink-0 size-[40px] hidden sm:block cursor-pointer group">
          <div className="absolute content-stretch flex items-center justify-center left-0 p-[12px] rounded-[12px] size-[40px] top-0 transition-colors duration-150 group-hover:bg-[rgba(0,0,0,0.06)]">
            <div className={`flex flex-col ${iL} justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap`}>
              <p className="leading-[normal]">{"\uE82D"}</p>
            </div>
          </div>
        </div>
        {/* Bell with badge */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px] cursor-pointer group">
          <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[40px] transition-colors duration-150 group-hover:bg-[rgba(0,0,0,0.06)]">
            <div className={`flex flex-col ${iL} justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap`}>
              <p className="leading-[normal]">{"\uE80C"}</p>
            </div>
            <div className="absolute bg-[#eb0033] content-stretch flex flex-col h-[16px] items-start left-[20px] min-w-[16px] overflow-clip px-[5px] rounded-[9999px] top-[3px]">
              <div className={`flex flex-col font-['iFood_RC_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap`}>
                <p className="leading-[16px]">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SIDEBAR (collapsed icon-only)
   ═══════════════════════════════════════════ */
function SidebarIcon({ glyph, active, hasBadge }: { glyph: string; active?: boolean; hasBadge?: boolean }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="overflow-clip relative shrink-0 size-[40px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute content-stretch flex items-center justify-center left-0 p-[12px] rounded-[12px] size-[40px] top-0 transition-colors duration-150 ${active ? "bg-white" : hovered ? "bg-[rgba(0,0,0,0.06)]" : ""}`}>
        {active && <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[12px]" />}
        <div className={`flex flex-col ${active ? iF : iL} justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap transition-transform duration-150 ${hovered && !active ? "scale-110" : ""}`}>
          <p className="leading-[normal]">{glyph}</p>
        </div>
      </div>
      {hasBadge && <div className="absolute bg-[#eb0033] right-[4px] rounded-[9999px] size-[8px] top-[4px]" />}
    </div>
  );
}

function GestorTooltip() {
  const [activeThumb, setActiveThumb] = React.useState<string | null>(null);
  return (
    <div className="flex items-center">
      {/* Arrow pointing left */}
      <svg width="13" height="28" viewBox="0 0 13 27.4446" fill="none" className="shrink-0 -mr-px">
        <path d={svgArrow.p392b10c0} fill="#25252f" />
      </svg>
      {/* Tooltip body */}
      <div className="w-[244px] bg-[#25252f] rounded-[16px] shadow-[0px_10px_20px_0px_rgba(21,21,21,0.16)]">
        <div className="overflow-clip rounded-[inherit] p-[4px]">
          <div className="bg-[#04040f] rounded-[12px] p-[16px] flex flex-col gap-[12px]">
            {/* Text */}
            <p className={`${f.r} text-[14px] text-[#a1a1a5] leading-[16px] not-italic`}>
              <span>{`Você está dentro do horário de funcionamento da sua loja, ao acessar o gestor de pedidos você ficará online automaticamente `}</span>
              <span className={`${f.m} text-white`}>e poderá receber pedidos.</span>
            </p>
            {/* Actions */}
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-[4px] items-center">
                {["\uE867", "\uE868"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setActiveThumb(activeThumb === g ? null : g)}
                    className={`relative rounded-full shrink-0 size-[32px] flex items-center justify-center cursor-pointer transition-colors duration-150 ${activeThumb === g ? "bg-[#36363f]" : "hover:bg-[#1a1a24]"}`}
                  >
                    <span className={`${iL} text-[16px] leading-[16px] not-italic transition-colors duration-150 ${activeThumb === g ? "text-white" : "text-[#a1a1a5]"}`}>{g}</span>
                    <div aria-hidden="true" className={`absolute border-[0.667px] border-solid inset-0 pointer-events-none rounded-full transition-colors duration-150 ${activeThumb === g ? "border-[#505060]" : "border-[#36363f]"}`} />
                  </button>
                ))}
              </div>
              <button className="relative rounded-[8px] shrink-0 cursor-pointer group/link">
                <div className="flex items-center justify-center overflow-clip p-[8px] rounded-[inherit]">
                  <span className={`${f.m} text-[14px] text-white leading-[16px] not-italic whitespace-nowrap group-hover/link:underline`}>Como fechar a loja?</span>
                </div>
                <div aria-hidden="true" className="absolute border border-[#36363f] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors duration-150 group-hover/link:border-[#505060]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GestorDePedidosIcon() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div data-tour-portal="gestor-pedidos" className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <SidebarIcon glyph={"\uE847"} />
      {hovered && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-[2px] z-50">
          <GestorTooltip />
        </div>
      )}
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bottom-0 content-stretch hidden md:flex flex-col items-center justify-between left-0 pb-[24px] pt-[48px] px-[4px] top-[48px] z-20">
      {/* Top menu */}
      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[4px] relative rounded-[11px] shrink-0 w-[40px]">
        <SidebarIcon glyph={"\uE830"} active />
        <SidebarIcon glyph={"\uE8D4"} />
        <SidebarIcon glyph={"\uE874"} />
        <SidebarIcon glyph={"\uE851"} />
        <SidebarIcon glyph={"\uE841"} hasBadge />
        <SidebarIcon glyph={"\uE8DF"} />
      </div>
      {/* Bottom */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <GestorDePedidosIcon />
        <SidebarIcon glyph={"\uE817"} />
        {/* Avatar */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
                <img alt="" className="absolute block max-w-none size-full" src={imgAvatarImage} />
              </div>
            </div>
            <div className="bg-[#e0e0e0] col-1 ml-0 mt-0 relative rounded-[9999px] row-1 size-[24px]">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className={`flex flex-[1_0_0] flex-col ${f.m} justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#666] text-[14px] text-center w-full`}>
                  <p className="leading-[16px]">D</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MOBILE BOTTOM NAV
   ═══════════════════════════════════════════ */
function MobileBottomNav() {
  const items = [
    { glyph: "\uE830", label: "Início", active: true },
    { glyph: "\uE8D4", label: "Pedidos", active: false },
    { glyph: "\uE874", label: "Cardápio", active: false },
    { glyph: "\uE851", label: "Loja", active: false },
    { glyph: "\uE841", label: "Mais", active: false, hasBadge: true },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#ebebeb] flex items-center justify-around py-1.5 z-30 md:hidden safe-area-bottom">
      {items.map((item) => (
        <button
          key={item.label}
          className="flex flex-col items-center justify-center gap-0.5 px-2 py-1 cursor-pointer relative"
        >
          <div className="relative">
            <span
              className={`${item.active ? iF : iL} text-[20px] leading-[20px] not-italic transition-colors ${item.active ? "text-[#141414]" : "text-[#999]"}`}
            >
              {item.glyph}
            </span>
            {item.hasBadge && (
              <div className="absolute -top-0.5 -right-1 bg-[#eb0033] rounded-full size-[6px]" />
            )}
          </div>
          <span
            className={`${f.m} text-[10px] leading-[12px] not-italic ${item.active ? "text-[#141414]" : "text-[#999]"}`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   SUB-HEADER PAGE
   ═══════════════════════════════════════════ */
function SubHeaderPage() {
  return (
    <div className="bg-white content-stretch flex h-[56px] items-center px-[16px] md:px-[24px] py-[12px] rounded-tl-none rounded-tr-none md:rounded-tl-[24px] md:rounded-tr-[24px] shrink-0 w-full relative">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none rounded-tl-none rounded-tr-none md:rounded-tl-[24px] md:rounded-tr-[24px]" />
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0">
          {/* Icon Avatar */}
          <div className="bg-[#141414] relative rounded-[6px] shrink-0 size-[20px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-1/2">
              <div className={`flex flex-col ${iF} justify-center leading-[0] not-italic relative shrink-0 text-[10.24px] text-white whitespace-nowrap`}>
                <p className="leading-[normal]">{"\uE830"}</p>
              </div>
            </div>
          </div>
          <p className={`${f.m} leading-[16px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap`}>Início</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CHECKLIST CARD (left)
   ═══════════════════════════════════════════ */
function CheckedBox() {
  return (
    <div className="bg-[#141414] relative rounded-[4px] shrink-0 size-[16px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-1/2">
          <div className={`flex flex-col ${iF} justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap`}>
            <p className="leading-[16px]">{"\uE894"}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function UncheckedBox() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ChecklistItem({ label, checked, onToggle, link }: { label: string; checked?: boolean; onToggle?: () => void; link?: string }) {
  return (
    <div className={`bg-white flex-[1_0_0] min-h-px min-w-px relative w-full transition-colors duration-150 hover:bg-[#fafafa] ${onToggle ? "cursor-pointer" : ""}`} onClick={onToggle}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[12px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
              <div className="content-stretch flex items-start relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  {checked ? <CheckedBox /> : <UncheckedBox />}
                </div>
              </div>
              <p className={`flex-[1_0_0] ${f.m} leading-[14px] min-h-px min-w-px not-italic relative text-[12px] transition-colors duration-150 ${checked ? "text-[#999] line-through" : "text-[#141414]"}`}>{label}</p>
            </div>
            {link && (
              <button
                onClick={(e) => e.stopPropagation()}
                className={`[text-decoration-skip-ink:none] decoration-solid ${f.m} leading-[14px] not-italic relative shrink-0 text-[#141414] text-[12px] underline whitespace-nowrap cursor-pointer hover:text-[#eb0033] transition-colors duration-150`}
              >
                {link}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChecklistCard() {
  const [checkedItems, setCheckedItems] = React.useState<Set<number>>(new Set([0]));
  const toggle = (i: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  const items = [
    { label: "Estar com a operação pronta para receber pedidos" },
    { label: "Saber como abrir e fechar a loja", link: "Saiba mais" },
    { label: "Abrir gestor de pedidos", link: "Saiba mais" },
    { label: "Cumprir tempo online" },
    { label: "Aceitar o seu primeiro pedido" },
  ];
  return (
    <div data-tour-portal="primeiros-passos" className="bg-[#f5f5f5] flex-[2_1_0] min-h-[280px] min-w-px relative rounded-[20px]">
      <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[8px] relative size-full">
        {/* Header */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center pl-[8px] relative w-full">
                 <div className={`flex flex-col ${f.m} justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[13px] whitespace-nowrap`}>
                   <p className="leading-[16px]">Meus primeiros passos</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content: Video + Checklist side by side */}
        <div data-tour-portal-scroll="primeiros-passos" className="content-stretch flex gap-[12px] items-stretch relative shrink-0 w-full flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Video card */}
          <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center p-[12px] relative rounded-[12px] shrink-0 cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.02]">
            <div className="content-stretch flex flex-col gap-[17.5px] items-start relative shrink-0 w-[200px] md:w-[279.453px]">
              {/* Thumbnail */}
              <div className="bg-[#d9d9d9] h-[110px] md:h-[153.125px] relative rounded-[13.125px] shrink-0 w-full">
                <div className="overflow-clip relative rounded-[inherit] size-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVideoThumb} />
                  {/* Play button */}
                  <div className="absolute bg-[#f5f5f5] bottom-[8.75px] content-stretch flex items-start left-[8.75px] p-[6.563px] rounded-[999px]">
                    <div className="relative shrink-0 size-[21.875px]">
                      <svg className="absolute block size-full" fill="none" viewBox="0 0 21.875 21.875">
                        <mask height="22" id="mask_play" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="22" x="0" y="0">
                          <rect fill="#D9D9D9" height="21.875" width="21.875" />
                        </mask>
                        <g mask="url(#mask_play)">
                          <path d={svgPathsPlay.p248c8140} fill="#1C1B1F" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* Time badge */}
                  <div className="absolute bg-black content-stretch flex items-start px-[6.563px] py-[4.375px] right-[8.2px] rounded-[999px] top-[8.75px]">
                    <p className={`${f.b} leading-[normal] not-italic relative shrink-0 text-[10.94px] text-white whitespace-nowrap`}>6:15</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[1.094px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[13.125px]" />
              </div>
              {/* Video title */}
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8.75px] items-start pr-[8.75px] relative w-full">
                  <div className={`flex flex-col ${f.m} justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[11px] md:text-[12px] w-full`}>
                    <p className="leading-[15px]">Entenda como ficar com a loja aberta e por onde você receberá os pedidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Checklist */}
          <div className="content-stretch flex flex-col items-start min-h-px min-w-[240px] shrink-0 overflow-clip relative rounded-[12px] flex-1">
            <div className="content-stretch flex flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[12px] w-full h-full">
              <div className="content-stretch flex flex-col gap-px items-start min-h-px min-w-px relative w-full h-full">
                {items.map((item, i) => (
                  <ChecklistItem key={i} label={item.label} checked={checkedItems.has(i)} onToggle={() => toggle(i)} link={item.link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   iFOOD INVESTE EM VOCÊ CARD (right)
   ═══════════════════════════════════════════ */
function BarIndicator({ colors }: { colors: string[] }) {
  return (
    <div className="content-stretch flex gap-[1.5px] items-end relative shrink-0">
      {colors.map((c, i) => (
        <div key={i} className="rounded-tl-[1px] rounded-tr-[1px] shrink-0 w-[3px]" style={{ height: i === 0 ? 5 : i === 1 ? 9 : 13, backgroundColor: c }} />
      ))}
    </div>
  );
}

function ForcaCard() {
  return (
    <div data-tour-portal="investimento" className="bg-[#f5f5f5] flex-[0.7_1_0] min-h-px min-w-px md:max-w-[320px] relative rounded-[20px]">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full">
          {/* Header */}
          <div className="h-[28px] relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[8px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                  <div className={`flex flex-col ${f.m} justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[13px] whitespace-nowrap`}>
                    <p className="leading-[16px]">Rumo ao primeiro pedido!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content card */}
          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full">
            <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
              {/* Top row */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <p className={`flex-[1_0_0] ${f.r} leading-[14px] min-h-px min-w-px not-italic relative text-[#666] text-[11px]`}>Investimento iFood para sua loja</p>
                <BarIndicator colors={["#1fad68","#1fad68","#1fad68"]} />
              </div>
              {/* Value */}
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full mt-[4px]">
                <div className="content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0">
                  <p className={`${f.m} leading-[24px] relative shrink-0 text-[#141414] text-[18px] whitespace-nowrap`}>R$100,00</p>
                  <p className={`${f.r} leading-[14px] relative shrink-0 text-[#666] text-[11px]`}>em cupom para clientes</p>
                </div>
              </div>
            </div>
          </div>
          {/* Chances do primeiro pedido card */}
          <div className="bg-white min-h-px min-w-px relative rounded-[12px] w-full">
            <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
              {/* Top row */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="shrink-0 w-3 h-3 cursor-pointer [&:hover_svg]:animate-[spin360_600ms_ease-in-out_1]">
                  <svg viewBox="0 0 11.9999 11.9999" fill="none" className="w-full h-full">
                    <path d={svgPaths.p3d4dba00} fill="url(#paint_grad_star_invest)" />
                    <defs>
                      <linearGradient id="paint_grad_star_invest" x1="10.5609" x2="2.0219" y1="-0.0899707" y2="11.1451" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF0CC1" />
                        <stop offset="1" stopColor="#EB0033" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className={`flex-[1_0_0] ${f.r} leading-[14px] min-h-px min-w-px not-italic relative text-[#666] text-[11px]`}>Chances do primeiro pedido</p>
              </div>
              {/* Value */}
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full mt-[4px]">
                <div className="content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0">
                  <p className={`${f.m} leading-[24px] relative shrink-0 text-[#141414] text-[18px] whitespace-nowrap`}>65%</p>
                  <p className={`${f.r} leading-[14px] relative shrink-0 text-[#666] text-[11px]`}>em até 7 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   RADAR iFOOD
   ═══════════════════════════════════════════ */
function GradText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`bg-clip-text ${f.b} not-italic text-[transparent]`}
      style={{
        backgroundImage: "linear-gradient(90deg, #eb0033, #ff0cc1, #eb0033, #ff0cc1)",
        backgroundSize: "300% 100%",
        animation: "gradientShift 3s ease-in-out infinite",
      }}
    >
      {children}
    </span>
  );
}

function BoldText({ children }: { children: React.ReactNode }) {
  return (
    <span className={`${f.b} not-italic text-[#666]`}>{children}</span>
  );
}

function ThumbBtn({ glyph, active, onClick }: { glyph: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-[7280.187px] shrink-0 size-[29.124px] cursor-pointer transition-colors duration-150 ${active ? "bg-[#f0f0f0]" : "hover:bg-[#f5f5f5]"}`}
    >
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute content-stretch flex flex-col items-center justify-center left-[7.28px] top-[7.28px]">
          <div className={`flex flex-col ${iL} justify-center leading-[0] not-italic relative shrink-0 text-[14.56px] whitespace-nowrap transition-colors duration-150 ${active ? "text-[#141414]" : "text-[#666]"}`}>
            <p className="leading-[14.562px]">{glyph}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border-[0.728px] border-solid inset-0 pointer-events-none rounded-[7280.187px] transition-colors duration-150 ${active ? "border-[#141414]" : "border-[#ebebeb]"}`} />
    </button>
  );
}

function RadarCard({ meta, realizado, tag, tagBg, tagColor, title, desc, action }: {
  meta: string; realizado: string; tag: string; tagBg: string; tagColor: string;
  title: string; desc: React.ReactNode; action: string;
}) {
  const [activeThumb, setActiveThumb] = React.useState<string | null>(null);
  return (
    <div className="bg-white content-stretch flex items-center min-h-[169.46px] min-w-[464px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-[0.672px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] h-[184px] items-start p-[12px] relative rounded-[11.649px] shrink-0 w-[460px]">
        {/* Top row */}
        <div className="content-stretch flex gap-[11.649px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
            <p className={`${f.m} leading-[14px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap`}>{meta}</p>
            <p className={`${f.m} leading-[14px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap`}>{realizado}</p>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[9999px] shrink-0" style={{ backgroundColor: tagBg }}>
            <div className={`flex flex-col ${f.m} justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center whitespace-nowrap`} style={{ color: tagColor }}>
              <p className="leading-[14px]">{tag}</p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col h-[69.897px] items-start justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8.737px] items-start not-italic relative shrink-0 w-full">
              <p className={`${f.m} leading-[20px] relative shrink-0 text-[#141414] text-[14px] w-full`}>{title}</p>
              <div className={`content-stretch flex flex-col items-start leading-[0] relative shrink-0 ${f.r} text-[#666] text-[11px] w-full whitespace-nowrap`}>
                {desc}
              </div>
            </div>
          </div>
          {/* Actions row */}
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                <button className="bg-white relative rounded-[8px] shrink-0 cursor-pointer group/action">
                  <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                    <div className={`flex flex-col ${f.m} justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap group-hover/action:text-[#eb0033] transition-colors duration-150`}>
                      <p className="leading-[14px]">{action}</p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors duration-150 group-hover/action:border-[#eb0033]" />
                </button>
              </div>
              <div className="content-stretch flex h-[29.124px] items-center justify-end relative shrink-0 w-[112.126px]">
                <div className="content-stretch flex gap-[5.825px] items-center relative shrink-0">
                  <ThumbBtn glyph={"\uE81E"} active={activeThumb === "down"} onClick={() => setActiveThumb(activeThumb === "down" ? null : "down")} />
                  <ThumbBtn glyph={"\uE83B"} active={activeThumb === "up"} onClick={() => setActiveThumb(activeThumb === "up" ? null : "up")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IaBadge() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute contents left-0 top-[-2px]">
        <div className="absolute h-[15.777px] left-0 top-[0.56px] w-[15.776px]">
          <svg className="absolute block size-full" fill="none" viewBox="0 0 15.7764 15.7773">
            <path d={svgPaths.p2fde8600} fill="url(#pg_radar)" />
            <defs><linearGradient gradientUnits="userSpaceOnUse" id="pg_radar" x1="13.8845" x2="2.65732" y1="-0.118292" y2="14.6528"><stop stopColor="#FF0CC1" /><stop offset="1" stopColor="#EB0033" /></linearGradient></defs>
          </svg>
        </div>
        <div className="absolute left-[10.56px] size-[7.337px] top-[-2px]">
          <svg className="absolute block size-full" fill="none" viewBox="0 0 7.33683 7.33683"><path d={svgPaths.p2620ff80} fill="#141414" /></svg>
        </div>
        <div className={`-translate-y-1/2 absolute flex flex-col ${f.m} justify-center leading-[0] left-[3.7px] not-italic text-[9.438px] text-shadow-[0.591px_0.591px_0px_rgba(0,0,0,0.16)] text-white top-[8.36px] tracking-[-0.1888px] whitespace-nowrap`}>
          <p className="leading-[10.786px]">IA</p>
        </div>
      </div>
    </div>
  );
}

function SegmentControl() {
  const tabs = ["\uE955", "\uE86D", "\uE854"];
  const [active, setActive] = React.useState(0);
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e0e0e0] h-[32px] relative rounded-[16px] shrink-0 w-[120px]">
        {/* Sliding background */}
        <div className="absolute inset-[4px]">
          <div
            className="absolute bg-white h-full rounded-[12px] shadow-[0px_1px_6px_0px_rgba(21,21,21,0.08)] transition-[left] duration-200 ease-out"
            style={{ width: "calc(100% / 3)", left: `calc(${active} * 100% / 3)` }}
          />
        </div>
        {/* Buttons */}
        <div className="absolute content-stretch flex inset-[4px] items-center justify-between">
          {tabs.map((glyph, i) => (
            <button
              key={glyph}
              onClick={() => setActive(i)}
              className="cursor-pointer flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px] z-10"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className={`flex flex-col ${iF} justify-center leading-[0] not-italic relative shrink-0 text-[16px] whitespace-nowrap transition-colors duration-150 ${i === active ? "text-[#141414]" : "text-[#666]"}`}>
                  <p className="leading-[16px]">{glyph}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function RadarSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  return (
    <div data-tour-portal="radar" className="relative w-full">
      {/* Glow behind */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r blur-[6.5px] from-[rgba(235,0,51,0.2)] h-full relative rounded-[20px] to-[rgba(255,12,193,0.2)] w-full">
        </div>
      </div>
      {/* Radar */}
      <div className="bg-[#f5f5f5] relative rounded-[20px] w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[8px] px-[8px] relative rounded-[inherit] w-full">
          {/* Header */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative w-full">
                  <IaBadge />
                  <div className={`flex flex-col ${f.m} justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[13px] whitespace-nowrap`}>
                    <p className="leading-[16px]">Radar iFood</p>
                  </div>
                </div>
              </div>
            </div>
            <SegmentControl />
          </div>
          {/* Cards */}
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="content-stretch flex gap-[8px] min-h-[192px] items-start overflow-x-auto overflow-y-hidden relative shrink-0 w-full pb-[8px] cursor-grab select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <RadarCard
              meta="Meta: 6 horas" realizado="Realizado: 3 horas" tag="Crítico" tagBg="#c00" tagColor="white"
              title="Mais tempo online ajuda sua loja a vender mais"
              desc={
                <div className="flex flex-col">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                    <span className="leading-[16px]">Mantenha sua loja aberta diariamente por mais</span>
                    <span className={`leading-[16px] ${f.b}`}><BoldText>3 horas</BoldText>.</span>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                    <span className="leading-[16px]">Isso ajuda na visibilidade e pode aumentar as vendas em</span>
                    <span className="leading-[16px] text-[transparent]"><GradText>até 50%</GradText></span>
                  </div>
                </div>
              }
              action="Abrir loja agora"
            />
            <RadarCard
              meta="Meta: 11 itens" realizado="Realizado: 8 itens" tag="Atenção" tagBg="#ffc347" tagColor="#141414"
              title="Aumente o número de itens do seu cardápio"
              desc={
                <div className="flex flex-col">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                    <span className="leading-[16px]">Adicione mais </span>
                    <span className={`leading-[16px] ${f.b}`}><BoldText>3 itens</BoldText></span>
                    <span className="leading-[16px]">ao seu cardápio, priorizando pratos com foto.</span>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                    <span className="leading-[16px]">Isso pode aumentar suas vendas em </span>
                    <span className="leading-[16px] text-[transparent]"><GradText>até 16%</GradText></span>
                  </div>
                </div>
              }
              action="Adicionar mais itens"
            />
            <RadarCard
              meta="Meta: 6 fotos" realizado="Realizado: 5 fotos" tag="Oportunidade" tagBg="#1fad68" tagColor="white"
              title="Adicione fotos aos seus itens"
              desc={
                <div className="flex flex-col">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                    <span className="leading-[16px]">Inclua mais </span>
                    <span className={`leading-[16px] ${f.b}`}><BoldText>1 foto</BoldText></span>
                    <span className="leading-[16px]">em itens do cardápio. Imagens ajudam clientes a</span>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                    <span className="leading-[16px]">decidir e podem aumentar suas vendas em</span>
                    <span className="leading-[16px] text-[transparent]"><GradText>até 5%</GradText></span>
                  </div>
                </div>
              }
              action="Adicionar mais fotos"
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SKELETON
   ═══════════════════════════════════════════ */
export function PortalSkeleton() {
  return (
    <div className="backdrop-blur-[150px] bg-[#f5f5f5] content-stretch flex flex-col items-start overflow-clip relative size-full min-h-screen">
      <HeaderOs />
      <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="content-stretch flex flex-col items-start pb-[4px] pl-0 md:pl-[48px] pr-0 md:pr-[4px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
            <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-none md:rounded-[24px]">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                {/* Sub-header skeleton */}
                <div className="bg-white flex h-[56px] items-center px-[16px] md:px-[24px] rounded-t-none md:rounded-t-[24px] border-b border-[#ebebeb]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#e8e8e8] rounded-[6px] animate-pulse" />
                    <div className="w-12 h-4 bg-[#e8e8e8] rounded animate-pulse" />
                  </div>
                </div>
                <div className="p-[16px] md:p-[24px] flex flex-col gap-[24px] md:gap-[40px]">
                  <div className="flex flex-col gap-[4px]">
                    <div className="w-full max-w-[340px] h-[24px] bg-[#e8e8e8] rounded animate-pulse" />
                    <div className="w-full max-w-[500px] h-[20px] bg-[#e8e8e8] rounded animate-pulse" />
                  </div>
                  <div className="flex flex-col md:flex-row gap-[16px]">
                    <div className="flex-1 h-[250px] md:h-[325px] bg-[#f5f5f5] rounded-[20px] animate-pulse" />
                    <div className="flex-1 h-[200px] md:h-[325px] bg-[#f5f5f5] rounded-[20px] animate-pulse" />
                  </div>
                  <div className="w-full h-[180px] md:h-[246px] bg-[#f5f5f5] rounded-[20px] animate-pulse" />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-none md:rounded-[24px] shadow-[0px_1px_6px_0px_rgba(21,21,21,0.08)]" />
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
      <MobileBottomNav />
    </div>
  );
}

/* ═══════════════════════════════════════════
   PORTAL HOME (exported)
   ═══════════════════════════════════════════ */
export function PortalHome() {
  return (
    <div className="backdrop-blur-[150px] bg-[#f5f5f5] content-stretch flex flex-col items-start overflow-clip relative size-full min-h-screen">
      <HeaderOs />
      {/* Content area */}
      <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="content-stretch flex flex-col items-start pb-[4px] pl-0 md:pl-[48px] pr-0 md:pr-[4px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
            {/* Main white card */}
            <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-none md:rounded-[24px]">
              <div className="overflow-clip relative rounded-[inherit] size-full flex flex-col">
                <SubHeaderPage />
                {/* Scrollable content below sub-header */}
                <div className="flex-[1_0_0] overflow-y-auto overflow-x-hidden">
                  <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[24px] rounded-br-[24px] w-full">
                    <div className="content-stretch flex flex-col gap-[24px] md:gap-[40px] items-start p-[16px] md:p-[24px] pb-[80px] md:pb-[24px] relative size-full">
                      <PageHeader />
                      <MainContent />
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-none md:rounded-[24px] shadow-[0px_1px_6px_0px_rgba(21,21,21,0.08)]" />
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar />
      <MobileBottomNav />
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE HEADER
   ═══════════════════════════════════════════ */
function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0 w-full md:w-[700px]">
        <p className={`${f.m} leading-[24px] not-italic relative shrink-0 text-[18px] md:text-[20px] text-black`}>Boas vindas ao Portal do Parceiro.</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <p className={`${f.r} leading-[18px] not-italic relative shrink-0 text-[#666] text-[13px] md:text-[14px]`}>Aqui você poderá fazer alterações e consultar dados sobre a sua loja, qualidade e performance.</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN CONTENT
   ═══════════════════════════════════════════ */
function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      {/* Top cards row - stack on mobile */}
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col md:flex-row flex-[1_0_0] gap-[16px] items-stretch min-h-px min-w-px relative">
          <ChecklistCard />
          <ForcaCard />
        </div>
      </div>
      {/* Radar */}
      <RadarSection />
    </div>
  );
}
