import type { DepositRecord } from '../types';

export const DEPOSITS: DepositRecord[] = [
  {
    id: 'deposit-01',
    title: 'Fixed Deposit FD001',
    accountNumber: 'FD001',
    amount: 500000,
    interestRate: '7.50%',
    maturityDate: '15-Apr-2028',
    valueAtMaturity: '₹6,05,000',
  },
  {
    id: 'deposit-02',
    title: 'Fixed Deposit FD002',
    accountNumber: 'FD002',
    amount: 250000,
    interestRate: '7.10%',
    maturityDate: '10-Feb-2027',
    valueAtMaturity: '₹2,80,500',
  },
  {
    id: 'deposit-03',
    title: 'Recurring Deposit RD001',
    accountNumber: 'RD001',
    amount: 5000,
    interestRate: '6.75%',
    maturityDate: '15-Apr-2030',
    valueAtMaturity: '₹3,25,000',
  },
];
