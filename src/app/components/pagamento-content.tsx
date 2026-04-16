"use client";

import React, { useState } from "react";

const font = {
  regular: "font-['iFood_RC_Textos:Regular',sans-serif] font-normal",
  medium: "font-['iFood_RC_Textos:Medium',sans-serif] font-medium",
  bold: "font-['iFood_RC_Textos:Bold',sans-serif] font-bold",
};

const iconFilled = "font-['pomodoro-icon-filled:Regular',sans-serif]";
const iconLine = "font-['pomodoro-icon-line:Regular',sans-serif]";

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

const ICON = {
  check: "\uE894",
  info: "\uE8DF",
};

/* --- Payment method types --- */
type PaymentCategory = "Crédito" | "Débito" | "Carteira digital" | "Pix" | "Nubank";

type PaymentMethod = {
  name: string;
  category: PaymentCategory;
  color: string;
  abbr: string;
};

/* --- Repasse via iFood data --- */
const IFOOD_METHODS: PaymentMethod[] = [
  { name: "Amex", category: "Crédito", color: "#006FCF", abbr: "Amex" },
  { name: "Amex", category: "Carteira digital", color: "#006FCF", abbr: "Amex" },
  { name: "ApplePay Visa", category: "Carteira digital", color: "#333", abbr: "APay" },
  { name: "ApplePay Mastercard", category: "Carteira digital", color: "#333", abbr: "APay" },
  { name: "Elo Crédito", category: "Crédito", color: "#00A4E0", abbr: "Elo" },
  { name: "Elo", category: "Carteira digital", color: "#00A4E0", abbr: "Elo" },
  { name: "Elo Débito", category: "Débito", color: "#00A4E0", abbr: "Elo" },
  { name: "GPay Elo", category: "Carteira digital", color: "#4285F4", abbr: "GPay" },
  { name: "GPay Mastercard", category: "Carteira digital", color: "#4285F4", abbr: "GPay" },
  { name: "GPay Visa", category: "Carteira digital", color: "#4285F4", abbr: "GPay" },
  { name: "Hipercard", category: "Crédito", color: "#822124", abbr: "Hiper" },
  { name: "iFood Conta Digital", category: "Carteira digital", color: "#EA1D2C", abbr: "iFood" },
  { name: "Mastercard", category: "Crédito", color: "#EB001B", abbr: "MC" },
  { name: "Mastercard Débito", category: "Carteira digital", color: "#EB001B", abbr: "MC" },
  { name: "Nubank", category: "Nubank", color: "#820AD1", abbr: "Nu" },
  { name: "Pix", category: "Pix", color: "#32BCAD", abbr: "Pix" },
  { name: "Saldo da Carteira", category: "Carteira digital", color: "#EA1D2C", abbr: "SC" },
  { name: "Visa", category: "Crédito", color: "#1A1F71", abbr: "Visa" },
  { name: "Visa Débito", category: "Carteira digital", color: "#1A1F71", abbr: "Visa" },
  { name: "Mastercard Débito", category: "Débito", color: "#EB001B", abbr: "MC" },
];

/* --- Repasse via vale-refeição data --- */
type VoucherMethod = {
  name: string;
  category: string;
  color: string;
  abbr: string;
  defaultOn: boolean;
  disabled?: boolean;
};

const VOUCHER_METHODS: VoucherMethod[] = [
  { name: "Alelo Refeição", category: "Vale-refeição", color: "#00A651", abbr: "Alelo", defaultOn: false },
  { name: "iFood Pago Pré iFood Refeição", category: "Vale-refeição", color: "#EA1D2C", abbr: "iFood", defaultOn: true },
  { name: "Saldo Alimentação + Refeição", category: "Vale-refeição", color: "#353A48", abbr: "S+R", defaultOn: true },
  { name: "Bem Refeição", category: "Vale-refeição", color: "#E4002B", abbr: "Ben", defaultOn: false },
  { name: "iFood Saldo Livre", category: "Alimentação", color: "#EA1D2C", abbr: "iFood", defaultOn: true },
  { name: "Saldo Comer No iFood", category: "Alimentação", color: "#353A48", abbr: "SC", defaultOn: true },
  { name: "iFood Pago Crédito", category: "Alimentação", color: "#EA1D2C", abbr: "iFood", defaultOn: true },
  { name: "Pluxee Refeição (Sodexo Refeição)", category: "Vale-refeição", color: "#353A48", abbr: "Plux", defaultOn: true },
  { name: "Ticket", category: "Alimentação", color: "#E4002B", abbr: "Tick", defaultOn: false },
  { name: "iFood Pago Crédito Consignado", category: "Alimentação", color: "#EA1D2C", abbr: "iFood", defaultOn: true },
  { name: "Limite iFood Pago", category: "Alimentação", color: "#EA1D2C", abbr: "iFood", defaultOn: true },
  { name: "VR Refeição", category: "Vale-refeição", color: "#00843D", abbr: "VR", defaultOn: false, disabled: true },
];

