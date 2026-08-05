import React from 'react';
import { Lock, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 text-xs py-10 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
        
        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-400" /> Checkout Criptografado SSL
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" /> Garantia de 7 Dias
          </span>
          <span className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-400" /> Feito com Amor para Famílias
          </span>
        </div>

        <p className="max-w-3xl mx-auto leading-relaxed text-slate-400">
          Acelerador Kids © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>

        <p className="max-w-3xl mx-auto text-[11px] text-slate-400 leading-relaxed">
          Aviso Legal: Este produto não substitui a orientação profissional de médicos, psicólogos ou neuropediatras. Os materiais foram desenvolvidos como suporte pedagógico e educativo para estimular hábitos saudáveis e autonomia infantil.
        </p>

        <div className="flex items-center justify-center gap-4 text-slate-400 text-[11px] pt-2">
          <a href="#termos" className="hover:text-slate-200 transition-colors">Termos de Uso</a>
          <span>•</span>
          <a href="#privacidade" className="hover:text-slate-200 transition-colors">Política de Privacidade</a>
          <span>•</span>
          <a href="#suporte" className="hover:text-slate-200 transition-colors">Contato de Suporte</a>
        </div>

      </div>
    </footer>
  );
};
