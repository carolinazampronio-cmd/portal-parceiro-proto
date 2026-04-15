"use client";

import { useState } from "react";
import svgPaths from "../imports/svg-sqvdi3q4aj";

type Step = 1 | 2;

const iconLine = "font-['pomodoro-icon-line:Regular',sans-serif]";

interface OnboardingDialogProps {
  onClose: () => void;
  onStartTour: () => void;
}

function TopBar() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px sticky top-0 rounded-t-[24px]">
        <div
          aria-hidden="true"
          className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none rounded-t-[24px]"
        />
        <div className="flex flex-row items-center justify-center size-full">

        </div>
      </div>
    </div>
  );
}

function FooterButton({
  label,
  variant,
  onClick,
}: {
  label: string;
  variant: "outline" | "filled";
  onClick: () => void;
}) {
  if (variant === "outline") {
    return (
      <button
        onClick={onClick}
        className="bg-white relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
      >
        <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
          <div className="flex flex-col font-['iFood_RC_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">
            <p className="leading-[16px]">{label}</p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[12px]"
        />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-[#141414] content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#333] transition-colors"
    >
      <div className="flex flex-col font-['iFood_RC_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">{label}</p>
      </div>
    </button>
  );
}

function Footer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white min-h-[72px] relative shrink-0 w-full rounded-b-[24px]">
      <div
        aria-hidden="true"
        className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none rounded-b-[24px]"
      />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function RadioOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex items-center gap-[12px] px-[16px] py-[14px] relative w-full border border-[#ebebeb] rounded-[12px] bg-white cursor-pointer hover:bg-[#fafafa] transition-colors"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d={svgPaths.p30769300} fill={selected ? "#141414" : "white"} />
        <path
          d={svgPaths.p102d7900}
          fill={selected ? "#141414" : "white"}
          stroke={selected ? "#141414" : "#ccc"}
        />
        {selected && <path d={svgPaths.p3831b780} fill="white" />}
      </svg>
      <div className="flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[#141414] text-[14px]">
        <p className="leading-[20px]">{label}</p>
      </div>
    </button>
  );
}

function Step1Content() {
  return (
    <div className="relative w-full">
      <div className="px-6 py-5 sm:px-8 sm:py-6 flex flex-col gap-5">
        {/* Icon + Title row */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-[14px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
            <span
              className={iconLine}
              style={{ fontSize: 28, color: "#EB0033" }}
            >
              {"\uE85A"}
            </span>
          </div>
          <div className="flex-1">
            <p className="font-['iFood_RC_Textos:Medium',sans-serif] font-medium text-[18px] sm:text-[20px] text-[#141414] leading-[24px] not-italic">
              Parabéns, você está quase lá!
            </p>
          </div>
        </div>

        {/* Main question */}
        <p className="font-['iFood_RC_Textos:Medium',sans-serif] font-medium text-[16px] sm:text-[17px] text-[#141414] leading-[22px] sm:leading-[24px] not-italic">
          Você já está pronto para receber pedidos?
        </p>

        {/* Description */}
        <p className="font-['iFood_RC_Textos:Regular',sans-serif] font-normal text-[14px] sm:text-[15px] text-[#666] leading-[20px] sm:leading-[22px] not-italic">
          Garanta que produtos, embalagens e operação estejam preparados para o seu primeiro pedido.
        </p>

        {/* Highlight checklist */}
        <div className="flex flex-col gap-2">
          {[
            { glyph: "\uE874", text: "Produtos prontos para venda" },
            { glyph: "\uE81C", text: "Embalagens adequadas" },
            { glyph: "\uE817", text: "Operação organizada" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <span
                  className={`${iconLine} leading-[0] not-italic text-[16px] text-[#666]`}
                >
                  {item.glyph}
                </span>
              </div>
              <span className="font-['iFood_RC_Textos:Regular',sans-serif] font-normal text-[13px] sm:text-[14px] text-[#444] leading-[18px] not-italic">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step2Content({
  selectedOption,
  onSelect,
}: {
  selectedOption: string;
  onSelect: (option: string) => void;
}) {
  const options = ["Menos de 1 semana", "Menos de 1 mês", "Mais de 1 mês"];

  return (
    <div className="relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative">
        <div className="flex flex-col font-['iFood_RC_Textos:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black">
          <p className="leading-[24px]">Quando pretende começar?</p>
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          {options.map((option) => (
            <RadioOption
              key={option}
              label={option}
              selected={selectedOption === option}
              onClick={() => onSelect(option)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function OnboardingDialog({ onClose, onStartTour }: OnboardingDialogProps) {
  const [step, setStep] = useState<Step>(1);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSimEstouPronto = () => {
    onStartTour();
  };

  const handleAindaNao = () => {
    setStep(2);
  };

  const handleVoltar = () => {
    setStep(1);
  };

  const handleConfirmar = () => {
    onStartTour();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative z-10 w-[calc(100%-32px)] sm:w-[560px] max-h-[90vh] flex flex-col bg-white rounded-[24px] shadow-[0px_6px_12px_0px_rgba(21,21,21,0.16)] overflow-hidden">
        <TopBar />

        {step === 1 && <Step1Content />}
        {step === 2 && (
          <Step2Content
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
          />
        )}

        <Footer>
          {step === 1 && (
            <>
              <FooterButton
                label="Ainda não, em breve"
                variant="outline"
                onClick={handleAindaNao}
              />
              <FooterButton
                label="Sim, estou pronto!"
                variant="filled"
                onClick={handleSimEstouPronto}
              />
            </>
          )}
          {step === 2 && (
            <>
              <FooterButton
                label="Voltar"
                variant="outline"
                onClick={handleVoltar}
              />
              <FooterButton
                label="Confirmar"
                variant="filled"
                onClick={handleConfirmar}
              />
            </>
          )}
        </Footer>
      </div>
    </div>
  );
}