/* --- Filter chips --- */
const FILTERS: { label: string; count: number; category: PaymentCategory | "Todos" }[] = [
  { label: "Todos", count: 20, category: "Todos" },
  { label: "Crédito", count: 5, category: "Crédito" },
  { label: "Débito", count: 3, category: "Débito" },
  { label: "Carteira digital", count: 5, category: "Carteira digital" },
  { label: "Pix", count: 1, category: "Pix" },
  { label: "Nubank", count: 1, category: "Nubank" },
];

/* --- Brand icon placeholder --- */
function BrandIcon({ color, abbr }: { color: string; abbr: string }) {
  return (
    <div
      className="w-[38px] h-[38px] rounded-[8px] flex items-center justify-center shrink-0 overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <span className={`${font.bold} text-[10px] text-white leading-none text-center`}>
        {abbr}
      </span>
    </div>
  );
}

/* --- Payment card (no toggle, for "Repasse via iFood") --- */
function PaymentCard({ method }: { method: PaymentMethod }) {
  return (
    <div className="bg-white border border-[#ebebeb] rounded-[16px] p-4 flex items-center gap-2">
      <BrandIcon color={method.color} abbr={method.abbr} />
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <p className={`${font.regular} text-[14px] text-[#141414] leading-[16px] truncate`}>
          {method.name}
        </p>
        <p className={`${font.medium} text-[12px] text-[#666] leading-[16px]`}>
          {method.category}
        </p>
      </div>
    </div>
  );
}

/* --- Toggle component --- */
function Toggle({
  on,
  onChange,
  disabled = false,
}: {
  on: boolean;
  onChange: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={disabled ? undefined : onChange}
      className={`w-[32px] h-[20px] rounded-full flex items-center shrink-0 transition-colors ${
        disabled
          ? "bg-[#ebebeb] cursor-not-allowed"
          : on
          ? "bg-[#141414] cursor-pointer"
          : "bg-[#e0e0e0] cursor-pointer"
      }`}
      style={{ padding: 2 }}
    >
      <div
        className={`w-[16px] h-[16px] rounded-full transition-transform ${
          disabled ? "bg-[#8f8f8f] opacity-40" : "bg-white"
        }`}
        style={{ transform: on && !disabled ? "translateX(12px)" : "translateX(0px)" }}
      />
    </button>
  );
}

/* --- Voucher card (with toggle) --- */
function VoucherCard({
  method,
  isOn,
  onToggle,
}: {
  method: VoucherMethod;
  isOn: boolean;
  onToggle: () => void;
}) {
  const isDisabled = method.disabled;
  return (
    <div
      className={`border rounded-[16px] p-4 flex items-center gap-2 relative ${
        isDisabled ? "bg-[#ebebeb] border-[#ebebeb]" : "bg-white border-[#ebebeb]"
      }`}
    >
      <div className={isDisabled ? "opacity-50" : ""}>
        <BrandIcon color={method.color} abbr={method.abbr} />
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <p
          className={`${font.regular} text-[14px] leading-[16px] truncate ${
            isDisabled ? "text-[#8f8f8f]" : "text-[#141414]"
          }`}
        >
          {method.name}
        </p>
        <p
          className={`${font.medium} text-[12px] leading-[16px] ${
            isDisabled ? "text-[#8f8f8f]" : "text-[#666]"
          }`}
        >
          {method.category}
        </p>
      </div>
      <Toggle on={isOn} onChange={onToggle} disabled={isDisabled} />
      {isDisabled && (
        <div className="absolute -top-8 right-0 bg-[#141414] text-white px-3 py-2 rounded-[8px] whitespace-nowrap opacity-0 hover:opacity-100 pointer-events-none">
          <span className={`${font.regular} text-[12px] leading-[14px]`}>
            Opção indisponível para a sua loja
          </span>
        </div>
      )}
    </div>
  );
}

