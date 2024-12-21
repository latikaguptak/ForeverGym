export interface Program {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Trainer {
  id: number;
  name: string;
  specialty: string;
  image: string;
  instagram: string;
}