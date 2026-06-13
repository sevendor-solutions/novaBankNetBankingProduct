import type { AccountRecord } from '../types';

export const ACCOUNTS: AccountRecord[] = [
  {
    id: 'acc-01',
    type: 'Savings',
    title: 'Savings Account',
    number: 'XXXXXX4567',
    balance: 450000,
    ifsc: 'NOVA0001234',
    branch: 'Hyderabad Main Branch',
  },
  {
    id: 'acc-02',
    type: 'Current',
    title: 'Current Account',
    number: 'XXXXXX7890',
    balance: 235000,
    ifsc: 'NOVA0001234',
    branch: 'Hyderabad Main Branch',
  },
  {
    id: 'acc-03',
    type: 'Fixed Deposit',
    title: 'Fixed Deposit',
    number: 'FD20250001',
    balance: 500000,
    ifsc: 'NOVA0001234',
    branch: 'Hyderabad Main Branch',
    interestRate: '7.5%',
    maturityDate: '15-Apr-2028',
  },
];
