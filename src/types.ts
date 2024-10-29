export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  linkedIn: string;
  type: 'student' | 'alumni';
  location?: {
    city: string;
    country: string;
    coordinates: [number, number];
  };
  department?: string;
  year?: number;
  company?: string;
  position?: string;
  expertise?: string;
  achievements?: string[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: number;
}

export interface ChatRoom {
  id: string;
  participants: [string, string];
  messages: Message[];
}

export interface CodingChallenge {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  testCases: {
    input: string;
    output: string;
  }[];
  starterCode: string;
  solution: string;
}