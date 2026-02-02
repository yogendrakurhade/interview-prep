export interface CodeSnippet {
  language: string;
  code: string;
}

export interface Diagram {
  title: string;
  imageUrl: string;
  description?: string;
}

export interface Question {
  id: string;
  question: string;
  answer: string;
  codeSnippets?: CodeSnippet[];
  diagrams?: Diagram[];
}

export interface Topic {
  id: string;
  name: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  icon?: string;
  topics: Topic[];
}
