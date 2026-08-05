import React from 'react';
import { Gift, Check, ArrowRight } from 'lucide-react';
import guideMockup from '../assets/images/routine_planner_guide_1785879902275.jpg';
import { audioSynth } from '../utils/audioSynth';
import { CHECKOUT_URL } from '../constants';

interface BonusSectionProps {
  onAccept?: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onAccept }) => {
  const handleClick = () => {
    if (onAccept) {
      audioSynth.playSuccessFanfare();
      onAccept();
    }
  };

  return (
    <section className="py-8 bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Compact Bonus Card */}
        <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-amber-950/60 rounded-2xl p-5 border border-amber-500/40 shadow-xl flex flex-col md:flex-row items-center gap-6">
          
          <div className="w-28 sm:w-36 flex-shrink-0 relative rounded-xl overflow-hidden border border-amber-500/30">
            <img 
              src={guideMockup} 
              alt="Guia Anti-Telas" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-1 left-1 bg-red-600 text-white font-black text-[9px] px-1.5 py-0.5 rounded uppercase">
              100% Anti-Telas
            </span>
          </div>

          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-1 text-[11px] font-black text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 mb-2">
              <Gift className="w-3.5 h-3.5 text-amber-400" /> BÔNUS EXCLUSIVO INCLUSO HOJE (GRÁTIS)
            </div>

            <h3 className="text-lg sm:text-xl font-black text-white mb-1.5">
              📖 Guia Prático Anti-Telas: Reduza o Vício em Celular em 7 Dias sem Birras
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 mb-3">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Protocolo de transição suave sem surtos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Atividades de foco que duram +1 hora</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 line-through">De R$ 47,00</span>
                <span className="font-extrabold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                  INCLUSO GRÁTIS NESTA SESSÃO
                </span>
              </div>

              {onAccept && (
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 text-xs transition-all cursor-pointer border border-emerald-400/40"
                >
                  <span>GARANTIR BÔNUS COM A COLEÇÃO ORO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
