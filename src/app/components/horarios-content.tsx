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
  clock: "\uE860",
  check: "\uE894",
};

type DayStatus = "Aberta" | "Fechada";

type Shift = {
  start: string;
  end: string;
};

type DaySchedule = {
  day: string;
  short: string;
  status: DayStatus;
  shifts: Shift[];
};

const RECOMMENDED_SCHEDULE: DaySchedule[] = [
  { day: "Domingo", short: "Dom", status: "Fechada", shifts: [] },
  {
    day: "Segunda-feira", short: "Seg", status: "Aberta", shifts: [
      { start: "11:00", end: "15:00" },
      { start: "18:00", end: "23:00" }
    ]
  },
  {
    day: "Terça-feira", short: "Ter", status: "Aberta", shifts: [
      { start: "11:00", end: "15:00" },
      { start: "18:00", end: "23:00" }
    ]
  },
  {
    day: "Quarta-feira", short: "Qua", status: "Aberta", shifts: [
      { start: "11:00", end: "15:00" },
      { start: "18:00", end: "23:00" }
    ]
  },
  {
    day: "Quinta-feira", short: "Qui", status: "Aberta", shifts: [
      { start: "11:00", end: "15:00" },
      { start: "18:00", end: "23:00" }
    ]
  },
  { day: "Sexta-feira", short: "Sex", status: "Fechada", shifts: [] },
  {
    day: "Sábado", short: "Sáb", status: "Aberta", shifts: [
      { start: "11:00", end: "15:00" },
      { start: "18:00", end: "23:00" }
    ]
  },
];

const MANUAL_SCHEDULE: DaySchedule[] = RECOMMENDED_SCHEDULE.map(s => ({...s}));

