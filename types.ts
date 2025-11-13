
export interface Memory {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface QuizQuestion {
  question: string;
  answers: string[];
  correct: number;
}

export interface QuizResult {
  gender: 'male' | 'female';
  answers: number[];
  date: string;
}