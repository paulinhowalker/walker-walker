import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Sparkles, X, Volume2 } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

const RECENT_SALES_POOL = [
  { name: 'Juliana M.', city: 'Campinas - SP', time: 'há 1 minuto' },
  { name: 'Fernanda R.', city: 'Curitiba - PR', time: 'há 3 minutos' },
  { name: 'Carolina S.', city: 'Belo Horizonte - MG', time: 'há 2 minutos' },
  { name: 'Luciana T.', city: 'Rio de Janeiro - RJ', time: 'há 4 minutos' },
  { name: 'Renata P.', city: 'Porto Alegre - RS', time: 'há 1 minuto' },
  { name: 'Mariana B.', city: 'Recife - PE', time: 'há 5 minutos' },
  { name: 'Camila K.', city: 'Florianópolis - SC', time: 'há 2 minutos' },
  { name: 'Patrícia A.', city: 'Brasília - DF', time: 'há 1 minuto' },
  { name: 'Aline V.', city: 'Goiânia - GO', time: 'há 3 minutos' },
  { name: 'Vanessa C.', city: 'Salvador - BA', time: 'há 2 minutos' },
  { name: 'Beatriz D.', city: 'Fortaleza - CE', time: 'há 4 minutos' },
  { name: 'Gabriela M.', city: 'Vitória - ES', time: 'há 1 minuto' },
  { name: 'Larissa H.', city: 'Manaus - AM', time: 'há 3 minutos' },
  { name: 'Tatiane F.', city: 'Niterói - RJ', time: 'há 2 minutos' },
  { name: 'Amanda L.', city: 'Sorocaba - SP', time: 'há 1 minuto' },
  { name: 'Priscila O.', city: 'Uberlândia - MG', time: 'há 5 minutos' },
  { name: 'Letícia G.', city: 'Caxias do Sul - RS', time: 'há 2 minutos' },
  { name: 'Paula E.', city: 'Belém - PA', time: 'há 3 minutos' },
  { name: 'Raquel N.', city: 'Natal - RN', time: 'há 1 minuto' },
  { name: 'Daniela W.', city: 'Londrina - PR', time: 'há 4 minutos' },
  { name: 'Cláudia R.', city: 'Campo Grande - MS', time: 'há 2 minutos' },
  { name: 'Monique S.', city: 'Santos - SP', time: 'há 1 minuto' },
  { name: 'Débora T.', city: 'Joinville - SC', time: 'há 3 minutos' },
  { name: 'Bruna I.', city: 'João Pessoa - PB', time: 'há 2 minutos' },
  { name: 'Simone V.', city: 'Aracaju - SE', time: 'há 4 minutos' },
  { name: 'Isabela Q.', city: 'Maceió - AL', time: 'há 1 minuto' },
  { name: 'Sabrina X.', city: 'Cuiabá - MT', time: 'há 3 minutos' },
  { name: 'Gisele U.', city: 'São Luís - MA', time: 'há 2 minutos' },
  { name: 'Thais P.', city: 'Ribeirão Preto - SP', time: 'há 1 minuto' },
  { name: 'Viviane Z.', city: 'Vila Velha - ES', time: 'há 4 minutos' }
];

export const LiveSalesNotification: React.FC = () => {
  const [currentSale, setCurrentSale] = useState<typeof RECENT_SALES_POOL[0] | null>(null);
  const [visible, setVisible] = useState(false);
  const queueIndexRef = useRef(0);
  const shuffledPoolRef = useRef<typeof RECENT_SALES_POOL>([]);

  useEffect(() => {
    // Shuffle the array on component mount to guarantee non-repeating unique list
    const shuffled = [...RECENT_SALES_POOL].sort(() => Math.random() - 0.5);
    shuffledPoolRef.current = shuffled;

    const triggerNext = () => {
      if (shuffledPoolRef.current.length === 0) return;
      
      const nextSale = shuffledPoolRef.current[queueIndexRef.current % shuffledPoolRef.current.length];
      queueIndexRef.current += 1;

      setCurrentSale(nextSale);
      setVisible(true);
      audioSynth.playNotificationChime();

      // Auto hide after 4.5 seconds
      setTimeout(() => {
        setVisible(false);
      }, 4500);
    };

    // Initial trigger after 3.5 seconds
    const initialTimer = setTimeout(() => {
      triggerNext();
    }, 3500);

    // Recurring trigger every 14 seconds
    const interval = setInterval(() => {
      triggerNext();
    }, 14000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, []);

  if (!visible || !currentSale) return null;

  return (
    <div className="fixed bottom-16 left-2 sm:bottom-4 sm:left-4 z-40 max-w-[240px] xs:max-w-[260px] sm:max-w-xs bg-slate-900/95 backdrop-blur-md border border-amber-500/50 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl shadow-amber-500/10 animate-fade-in flex items-center gap-2 ring-2 ring-amber-500/10">
      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 animate-bounce">
        <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
      </div>

      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center justify-between gap-1 text-[9px] sm:text-[10px] font-extrabold text-amber-300">
          <span className="flex items-center gap-1 truncate">
            <Sparkles className="w-2.5 h-2.5 text-amber-400 shrink-0 animate-spin" />
            <span className="truncate">Nova Coleção ORO!</span>
          </span>
          <Volume2 className="w-2.5 h-2.5 text-emerald-400 shrink-0 animate-pulse" />
        </div>
        
        <p className="text-[11px] sm:text-xs text-white font-bold truncate leading-snug">
          {currentSale.name} <span className="text-slate-400 font-normal">({currentSale.city})</span>
        </p>

        <p className="text-[9px] sm:text-[10px] text-emerald-400 font-semibold flex items-center gap-1 leading-none mt-0.5">
          <span>Adicionou por R$ 29,90</span>
          <span>•</span>
          <span className="text-slate-400">{currentSale.time}</span>
        </p>
      </div>

      <button 
        onClick={() => setVisible(false)}
        className="text-slate-500 hover:text-slate-300 p-1 cursor-pointer shrink-0"
        title="Fechar"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
};

