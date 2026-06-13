import type { BankCard } from '../types';

export const BANK_CARDS: BankCard[] = [
  {
    id: 'card-01',
    type: 'Debit',
    brand: 'Visa Platinum',
    maskedNumber: '**** **** **** 4567',
    holder: 'Rahul Sharma',
    expiry: '08/29',
    status: 'Active',
  },
  {
    id: 'card-02',
    type: 'Credit',
    brand: 'Nova Signature',
    maskedNumber: '**** **** **** 7890',
    holder: 'Rahul Sharma',
    expiry: '03/30',
    limit: 500000,
    available: 465000,
    status: 'Active',
  },
];
