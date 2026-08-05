export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatarUrl: string;
  comment: string;
  rating: number;
  highlight: string;
  tag: string;
}

export interface AudioSample {
  id: string;
  title: string;
  duration: string;
  category: string;
  description: string;
  freqLabel?: string;
  audioUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RoutineTask {
  id: string;
  title: string;
  icon: string;
  period: 'Manhã' | 'Tarde' | 'Noite';
  completedDays: boolean[];
}
