import React from 'react';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-10 bg-slate-950 text-slate-100 relative">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> +4.800 Mães Satisfeitas
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            Veja a Transformação no Sono e na Rotina
          </h2>
        </div>

        {/* Compact Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="bg-slate-900 rounded-2xl p-4 border border-slate-800 hover:border-amber-500/30 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    {t.tag}
                  </span>
                </div>

                <div className="mb-2 font-black text-amber-300 text-xs italic">
                  "{t.highlight}"
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-800">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover border border-amber-500/40"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{t.name}</h4>
                  <p className="text-[10px] text-slate-400 truncate">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
