import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../types';
import { MessageCircle, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-500 ml-3' : 'bg-gray-300 mr-3'}`}>
          {isUser ? <MessageCircle size={20} className="text-white" /> : <Bot size={20} className="text-gray-700" />}
        </div>
        <div className={`rounded-lg px-4 py-3 ${isUser ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}>
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          )}
          <div className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;