import React, { useState, useEffect } from 'react';
import { Flame, Clock, Zap, AlertOctagon } from 'lucide-react';

export const UrgencyHeader: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(418); // ~7 mins
  const [spots, setSpots] = useState<number>(11);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    const spotTimer = setInterval(() => {
      setSpots((prev) => (prev > 2 ? prev - 1 : 2));
    }, 30000);
    return () => clearInterval(spotTimer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-rose-700 text-white shadow-2xl border-b-2 border-yellow-400/60">
      <div className="max-w-6xl mx-auto px-3 py-2 sm:px-4 flex items-center justify-between gap-2">
        
        <div className="flex items-center gap-2 min-w-0">
          <span className="bg-yellow-400 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] sm:text-xs uppercase tracking-wider flex items-center gap-1 animate-bounce shrink-0">
            <AlertOctagon className="w-3.5 h-3.5 fill-slate-950" /> PARE!
          </span>
          <span className="text-xs sm:text-sm font-extrabold tracking-tight text-yellow-100 truncate">
            SEU PEDIDO AINDA NÃO FOI FINALIZADO! <span className="hidden sm:inline font-normal text-white">NÃO FECHE ESTA PÁGINA.</span>
          </span>
        </div>

        <div className="flex items-center justify-end gap-2 flex-shrink-0">
          <div className="hidden md:flex items-center gap-1 bg-black/40 px-2.5 py-0.5 rounded-full text-xs font-bold text-amber-200 border border-amber-400/40">
            <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
            <span>Restam apenas <strong className="text-white font-mono">{spots} vagas</strong></span>
          </div>

          <div className="flex items-center gap-1.5 bg-black px-3 py-1 rounded-full border border-yellow-400 shadow-lg">
            <Clock className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span className="text-[10px] uppercase font-black text-amber-200 hidden xs:inline">OFERTA EXPIRA EM:</span>
            <span className="font-mono text-sm sm:text-base font-black text-yellow-300 tracking-wider">
              {formattedTime}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