export function HorariosContent({ isCompleted }: { isCompleted: boolean }) {
  const [activeTab, setActiveTab] = useState<"Editar horários" | "Recomendações">("Recomendações");

  const [manualSchedule, setManualSchedule] = useState<DaySchedule[]>(MANUAL_SCHEDULE);

  const currentSchedule = activeTab === "Recomendações" ? RECOMMENDED_SCHEDULE : manualSchedule;

  const hoursList = [
    "0h", "2h", "4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h", "23:59"
  ];

  const calculateTotalHours = (shifts: Shift[]) => {
    let total = 0;
    shifts.forEach(s => {
      const [sh, sm] = s.start.split(":").map(Number);
      const [eh, em] = s.end.split(":").map(Number);
      total += (eh + em/60) - (sh + sm/60);
    });
    return total;
  };

  const handleCellClick = (dayIndex: number, rowIdx: number) => {
    if (activeTab === "Recomendações") return;

    setManualSchedule(prev => {
      const newSchedule = [...prev];
      const dayData = { ...newSchedule[dayIndex] };
      const startHour = rowIdx * 2;
      const endHour = startHour + 2;

      const existingIdx = dayData.shifts.findIndex(s => {
        const sStart = parseFloat(s.start.split(":")[0]);
        const sEnd = parseFloat(s.end.split(":")[0]);
        return (startHour >= sStart && startHour < sEnd) || (endHour > sStart && endHour <= sEnd);
      });

      if (existingIdx >= 0) {
        dayData.shifts = dayData.shifts.filter((_, i) => i !== existingIdx);
      } else {
        const newShift = {
          start: `${startHour.toString().padStart(2, '0')}:00`,
          end: `${endHour.toString().padStart(2, '0')}:00`
        };
        dayData.shifts = [...dayData.shifts, newShift].sort((a, b) => {
          return parseFloat(a.start.split(":")[0]) - parseFloat(b.start.split(":")[0]);
        });
      }

      dayData.status = dayData.shifts.length > 0 ? "Aberta" : "Fechada";
      newSchedule[dayIndex] = dayData;
      return newSchedule;
    });
  };

  return (
    <div className="flex flex-col gap-5 w-full pb-28">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h1 className={`${font.medium} text-[20px] text-[#141414] leading-[24px]`}>
            Horários de Funcionamento
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
          Configure os dias e períodos em que sua loja estará aberta no app iFood e poderá receber pedidos.
        </p>
      </div>

      {/* Alert */}
      <div className="bg-[#141414] rounded-[12px] p-3 flex gap-2 items-center">
        <div className="shrink-0 flex items-center justify-center p-1">
          <Icon glyph={"\uE8DF"} filled size={20} color="white" />
        </div>
        <div className="flex flex-col gap-1">
          <p className={`${font.medium} text-[14px] text-white leading-[16px]`}>
            Escolha os dias e horários da sua loja vai operar!
          </p>
          <p className={`${font.regular} text-[14px] text-white/80 leading-[16px]`}>
            Recomendamos horários baseados nos parceiros de melhor performance da sua cidade e categoria.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-4">
        {/* Left column - Cards */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-4 bg-[#f5f5f5] p-3 rounded-[16px]">
          {/* Segment Control */}
          <div className="bg-[#ebebeb] h-12 p-1 rounded-[16px] flex gap-2 relative">
            <button
              onClick={() => setActiveTab("Editar horários")}
              className={`flex-1 rounded-[12px] flex items-center justify-center transition-all cursor-pointer ${
                activeTab === "Editar horários" ? "bg-white shadow-[0px_1px_6px_0px_rgba(21,21,21,0.08)]" : "hover:bg-white/50"
              }`}
            >
              <span className={`${activeTab === "Editar horários" ? font.medium + " text-[#141414]" : font.regular + " text-[#666]"} text-[14px] leading-[16px]`}>
                Editar horários
              </span>
            </button>
            <button
              onClick={() => setActiveTab("Recomendações")}
              className={`flex-1 rounded-[12px] flex items-center justify-center transition-all cursor-pointer ${
                activeTab === "Recomendações" ? "bg-white shadow-[0px_1px_6px_0px_rgba(21,21,21,0.08)]" : "hover:bg-white/50"
              }`}
            >
              <span className={`${activeTab === "Recomendações" ? font.medium + " text-[#141414]" : font.regular + " text-[#666]"} text-[14px] leading-[16px]`}>
                Recomendações
              </span>
            </button>
          </div>

          {/* Cards List */}
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[500px] pr-1">
            {currentSchedule.map((schedule, idx) => (
              <div key={idx} className="bg-white p-3 rounded-[16px] shadow-[0px_1px_6px_0px_rgba(21,21,21,0.08)] flex flex-col gap-2">
                {activeTab === "Recomendações" && schedule.status === "Aberta" && (
                  <div className="bg-[#ebfff5] self-start flex items-center gap-1 px-2 py-1 rounded-[12px]">
                    <Icon glyph={"\uE8DF"} filled size={12} color="#007a3f" />
                    <span className={`${font.bold} text-[10px] text-[#007a3f] leading-none uppercase`}>
                      Recomendado
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center w-full">
                  <span className={`${font.medium} text-[16px] text-[#141414] leading-[24px]`}>
                    {schedule.day}
                  </span>
                  <div className={`px-2 py-0.5 rounded-full border ${schedule.status === "Aberta" ? "border-[#007a3f]" : "border-[#ebebeb]"}`}>
                    <span className={`${font.bold} text-[12px] leading-[16px] ${schedule.status === "Aberta" ? "text-[#007a3f]" : "text-[#666]"}`}>
                      {schedule.status}
                    </span>
                  </div>
                </div>

                {schedule.status === "Aberta" ? (
                  <div className="flex flex-col gap-1">
                    {schedule.shifts.map((shift, i) => (
                      <span key={i} className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>
                        {shift.start} às {shift.end}h
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className={`${font.regular} text-[14px] text-[#666] leading-[16px]`}>
                    Loja fechada
                  </span>
                )}
              </div>
            ))}
          </div>

          <button className="bg-[#141414] text-white rounded-[12px] py-3 mt-2 hover:bg-black transition-colors w-full cursor-pointer">
            <span className={`${font.medium} text-[14px] leading-[16px]`}>
              {activeTab === "Recomendações" ? "Salvar recomendações" : "Salvar horários"}
            </span>
          </button>
        </div>

        {/* Right column - Calendar */}
        <div className="flex-1 overflow-x-auto">
          <div className="min-w-[600px] flex flex-col relative pb-6">
            {/* Header row */}
            <div className="flex mb-2">
              <div className="w-[40px] shrink-0" />
              {currentSchedule.map((schedule, idx) => {
                const totalHours = calculateTotalHours(schedule.shifts);
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-center">
                    <span className={`${font.medium} text-[14px] text-[#141414] leading-[16px]`}>{schedule.short}</span>
                    <span className={`${font.regular} text-[10px] leading-[16px] ${schedule.status === "Aberta" ? "text-[#007a3f]" : "text-[#666]"}`}>
                      {schedule.status === "Aberta" ? `Aberta por ${totalHours}h` : "Fechada"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Grid */}
            <div className="flex relative">
              {/* Y-axis labels */}
              <div className="w-[40px] shrink-0 flex flex-col justify-between absolute top-0 bottom-0 left-0 -translate-y-2">
                {hoursList.map((h, i) => (
                  <span key={i} className={`${font.regular} text-[12px] text-[#999] leading-[16px] text-right pr-2`}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Columns */}
              <div className="flex-1 flex ml-[40px] gap-1 relative h-[500px]">
                {currentSchedule.map((schedule, colIdx) => (
                  <div key={colIdx} className="flex-1 relative flex flex-col gap-1">
                    {Array.from({ length: 12 }).map((_, rowIdx) => (
                      <div
                        key={rowIdx}
                        onClick={() => handleCellClick(colIdx, rowIdx)}
                        className={`flex-1 rounded-[4px] bg-[#f5f5f5] ${activeTab === "Editar horários" ? "cursor-pointer hover:bg-[#ebebeb] transition-colors" : ""}`}
                      />
                    ))}

                    {schedule.shifts.map((shift, sIdx) => {
                      const startHour = parseFloat(shift.start.split(":")[0]) + parseFloat(shift.start.split(":")[1])/60;
                      const endHour = parseFloat(shift.end.split(":")[0]) + parseFloat(shift.end.split(":")[1])/60;
                      const topPercent = (startHour / 24) * 100;
                      const heightPercent = ((endHour - startHour) / 24) * 100;

                      return (
                        <div
                          key={sIdx}
                          onClick={() => {
                             if (activeTab === "Editar horários") {
                               const rowIdx = Math.floor(startHour / 2);
                               handleCellClick(colIdx, rowIdx);
                             }
                          }}
                          className={`absolute w-full bg-[#ebfff5] rounded-[8px] flex items-start justify-center p-1 overflow-hidden ${activeTab === "Editar horários" ? "cursor-pointer hover:bg-[#d1f5e0] transition-colors" : ""}`}
                          style={{
                            top: `calc(${topPercent}% + 2px)`,
                            height: `calc(${heightPercent}% - 4px)`,
                          }}
                        >
                          <span className={`${font.medium} text-[10px] text-[#007a3f] leading-[12px] pt-1`}>
                            {shift.start} - {shift.end}
                          </span>
                        </div>
                      );
                    })}

                    {schedule.status === "Fechada" && (
                       <div className="absolute top-2 left-0 right-0 text-center">
                         <span className={`${font.regular} text-[10px] text-[#999]`}>Loja fechada</span>
                       </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
