export interface Question {
  question: string;
  choices: string[];
  answer: number; // index of correct answer
  explanation: string;
}

export interface QuizTopic {
  id: string;
  title: string;
  icon: string; // SVG path or symbol
  description: string;
  questions: Question[];
}
