import React, { useState, useRef, useEffect } from 'react';
import { getChatbotResponse } from '../services/geminiService';
import { CHATBOT_GREETING } from '../constants';
import type { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ sender: 'bot', text: CHATBOT_GREETING }]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (userInput.trim() === '' || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const botResponse = await getChatbotResponse(userInput);
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages([...newMessages, { sender: 'bot', text: "Sorry, something went wrong." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 bg-purple-700 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transform hover:scale-110 transition-all duration-300 z-50"
        aria-label="Open Chatbot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0-3.38 19.33 1 1 0 0 1-.54.17H6a1 1 0 0 1-1-1v-2.3a1 1 0 0 1 .17-.54A10 10 0 1 0 12 2z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 h-96 bg-[#1a1a2e] border-2 border-purple-700/50 rounded-xl shadow-2xl shadow-purple-900/50 flex flex-col z-50 text-white overflow-hidden">
          <div className="p-4 bg-purple-900/50 text-center font-bold font-playfair border-b border-purple-700/50">AstroBot Assistant</div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-yellow-400 text-purple-900' : 'bg-purple-800/50'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-purple-800/50 p-3 rounded-lg flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></span>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-400"></span>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-2 border-t border-purple-700/50 flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
              className="flex-1 p-2 bg-purple-900/30 border border-purple-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-yellow-400"
              disabled={isLoading}
            />
            <button onClick={handleSend} className="bg-yellow-400 text-purple-900 p-2 rounded-r-lg hover:bg-yellow-300 disabled:bg-gray-500" disabled={isLoading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
