import React from 'react';
import { ArrowRight, Lock, Sparkles, AlertCircle } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { CHECKOUT_URL } from '../constants';

interface DoubleCtaSectionProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const DoubleCtaSection: React.FC<DoubleCtaSectionProps> = ({ onAccept, onDecline }) => {
  const handleAcceptClick = () => {
    audioSynth.playSuccessFanfare();
    onAccept();
  };

  const handleDeclineClick = () => {
    audioSynth.playDeclineTone();
    onDecline();
  };

  return (
    <section className="py-14 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Recap Box */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative mb-8">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Reciclagem da Oferta ORO
          </div>

          <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
            Última Chance de Garantir a <span className="text-amber-300">Coleção Ouro por R$ 29,90</span>
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Lembre-se: Esta é uma <strong>One-Time Offer (OTO)</strong>. Assim que você sair desta página, o valor retornará ao preço original de R$ 147,00.
          </p>

          {/* Pricing summary */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 max-w-md mx-auto mb-8 flex items-center justify-between">
            <div className="text-left">
              <span className="text-xs text-slate-400 block font-semibold uppercase">De R$ 147,00 Por Apenas:</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">R$ 29,90</span>
            </div>
            <div className="text-right">
              <span className="inline-block bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
                Economia R$ 117
              </span>
            </div>
          </div>

          {/* Double CTA Area */}
          <div className="max-w-2xl mx-auto space-y-4">
            
            {/* Primary Green CTA Button */}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAcceptClick}
              className="w-full relative group bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold py-5 px-6 rounded-2xl shadow-2xl shadow-emerald-900/50 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer border border-emerald-400/40 animate-pulse-subtle block"
            >
              <div className="flex items-center justify-center gap-2 text-lg sm:text-xl tracking-tight">
                <span>SIM! Adicionar a Coleção Ouro ao Meu Pedido por Apenas R$ 29,90</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </div>
              <div className="text-xs text-emerald-100 font-normal mt-1.5 opacity-90 flex items-center justify-center gap-2">
                <Lock className="w-3.5 h-3.5" /> Pagamento Seguro • Liberação Imediata
              </div>
            </a>

            {/* Secondary Guilt-Trip Recusal Link */}
            <button
              onClick={handleDeclineClick}
              className="w-full text-center text-xs sm:text-sm text-slate-400 hover:text-rose-400 underline underline-offset-4 cursor-pointer transition-colors leading-relaxed px-4 py-2 block"
            >
              Não, obrigado. Prefiro abrir mão do desconto de R$ 117,00 e deixar de levar os Audiobooks e Planners de Rotina.
            </button>

          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Ao clicar no botão verde, o valor de R$ 29,90 será processado com segurança no mesmo cartão ou PIX.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
