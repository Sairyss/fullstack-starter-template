import { create } from 'zustand';

export type User = {
  username: string;
  role: string;
  avatarUrl: string;
};

export type GlobalState = {
  user?: User;

  signIn: (user: User) => void;
  signOut: () => void;
};

export const useGlobalStateStore = create<GlobalState>((set) => ({
  user: undefined,

  signIn: (user: User) => set((prevState) => ({ ...prevState, user })),
  signOut: () => set((prevState) => ({ ...prevState, user: undefined })),
}));
