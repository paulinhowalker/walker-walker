import React from 'react';
import { ShieldCheck, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { CHECKOUT_URL } from '../constants';

interface GuaranteeSectionProps {
  onAccept?: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onAccept }) => {
  const handleClick = () => {
    if (onAccept) {
      audioSynth.playSuccessFanfare();
      onAccept();
    }
  };

  return (
    <section className="py-8 bg-slate-900 text-slate-100 border-t border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 border border-amber-500/30 shadow-xl flex flex-col sm:flex-row items-center gap-5">
          
          {/* Guarantee Badge Seal */}
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-500 p-0.5 shadow-lg flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-1 border border-amber-400/30">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
              <span className="text-xs font-black text-amber-300 leading-none">7 DIAS</span>
              <span className="text-[8px] font-bold tracking-wider uppercase text-slate-400">Garantia</span>
            </div>
          </div>

          {/* Guarantee Copy */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-base sm:text-lg font-extrabold text-white mb-1">
              Testes com Seu Filho por 7 Dias Sem Riscos (Garantia 100%)
            </h3>

            <p className="text-slate-300 text-xs leading-relaxed mb-3">
              Se por qualquer motivo você e seu filho não amarem os Audiobooks e os Planners, basta enviar um único e-mail para receber 100% do seu dinheiro de volta na hora.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-semibold">
              <div className="flex flex-wrap items-center gap-2 text-emerald-400">
                <span className="flex items-center gap-1 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  <RotateCcw className="w-3 h-3" /> Reembolso Rápido
                </span>
                <span className="flex items-center gap-1 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" /> Processamento Seguro
                </span>
              </div>

              {onAccept && (
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 text-xs transition-all cursor-pointer border border-emerald-400/40"
                >
                  <span>GARANTIR COM GARANTIA</span>
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
