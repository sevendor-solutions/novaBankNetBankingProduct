import type { UserSession } from '../types/index';

export const AUTH_USER: UserSession = {
  id: 'user_001',
  email: 'user@bank.com',
  fullName: 'Avery Steele',
  accountType: 'Premium',
};

export const AUTH_CREDENTIALS = {
  email: 'user@bank.com',
  password: 'password123',
};
