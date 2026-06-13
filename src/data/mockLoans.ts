import type { LoanRecord } from '../types';

export const LOANS: LoanRecord[] = [
  {
    id: 'loan-01',
    title: 'Home Loan',
    loanNumber: 'HL2025001',
    amount: 2500000,
    outstanding: 2150000,
    emi: 24500,
    status: 'In Progress',
  },
  {
    id: 'loan-02',
    title: 'Personal Loan',
    loanNumber: 'PL2025001',
    amount: 500000,
    outstanding: 375000,
    emi: 10800,
    status: 'In Progress',
  },
];
