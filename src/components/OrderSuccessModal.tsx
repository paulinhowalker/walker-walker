import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle, Sparkles, Mail, ArrowRight, Headphones, Calendar } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface OrderSuccessModalProps {
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ onClose }) => {

  useEffect(() => {
    // Fire fanfare audio and confetti when modal opens
    audioSynth.playSuccessFanfare();
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const handleClose = () => {
    audioSynth.playUiPop();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl max-w-lg w-full p-5 sm:p-8 border-2 border-emerald-500/50 shadow-2xl relative text-slate-100 text-center max-h-[92vh] overflow-y-auto">
        
        {/* Success Icon */}
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40 shadow-xl shadow-emerald-500/20 animate-bounce">
          <CheckCircle className="w-10 h-10" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-2">
          <Sparkles className="w-3.5 h-3.5" /> UPGRADE ORO ADICIONADO COM SUCESSO!
        </span>

        <h3 className="text-2xl font-black text-white mb-2">
          Parabéns! Seu Pedido Foi Atualizado!
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          A <strong className="text-amber-300">Coleção Ouro (Audiobooks + Planners + Guia Anti-Telas)</strong> por R$ 29,90 foi anexada ao seu pedido do Acelerador Kids.
        </p>

        {/* Access Box */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left space-y-3 text-xs mb-6">
          <div className="flex items-center gap-3 text-emerald-300 font-semibold">
            <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Acesso liberado e enviado para o seu e-mail de compra.</span>
          </div>
          <div className="flex items-center gap-3 text-amber-300 font-semibold">
            <Headphones className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Audiobooks em MP3 prontos para ouvir no celular.</span>
          </div>
          <div className="flex items-center gap-3 text-purple-300 font-semibold">
            <Calendar className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span>Planners e Certificados prontos para imprimir.</span>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold py-4 px-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
        >
          <span>Acessar Meus Materiais Agora</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};
