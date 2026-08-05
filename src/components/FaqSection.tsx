import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';
import { audioSynth } from '../utils/audioSynth';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    audioSynth.playUiPop();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-slate-950 text-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800 text-amber-300 border border-slate-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Dúvidas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Perguntas Frequentes sobre a Coleção Ouro
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-amber-400 font-mono text-xs font-black">0{index + 1}.</span>
                    {item.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 bg-slate-950/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
