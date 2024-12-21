import { atom } from 'recoil';
import { User } from '../types/auth';

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export const isAuthenticatedState = atom({
  key: 'isAuthenticatedState',
  default: false,
});