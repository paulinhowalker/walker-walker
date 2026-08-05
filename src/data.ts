import { Testimonial, AudioSample, FaqItem, RoutineTask } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Silveira',
    role: 'Mãe do Lucas (5 anos) e Sofia (7 anos)',
    city: 'São Paulo - SP',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    comment: 'Os audiobooks bíblicos mudaram a rotina de dormir aqui em casa! Antes era uma luta com telas até 22h. Agora colocamos a historinha de Davi e Golias ou Arca de Noé e eles dormem calminhos em 15 minutos. O Quadro de Estrelinhas fez meu filho arrumar a cama sozinho!',
    rating: 5,
    highlight: 'Dormem calminhos em 15 minutos!',
    tag: 'Compra Verificada'
  },
  {
    id: '2',
    name: 'Patrícia Mendes',
    role: 'Mãe do Bernardo (4 anos)',
    city: 'Belo Horizonte - MG',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    comment: 'Por R$ 29,90 achei que viria pouca coisa, mas a Coleção Ouro é GIGANTE! Imprimi os certificados de conquista e quando meu filho termina as tarefas ele ganha com a maior orgulho do mundo. Valeu cada centavo!',
    rating: 5,
    highlight: 'Meu filho fica orgulhoso com os certificados!',
    tag: 'Compra Verificada'
  },
  {
    id: '3',
    name: 'Dra. Camila Ferreira',
    role: 'Psicopedagoga e Mãe de 3',
    city: 'Curitiba - PR',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    comment: 'O Guia Anti-Telas que vem de bônus é fantástico. Dicas práticas sem radicalismo que funcionam de verdade. Aliado ao planner de rotina com estrelas, estimula a autonomia infantil de forma lúdica e afetuosa.',
    rating: 5,
    highlight: 'Recomendo para todas as mães!',
    tag: 'Compra Verificada'
  }
];

export const AUDIO_SAMPLES: AudioSample[] = [
  {
    id: '1',
    title: 'Davi e o Gigante Golias',
    duration: '04:45',
    category: 'História Bíblica',
    description: 'Ensina coragem, fé e superação de medos para as crianças.',
    freqLabel: 'Frequência 528 Hz (Transformação & Coragem)'
  },
  {
    id: '2',
    title: 'A Arca de Noé e o Arco-Íris',
    duration: '05:12',
    category: 'História Bíblica',
    description: 'Trabalha a obediência, respeito aos animais e paciência.',
    freqLabel: 'Frequência 432 Hz (Sintonia com a Natureza)'
  },
  {
    id: '3',
    title: 'O Menino Sem Birras e a Varinha do Respeito',
    duration: '03:50',
    category: 'Educação Emocional',
    description: 'Áudio narrado em tom calmo para acalmar momentos de estresse.',
    freqLabel: 'Frequência 396 Hz (Alívio de Ansiedade & Birras)'
  },
  {
    id: '4',
    title: 'História para Dormir: A Estrelinha Agradecida',
    duration: '06:30',
    category: 'Nana Neném & Calmaria',
    description: 'Música de fundo em frequência de 432Hz para induzir o sono profundo.',
    freqLabel: 'Frequência 432 Hz + Delta 3.5Hz (Indutor de Sono)'
  }
];

export const INITIAL_ROUTINE_TASKS: RoutineTask[] = [
  { id: 't1', title: 'Escovar os dentes ao acordar', icon: '🪥', period: 'Manhã', completedDays: [true, true, true, true, false, false, false] },
  { id: 't2', title: 'Arrumar a caminha', icon: '🛏️', period: 'Manhã', completedDays: [true, true, false, true, true, false, false] },
  { id: 't3', title: 'Fazer atividades do Acelerador Kids', icon: '✏️', period: 'Tarde', completedDays: [true, true, true, true, true, false, false] },
  { id: 't4', title: 'Guardar os brinquedos', icon: '🧸', period: 'Tarde', completedDays: [true, true, true, false, true, false, false] },
  { id: 't5', title: 'Ouvir audiobook e dormir sem telas', icon: '🎧', period: 'Noite', completedDays: [true, true, true, true, true, true, false] }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como vou receber o acesso à Coleção Ouro?',
    answer: 'Assim que confirmar a adição por R$ 29,90, o acesso será enviado IMEDIATAMENTE para o seu e-mail cadastrado na compra anterior. Você receberá um link de acesso direto aos arquivos PDF e aos áudios em MP3.'
  },
  {
    question: 'Por que este valor de R$ 29,90 é exclusivo para agora?',
    answer: 'Este é um Upsell Único (One-Time Offer). Como você acabou de se tornar cliente do Acelerador Kids, subsidiamos o valor normal de R$ 147,00 para R$ 29,90 como um presente de boas-vindas. Se fechar esta página, a oferta expira permanentemente.'
  },
  {
    question: 'Como funcionam os +50 Audiobooks?',
    answer: 'Eles estão em formato MP3 compatível com qualquer celular, tablet, computador ou até mesmo som do carro. Você pode baixar para ouvir offline a qualquer momento ou ouvir direto pela plataforma.'
  },
  {
    question: 'Como funciona o Quadro de Rotina e Certificados?',
    answer: 'São arquivos digitais de altíssima resolução prontos para imprimir na impressora da sua casa ou em qualquer gráfica. Você pode plastificar para usar canetinha ou colar estrelinhas adesivas com seu filho.'
  },
  {
    question: 'Tenho garantia?',
    answer: 'Sim! Você tem 7 dias de Garantia Incondicional de 100% do seu dinheiro de volta. Se por qualquer motivo sentir que o material não ajudou na rotina do seu filho, basta nos mandar uma única mensagem.'
  }
];
