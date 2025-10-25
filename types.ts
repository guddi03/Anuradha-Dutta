import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}