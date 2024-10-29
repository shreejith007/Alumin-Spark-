import { create } from 'zustand';
import { User, ChatRoom, Message } from './types';

interface AppState {
  currentUser: User | null;
  users: User[];
  chatRooms: ChatRoom[];
  setCurrentUser: (user: User | null) => void;
  addChatRoom: (room: ChatRoom) => void;
  addMessage: (roomId: string, message: Message) => void;
}

export const useStore = create<AppState>((set) => ({
  currentUser: null,
  users: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      linkedIn: 'linkedin.com/in/johndoe',
      type: 'alumni',
      company: 'Google',
      position: 'Senior Software Engineer',
      location: {
        city: 'Bangalore',
        country: 'India',
        coordinates: [12.9716, 77.5946],
      },
      expertise: 'Full Stack Development',
    },
    // Add more initial users here
  ],
  chatRooms: [],
  setCurrentUser: (user) => set({ currentUser: user }),
  addChatRoom: (room) => set((state) => ({ chatRooms: [...state.chatRooms, room] })),
  addMessage: (roomId, message) =>
    set((state) => ({
      chatRooms: state.chatRooms.map((room) =>
        room.id === roomId
          ? { ...room, messages: [...room.messages, message] }
          : room
      ),
    })),
}));