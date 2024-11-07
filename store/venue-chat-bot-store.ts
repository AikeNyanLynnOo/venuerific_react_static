import { create } from "zustand";

import { getCurrentTimeFormatted } from "@/config/helperFunctions";

interface Message {
  sender: string;
  text?: string;
  time?: string;
  isError?: boolean;
  renderedContent?: any;
}

type Store = {
  // fields declaration
  step: number;
  replyLoading: boolean;
  messages: Message[];

  // setters declaration
  addMessage: (message: Message) => void;
  resetMessages: () => void;
  changeStep: (step: number) => void;
  setReplyLoading: (replyLoading: boolean) => void;
};

export const useVenueChatBotStore = create<Store>()((set) => ({
  // field default values
  step: 0,
  replyLoading: false,
  messages: [
    {
      sender: "bot",
      text: "Welcome to Venuerific, the biggest venue marketplace in Asia. To start enquiry, Click Start!",
      time: getCurrentTimeFormatted(),
      isError: false,
    },
  ],

  // setters implementation

  changeStep: (step: number) => {
    set((state) => ({
      ...state,
      step,
    }));
  },
  addMessage: (message: Message) => {
    set((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          ...message,
          time: getCurrentTimeFormatted(),
        },
      ],
    }));
  },
  resetMessages: () => {
    set((state) => ({
      ...state,
      messages: [
        {
          sender: "bot",
          text: "Welcome to Venuerific, the biggest venue marketplace in Asia. To start enquiry, Click Start!",
          time: getCurrentTimeFormatted(),
          isError: false,
        },
      ],
    }));
  },
  setReplyLoading: (replyLoading: boolean) => {
    set((state) => ({
      ...state,
      replyLoading,
    }));
  },
}));
