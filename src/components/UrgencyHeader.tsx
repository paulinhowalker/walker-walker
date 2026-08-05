import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, Flame, Zap } from 'lucide-react';

export const UrgencyHeader: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(420); // 7 minutes
  const [spotsLeft, setSpotsLeft] = useState<number>(14);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Slowly decrease spots left for psychological urgency trigger
  useEffect(() => {
    const spotTimer = setInterval(() => {
      setSpotsLeft((prev) => (prev > 3 ? prev - 1 : 3));
    }, 45000);
    return () => clearInterval(spotTimer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-red-700 via-rose-600 to-amber-600 text-white shadow-xl border-b border-red-500/30">
      <div className="max-w-6xl mx-auto px-3 py-1.5 sm:px-4 sm:py-2 flex items-center justify-between gap-2 text-center sm:text-left">
        
        <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold min-w-0">
          <span className="bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-black text-[10px] sm:text-[11px] uppercase tracking-wider flex items-center gap-1 animate-pulse shrink-0">
            <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-slate-950" /> ATENÇÃO
          </span>
          <span className="text-slate-100 leading-tight">
            Seu pedido está <strong className="text-amber-300">90% completo</strong>.
            <span className="hidden xs:inline sm:inline ml-1">NÃO feche esta página.</span>
          </span>
        </div>

        <div className="flex items-center justify-end gap-2 flex-shrink-0">
          {/* Spots remaining badge */}
          <div className="hidden lg:flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-full text-xs font-bold text-amber-200 border border-amber-400/30">
            <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
            <span>Apenas <strong className="text-white">{spotsLeft} vagas</strong> com R$ 29,90</span>
          </div>

          {/* Countdown timer */}
          <div className="flex items-center gap-1 sm:gap-1.5 bg-slate-950/80 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-yellow-400/40 shadow-inner">
            <Clock className="w-3.5 h-3.5 text-yellow-300 animate-spin-slow" />
            <span className="text-[10px] uppercase tracking-wider text-amber-200 font-bold hidden sm:inline">Expira em:</span>
            <span className="font-mono text-sm sm:text-base font-black text-yellow-300 tracking-wider">
              {formattedTime}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
