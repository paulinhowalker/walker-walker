import React, { useEffect } from 'react';
import { AlertTriangle, ArrowRight, X, CheckCircle2, Sparkles } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { CHECKOUT_URL } from '../constants';

interface DownsellModalProps {
  onConfirmAccept: () => void;
  onConfirmDecline: () => void;
  onClose: () => void;
}

export const DownsellModal: React.FC<DownsellModalProps> = ({ onConfirmAccept, onConfirmDecline, onClose }) => {
  useEffect(() => {
    audioSynth.playNotificationChime();
  }, []);

  const handleAccept = () => {
    audioSynth.playSuccessFanfare();
    onConfirmAccept();
  };

  const handleDecline = () => {
    audioSynth.playDeclineTone();
    onConfirmDecline();
  };

  const handleClose = () => {
    audioSynth.playUiPop();
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 rounded-3xl max-w-md w-full p-5 sm:p-6 border-2 border-amber-500/50 shadow-2xl relative text-slate-100 text-center max-h-[92vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Warning Badge */}
        <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-amber-500/40 animate-pulse">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="inline-block bg-red-950 text-red-300 border border-red-500/40 text-[11px] font-black uppercase px-3 py-1 rounded-full mb-3">
          ⚠️ ÚLTIMA AVISO DE OPORTUNIDADE
        </span>

        <h3 className="text-xl font-extrabold text-white mb-2">
          Tem certeza de que prefere abrir mão dos <span className="text-amber-300">Audiobooks & Planners</span>?
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
          Por apenas <strong className="text-emerald-400">R$ 29,90 (pagamento único)</strong>, seu filho levaria +50 Áudios Bíblicos para dormir, o Quadro de Rotina e o Guia Anti-Telas de bônus. Esta promoção <strong>nunca mais</strong> estará disponível por este valor.
        </p>

        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-left text-xs mb-6 space-y-1.5">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>+50 Audiobooks Bíblicos e Educativos (MP3)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Quadro de Rotina com Estrelinhas Imprimível</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Bônus: Guia Anti-Telas sem Birras em 7 Dias</span>
          </div>
        </div>

        <div className="space-y-3">
          {/* Primary button inside modal */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleAccept}
            className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>SIM! Quero Garantir por R$ 29,90</span>
          </a>

          {/* Secondary skip button inside modal */}
          <button
            onClick={handleDecline}
            className="w-full text-xs text-slate-400 hover:text-slate-300 underline underline-offset-2 py-1 cursor-pointer transition-colors"
          >
            Não, quero recusar a oferta permanentemente e ir para meu pedido original.
          </button>
        </div>

      </div>
    </div>
  );
};
