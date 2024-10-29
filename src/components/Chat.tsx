import React, { useState } from 'react';
import { useStore } from '../store';
import { Message } from '../types';
import { Send } from 'lucide-react';

interface ChatProps {
  roomId: string;
  otherUserId: string;
}

export default function Chat({ roomId, otherUserId }: ChatProps) {
  const [message, setMessage] = useState('');
  const currentUser = useStore((state) => state.currentUser);
  const chatRooms = useStore((state) => state.chatRooms);
  const addMessage = useStore((state) => state.addMessage);

  const room = chatRooms.find((r) => r.id === roomId);
  const messages = room?.messages || [];

  const handleSend = () => {
    if (!message.trim() || !currentUser) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: currentUser.id,
      receiverId: otherUserId,
      content: message,
      timestamp: Date.now(),
    };

    addMessage(roomId, newMessage);
    setMessage('');
  };

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-lg shadow-md">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.senderId === currentUser?.id ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.senderId === currentUser?.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}