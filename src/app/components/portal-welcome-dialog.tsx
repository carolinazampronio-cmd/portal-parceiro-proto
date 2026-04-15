"use client";

const font = {
  regular: "font-['iFood_RC_Textos:Regular',sans-serif] font-normal",
  medium: "font-['iFood_RC_Textos:Medium',sans-serif] font-medium",
};
const iconLine = "font-['pomodoro-icon-line:Regular',sans-serif]";

interface PortalWelcomeDialogProps {
  onClose: () => void;
  onStartTour: () => void;
}

export function PortalWelcomeDialog({ onClose, onStartTour }: PortalWelcomeDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative z-10 w-[calc(100%-32px)] sm:w-[520px] max-h-[90vh] flex flex-col bg-white rounded-[24px] shadow-[0px_6px_12px_0px_rgba(21,21,21,0.16)] overflow-hidden">
        {/* Top bar */}
        <div className="bg-white relative rounded-t-[24px]">
          <div
            aria-hidden="true"
            className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none rounded-t-[24px]"
          />
          <div className="flex items-center justify-center px-[16px] py-[12px]">
            <p className={`${font.regular} text-[14px] text-[#141414] leading-[16px]`}>
              Sua loja está quase pronta!
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 flex flex-col gap-5">
          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[14px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
              <span
                className={`${iconLine} leading-[0] not-italic`}
                style={{ fontSize: 28, color: "#EB0033" }}
              >
                {"\uE830"}
              </span>
            </div>
            <div className="flex-1">
              <p className={`${font.medium} text-[18px] sm:text-[20px] text-[#141414] leading-[24px] not-italic`}>
                Boas vindas ao Portal do Parceiro!
              </p>
            </div>
          </div>

          {/* Description */}
          <p className={`${font.regular} text-[14px] sm:text-[15px] text-[#666] leading-[20px] sm:leading-[22px] not-italic`}>
            Este é o seu painel principal. Vamos fazer um tour rápido para você conhecer as áreas mais importantes e começar com tudo!
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-2.5">
            {[
              { glyph: "\uE852", text: "Veja o status da sua loja em tempo real" },
              { glyph: "\uE847", text: "Saiba onde acessar e receber pedidos" },
              { glyph: "\uE85A", text: "Receba dicas inteligentes para vender mais" },
              { glyph: "\uE808", text: "Descubra como o iFood investe em você" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <span
                    className={`${iconLine} leading-[0] not-italic text-[16px] text-[#666]`}
                  >
                    {item.glyph}
                  </span>
                </div>
                <span className={`${font.regular} text-[13px] sm:text-[14px] text-[#444] leading-[18px] not-italic`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white min-h-[72px] relative rounded-b-[24px]">
          <div
            aria-hidden="true"
            className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none rounded-b-[24px]"
          />
          <div className="flex items-center justify-end gap-[8px] p-[16px]">
            <button
              onClick={onClose}
              className="bg-white relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
            >
              <div className="flex gap-[8px] items-center justify-center overflow-clip p-[12px] rounded-[inherit]">
                <span className={`${font.medium} text-[14px] text-[#141414] leading-[16px] whitespace-nowrap`}>
                  Pular
                </span>
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[12px]"
              />
            </button>
            <button
              onClick={onStartTour}
              className="bg-[#141414] flex gap-[8px] items-center justify-center overflow-clip p-[12px] rounded-[12px] shrink-0 cursor-pointer hover:bg-[#333] transition-colors"
            >
              <span className={`${font.medium} text-[14px] text-white leading-[16px] whitespace-nowrap`}>
                Vamos lá!
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
