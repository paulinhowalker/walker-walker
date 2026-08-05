import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { CHECKOUT_URL } from '../constants';

interface StickyMobileCtaProps {
  onAccept: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onAccept }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    audioSynth.playSuccessFanfare();
    onAccept();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md p-3 border-t border-amber-500/30 shadow-2xl animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-amber-300">
            <Sparkles className="w-3 h-3" /> Desconto de 80% (OTO)
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs line-through text-slate-400">R$ 147</span>
            <span className="text-lg font-black text-emerald-400">R$ 29,90</span>
          </div>
        </div>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950 text-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer animate-pulse-subtle"
        >
          <span>ADICIONAR AGORA</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
