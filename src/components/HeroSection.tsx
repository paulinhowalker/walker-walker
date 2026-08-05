import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Zap, ArrowRight, CheckCircle2, Lock, Flame, Star, Gift, CheckSquare, Volume2, Trophy } from 'lucide-react';
import bundleMockup from '../assets/images/acelerador_kids_oro_bundle_1785879885642.jpg';
import { audioSynth } from '../utils/audioSynth';
import { CHECKOUT_URL } from '../constants';

interface HeroSectionProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onAccept, onDecline }) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleToggleCheck = () => {
    setIsChecked(!isChecked);
    audioSynth.playUiPop();
  };

  const handleAcceptClick = () => {
    audioSynth.playSuccessFanfare();
    onAccept();
  };

  const handleDeclineClick = () => {
    audioSynth.playDeclineTone();
    onDecline();
  };

  return (
    <section className="relative pt-4 pb-10 sm:pt-6 sm:pb-14 overflow-hidden bg-slate-950 text-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-amber-500/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* GAMIFIED PROGRESS BAR CARD */}
        <div className="mb-5 bg-slate-900/90 rounded-2xl p-3 sm:p-4 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold mb-2">
            <span className="text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
              <Trophy className="w-4 h-4 text-amber-400 animate-bounce" />
              PASSO 2 DE 2: PERSONALIZANDO SEU PEDIDO
            </span>
            <span className="text-emerald-400 font-mono font-black bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-500/30 animate-pulse">
              90% CONCLUÍDO
            </span>
          </div>

          {/* Glowing Animated Progress Bar */}
          <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800 shadow-inner">
            <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-400 rounded-full w-[90%] transition-all duration-1000 shadow-lg shadow-emerald-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/30 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Step Indicator & Social Proof Micro-Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-lg shadow-red-900/40 animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300 animate-spin-slow" />
            OFERTA DE ÚNICA APRESENTAÇÃO (OTO)
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Kit PDF Principal Garantido!
          </span>
        </div>

        {/* High-Impact Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Aumente em <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent underline decoration-amber-500/40">3x o Desenvolvimento</span> do Seu Filho com a Coleção Ouro de Audiobooks + Planner de Rotina Infantil!
          </h1>
          
          <p className="mt-2.5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Adicione ao seu pedido agora por apenas <span className="text-emerald-400 font-black bg-emerald-950/90 px-2.5 py-0.5 rounded-lg border border-emerald-500/50 shadow-md">R$ 29,90</span> (Economia imediata de <span className="line-through text-slate-400 font-bold">R$ 117,00</span>).
          </p>
        </div>

        {/* Product Box */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 rounded-3xl p-4 sm:p-7 border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 backdrop-blur-sm relative ring-1 ring-amber-500/20">
          
          {/* Top Tag Pulsing */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 text-slate-950 font-black px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs tracking-wider uppercase shadow-xl flex items-center justify-center gap-1 sm:gap-1.5 border border-yellow-200 animate-pulse max-w-[92%] whitespace-nowrap overflow-hidden text-ellipsis">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-950 shrink-0" />
            <span className="truncate">DESCONTO DE 80% APLICADO AUTOMATICAMENTE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mt-2">
            
            {/* Visual Bundle Image */}
            <div className="lg:col-span-7 relative group">
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-slate-950">
                <img 
                  src={bundleMockup} 
                  alt="Coleção Acelerador Kids ORO" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Gamified unlocked badge overlay */}
                <div className="absolute top-3 left-3 bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 font-black text-[10px] sm:text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                  BÔNUS LIBERADO: Guia Anti-Telas R$ 0,00
                </div>

                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 text-[10px] sm:text-xs text-slate-200 bg-slate-900/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-amber-500/30">
                  <span className="flex items-center gap-1 sm:gap-1.5 font-bold text-amber-300 truncate">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                    <span>Coleção ORO (+50 Audiobooks)</span>
                  </span>
                  <span className="font-extrabold text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-500/30 shrink-0">
                    Acesso Vitalício
                  </span>
                </div>
              </div>
            </div>

            {/* Price Anchoring & Action Column */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              
              {/* Price Anchor Card Pulsing */}
              <div className="bg-slate-950/90 rounded-2xl p-4 border border-amber-500/30 mb-4 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-bl border-b border-l border-amber-500/20 uppercase">
                  Oportunidade Única
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-1">
                  <span>Preço Normal do Pacote:</span>
                  <span className="line-through text-slate-400 font-bold">R$ 147,00</span>
                </div>
                
                <div className="flex items-baseline justify-between border-t border-slate-800/80 pt-2">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> PREÇO ESPECIAL:
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-emerald-400 font-bold mr-1">Apenas</span>
                    <span className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight animate-pulse">
                      R$ 29,90
                    </span>
                  </div>
                </div>
              </div>

              {/* Punchy Fast Highlights with Checkboxes */}
              <div className="space-y-2 mb-5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2.5 bg-slate-950/50 p-2 rounded-xl border border-slate-800/80">
                  <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span><strong>+50 Audiobooks Bíblicos em MP3</strong> (dormir em 15 min)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-950/50 p-2 rounded-xl border border-slate-800/80">
                  <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span><strong>Quadro de Rotina com Estrelinhas</strong> (ensina disciplina)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-950/50 p-2 rounded-xl border border-slate-800/80">
                  <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span><strong>20 Certificados de Inteligência</strong> Infantil</span>
                </div>
                <div className="flex items-center gap-2.5 bg-amber-500/10 p-2 rounded-xl border border-amber-500/30 text-amber-200">
                  <span className="p-1 rounded-full bg-amber-500/20 text-amber-300 flex-shrink-0">
                    <Gift className="w-4 h-4" />
                  </span>
                  <span><strong>BÔNUS HOJE:</strong> Guia Anti-Telas sem Birras (7 Dias)</span>
                </div>
              </div>

              {/* GAMIFIED CHECKBOX TOGGLE */}
              <div 
                onClick={handleToggleCheck}
                className={`mb-4 p-3 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                  isChecked 
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-white shadow-md' 
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-xs transition-all ${
                  isChecked ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500'
                }`}>
                  {isChecked ? '✓' : ''}
                </div>
                <div className="flex-1 text-xs">
                  <span className="font-bold text-emerald-300 block">SIM! Quero incluir a Coleção ORO no meu pedido.</span>
                  <span className="text-[10px] text-slate-400">Marque esta caixinha para garantir o desconto de R$ 117</span>
                </div>
              </div>

              {/* Glowing High Conversion Primary CTA */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAcceptClick}
                className="w-full relative group bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black py-4 px-5 rounded-2xl shadow-2xl shadow-emerald-950/80 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer border border-emerald-400/50 ring-4 ring-emerald-500/20 animate-pulse block"
              >
                <div className="flex items-center justify-center gap-2 text-base sm:text-lg tracking-tight">
                  <span>SIM! Adicionar a Coleção Ouro por R$ 29,90</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </div>
                <div className="text-[11px] text-emerald-100 font-medium mt-1 opacity-90 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-200" /> Cobrado no mesmo pagamento • Liberação no e-mail
                </div>
              </a>

              {/* Guilt-Trip Recusal Link */}
              <button
                onClick={handleDeclineClick}
                className="mt-3 text-center text-xs text-slate-400 hover:text-rose-400 underline underline-offset-4 cursor-pointer transition-colors leading-relaxed px-2"
              >
                Não, obrigado. Prefiro abrir mão do desconto de R$ 117,00 e deixar de levar os Audiobooks e Planners de Rotina.
              </button>

            </div>

          </div>

          {/* Psychological Proof Bar */}
          <div className="mt-5 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 text-center">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9/5 Aprovado por +4.800 Mães
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> 7 Dias de Garantia Total
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <Lock className="w-4 h-4 text-emerald-400" /> Download Imediato em PDF e MP3
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
