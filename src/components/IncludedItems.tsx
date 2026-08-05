import React, { useState } from 'react';
import { Headphones, Calendar, Award, Palette, Play, Pause, Volume2, Star, CheckCircle, Sparkles, Music } from 'lucide-react';
import { AUDIO_SAMPLES, INITIAL_ROUTINE_TASKS } from '../data';
import { RoutineTask } from '../types';
import { audioSynth } from '../utils/audioSynth';

export const IncludedItems: React.FC = () => {
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [routineTasks, setRoutineTasks] = useState<RoutineTask[]>(INITIAL_ROUTINE_TASKS);

  const toggleAudio = (id: string) => {
    if (activeAudioId === id && isPlaying) {
      audioSynth.stop();
      setIsPlaying(false);
      setActiveAudioId(null);
    } else {
      audioSynth.playTrack(id);
      setActiveAudioId(id);
      setIsPlaying(true);
    }
  };

  const toggleStar = (taskId: string, dayIndex: number) => {
    audioSynth.playStarSound();
    setRoutineTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        const newCompleted = [...task.completedDays];
        newCompleted[dayIndex] = !newCompleted[dayIndex];
        return { ...task, completedDays: newCompleted };
      }
      return task;
    }));
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Acelerador Kids ORO
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            O Que Você Recebe na <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">Coleção Ouro Exclusiva</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Quatro ferramentas fundamentais projetadas para acalmar, organizar e premiar seu filho todos os dias.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: +50 Audiobooks (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 border border-amber-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 inline-flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  <span className="text-xs font-bold">Item 1 • Audiobooks MP3</span>
                </span>
                <span className="text-xs font-extrabold uppercase text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  +50 Áudios Inclusos
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                🎧 +50 Audiobooks Bíblicos & Educativos Infantil
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                Músicas relaxantes em 432Hz e narrações afetuosas para acalmar a ansiedade, transmitir valores cristãos e induzir o sono tranquilo sem precisar de telas.
              </p>

              {/* Functional Audio Player */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                <div className="flex items-center justify-between mb-3 text-xs font-bold text-amber-300">
                  <span className="flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" /> Clique em PLAY para Ouvir a Demonstração Real:
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    🔊 Som Ativado
                  </span>
                </div>

                <div className="space-y-2">
                  {AUDIO_SAMPLES.map((sample) => {
                    const active = activeAudioId === sample.id;
                    const playing = active && isPlaying;
                    return (
                      <div 
                        key={sample.id}
                        className={`p-3 rounded-xl border transition-all ${
                          active 
                            ? 'bg-amber-950/60 border-amber-500/60 text-white shadow-lg shadow-amber-500/10' 
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <button
                            onClick={() => toggleAudio(sample.id)}
                            className={`p-2.5 rounded-full transition-transform active:scale-90 flex-shrink-0 cursor-pointer ${
                              playing 
                                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/40 animate-pulse' 
                                : 'bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400'
                            }`}
                            title={playing ? 'Pausar áudio' : 'Tocar áudio demonstrativo'}
                          >
                            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                          </button>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs sm:text-sm font-bold truncate text-white">{sample.title}</span>
                              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">{sample.duration}</span>
                            </div>
                            <p className="text-[11px] text-slate-400 truncate mt-0.5">{sample.description}</p>
                            {sample.freqLabel && (
                              <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                <span>⚡ {sample.freqLabel}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Animated Sound Waves when playing */}
                        {playing && (
                          <div className="mt-2 pt-2 border-t border-amber-500/30 flex items-center justify-between text-[11px] text-amber-300">
                            <div className="flex items-center gap-2">
                              <Music className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                              <span className="font-semibold">Tocando Melodia Calmante (Web Audio)...</span>
                            </div>
                            <div className="flex items-end gap-1 h-3">
                              <span className="w-1 bg-amber-400 h-full animate-pulse" />
                              <span className="w-1 bg-amber-300 h-2/3 animate-bounce" />
                              <span className="w-1 bg-amber-400 h-4/5 animate-pulse" />
                              <span className="w-1 bg-amber-200 h-1/2 animate-bounce" />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" /> Compatível com Celular, Som de Carro e WhatsApp
              </span>
              <span className="font-bold text-slate-300">Formato MP3</span>
            </div>
          </div>

          {/* Card 2: Quadro de Rotina Infantil (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 rounded-3xl p-6 border border-slate-800 hover:border-emerald-500/30 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-xs font-bold">Item 2 • Planner Infantil</span>
                </span>
                <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Imprimível
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                🗓️ Quadro de Rotina & Hábitos Infantil
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Ensine autonomia e disciplina sem gritos com o sistema lúdico de recompensa por estrelinhas.
              </p>

              {/* Interactive Simulator */}
              <div className="bg-slate-900 rounded-2xl p-3.5 border border-slate-800">
                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Teste Dar Estrelinhas:
                  </span>
                  <span className="text-[10px] text-slate-400">Clique no número</span>
                </div>

                <div className="space-y-2 text-xs">
                  {routineTasks.slice(0, 3).map((task) => (
                    <div key={task.id} className="bg-slate-950 p-2 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate pr-1">
                        <span className="text-sm">{task.icon}</span>
                        <span className="font-semibold text-slate-200 truncate text-[11px]">{task.title}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {task.completedDays.slice(0, 4).map((done, idx) => (
                          <button
                            key={idx}
                            onClick={() => toggleStar(task.id, idx)}
                            className={`w-5 h-5 rounded flex items-center justify-center text-[10px] transition-all cursor-pointer ${
                              done 
                                ? 'bg-amber-400 text-slate-950 font-black shadow-sm shadow-amber-400/50 scale-105' 
                                : 'bg-slate-800 text-slate-500 hover:bg-slate-700'
                            }`}
                          >
                            {done ? '⭐' : `${idx + 1}`}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">Reduz ansiedade e birras</span>
              <span className="text-slate-300">PDF Alta Definição</span>
            </div>
          </div>

          {/* Card 3: 20 Certificados (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 rounded-3xl p-6 border border-slate-800 hover:border-amber-500/30 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 inline-flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-bold">Item 3 • Certificados Ouro</span>
                </span>
                <span className="text-xs font-extrabold text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  20 Modelos
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2">
                🏅 20 Certificados de Inteligência & Conquista
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Premie cada caderno concluído! Aumenta a autoestima e o orgulho do seu filho para continuar estudando.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="text-amber-400 font-semibold">Pronto para Imprimir e Enquadrar</span>
              <span>Reforço Positivo</span>
            </div>
          </div>

          {/* Card 4: +500 Desenhos para Colorir (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 rounded-3xl p-6 border border-slate-800 hover:border-purple-500/30 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20 inline-flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  <span className="text-xs font-bold">Item 4 • Caderno de Pintura</span>
                </span>
                <span className="text-xs font-extrabold text-purple-400 bg-purple-950 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                  +500 Desenhos
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2">
                🎨 +500 Desenhos de Colorir Edição Ouro
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Temas da Bíblia, animais, espaço e natureza para relaxar a mente e desenvolver o controle motor.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="text-purple-400 font-semibold">Horas de Lazer Saudável</span>
              <span>PDF Vetorial Nítido</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