/* --- Main export --- */
export function PagamentoContent({ isCompleted }: { isCompleted: boolean }) {
  const [activeTab, setActiveTab] = useState<"Via app/site" | "Via loja">("Via app/site");
  const [activeFilter, setActiveFilter] = useState<PaymentCategory | "Todos">("Todos");
  const [voucherStates, setVoucherStates] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    VOUCHER_METHODS.forEach((m) => {
      initial[m.name] = m.defaultOn;
    });
    return initial;
  });
  const [allVouchersOn, setAllVouchersOn] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const filteredMethods =
    activeFilter === "Todos"
      ? IFOOD_METHODS
      : IFOOD_METHODS.filter((m) => m.category === activeFilter);

  const toggleVoucher = (name: string) => {
    setVoucherStates((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const toggleAllVouchers = () => {
    const newState = !allVouchersOn;
    setAllVouchersOn(newState);
    setVoucherStates((prev) => {
      const updated = { ...prev };
      VOUCHER_METHODS.forEach((m) => {
        if (!m.disabled) updated[m.name] = newState;
      });
      return updated;
    });
  };

  return (
    <div className="flex flex-col gap-5 w-full pb-28">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h1 className={`${font.medium} text-[20px] text-[#141414] leading-[24px]`}>
            Formas de Pagamento
          </h1>
          {isCompleted && (
            <div className="flex items-center gap-1 bg-[#e8f5e9] px-2 py-0.5 rounded-full">
              <Icon glyph={ICON.check} filled size={14} color="#007a3f" />
              <span className={`${font.medium} text-[12px] text-[#007a3f] leading-[16px]`}>
                Concluída
              </span>
            </div>
          )}
        </div>
        <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>
          Configure as formas de pagamento da sua loja
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-[#ebebeb]">
        {(["Via app/site", "Via loja"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-2 cursor-pointer transition-colors ${
              activeTab === tab
                ? "border-b-2 border-[#141414]"
                : "border-b-2 border-transparent"
            }`}
          >
            <span
              className={`${font.medium} text-[14px] leading-[16px] ${
                activeTab === tab ? "text-[#141414]" : "text-[#666]"
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>

      {activeTab === "Via app/site" && (
        <>
          {/* --- Seção: Repasse via iFood --- */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className={`${font.medium} text-[16px] text-[#141414] leading-[24px]`}>
                Repasse via iFood
              </p>
              <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>
                São opções obrigatórias para os pagamentos pelo aplicativo e site.
              </p>
            </div>

            {/* Filter chips */}
            <div className="flex gap-3 flex-wrap">
              {FILTERS.map((filter) => (
                <button
                  key={filter.label}
                  onClick={() => setActiveFilter(filter.category)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full cursor-pointer transition-colors ${
                    activeFilter === filter.category
                      ? "bg-[#141414]"
                      : "bg-white border border-[#ebebeb] hover:bg-[#f5f5f5]"
                  }`}
                >
                  <span
                    className={`${font.medium} text-[14px] leading-[16px] ${
                      activeFilter === filter.category ? "text-white" : "text-[#141414]"
                    }`}
                  >
                    {filter.label}
                  </span>
                  <span
                    className={`${font.bold} text-[12px] leading-[16px] px-1.5 py-0.5 rounded-full ${
                      activeFilter === filter.category
                        ? "bg-white/20 text-white"
                        : "bg-[#f5f5f5] text-[#666]"
                    }`}
                  >
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Payment methods grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {filteredMethods.map((method, idx) => (
                <PaymentCard key={`${method.name}-${method.category}-${idx}`} method={method} />
              ))}
            </div>
          </div>

          {/* --- Seção: Repasse via vale-refeição ou alimentação --- */}
          <div className="flex flex-col gap-6 mt-6">
            {/* Head */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <p className={`${font.medium} text-[16px] text-[#141414] leading-[24px]`}>
                  Repasse via vale-refeição ou alimentação
                </p>
                <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>
                  Escolha os cartões que você aceitará. O repasse será feito diretamente pela bandeira
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0 pt-1">
                <span className={`${font.medium} text-[12px] text-[#141414] leading-[16px]`}>
                  Ativar todos
                </span>
                <Toggle on={allVouchersOn} onChange={toggleAllVouchers} />
              </div>
            </div>

            {/* Alert */}
            <div className="bg-[#f5f5f5] border border-[#ebebeb] rounded-[12px] p-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-1">
                <div className="shrink-0 flex items-center justify-center p-1">
                  <Icon glyph={ICON.info} filled size={20} color="#141414" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className={`${font.medium} text-[14px] text-[#141414] leading-[16px]`}>
                    Você tem contrato com vale-refeição?
                  </p>
                  <p className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>
                    Clique pra habilitar. É opcional e, ao ativar, os repasses serão feitos pela bandeira.
                  </p>
                </div>
              </div>
              <button className="shrink-0 bg-white border border-[#ebebeb] rounded-[8px] px-3 py-2 cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                <span className={`${font.medium} text-[14px] text-[#141414] leading-[16px] whitespace-nowrap`}>
                  Habilitar Vale-refeição
                </span>
              </button>
            </div>

            {/* Voucher cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {VOUCHER_METHODS.map((method) => (
                <div
                  key={method.name}
                  className="relative"
                  onMouseEnter={() => method.disabled && setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <VoucherCard
                    method={method}
                    isOn={voucherStates[method.name] ?? false}
                    onToggle={() => toggleVoucher(method.name)}
                  />
                  {method.disabled && showTooltip && (
                    <div className="absolute -top-9 right-0 bg-[#141414] text-white px-3 py-2 rounded-[8px] whitespace-nowrap z-10">
                      <span className={`${font.regular} text-[12px] leading-[14px]`}>
                        Opção indisponível para a sua loja
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Save button */}
            <div className="flex justify-end">
              <button className="bg-[#141414] text-white rounded-[12px] px-5 py-3 cursor-pointer hover:bg-[#333] transition-colors">
                <span className={`${font.medium} text-[14px] leading-[16px]`}>
                  Salvar alterações
                </span>
              </button>
            </div>
          </div>
        </>
      )}

      {activeTab === "Via loja" && (
        <div className="bg-[#f5f5f5] rounded-[16px] p-6 min-h-[200px] flex items-center justify-center">
          <p className={`${font.regular} text-[14px] text-[#999] leading-[20px]`}>
            Configurações de pagamento via loja serão exibidas aqui.
          </p>
        </div>
      )}
    </div>
  );
}
