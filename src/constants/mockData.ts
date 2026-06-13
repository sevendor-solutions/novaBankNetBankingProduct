import type { ActionItem, BudgetCategory, CreditCard, SavingsVault, SummaryMetric, Transaction } from '../types/index';

export const ACCOUNT_SUMMARY: SummaryMetric[] = [
  {
    id: 'sum-01',
    title: 'Net Worth',
    value: '$128,400',
    trend: '8.9% growth',
    trendLabel: '+8.9%',
    accent: 'text-emerald-300 bg-emerald-500/10',
  },
  {
    id: 'sum-02',
    title: 'Monthly Income',
    value: '$24,300',
    trend: '5.4% above target',
    trendLabel: '+5.4%',
    accent: 'text-cyan-300 bg-cyan-500/10',
  },
  {
    id: 'sum-03',
    title: 'Expenses',
    value: '$8,900',
    trend: '2.1% below budget',
    trendLabel: '-2.1%',
    accent: 'text-amber-300 bg-amber-500/10',
  },
];

export const BANK_CARD: CreditCard = {
  id: 'card-01',
  provider: 'FinVault Elite',
  cardNumber: '**** **** **** 4321',
  cardHolder: 'Avery Steele',
  expiryDate: '10/29',
  cvv: '832',
  isFrozen: false,
};

export const TRANSACTIONS: Transaction[] = [
  {
    id: 'txn-01',
    title: 'Salary deposit',
    merchantName: 'Lumen Labs',
    category: 'Salary',
    type: 'Income',
    amount: '+$9,200.00',
    date: 'Today',
    status: 'Success',
  },
  {
    id: 'txn-02',
    title: 'Monthly rent',
    merchantName: 'Skyline Suites',
    category: 'Payment',
    type: 'Expense',
    amount: '-$2,100.00',
    date: 'Today',
    status: 'Success',
  },
  {
    id: 'txn-03',
    title: 'Online shopping',
    merchantName: 'Aurora Market',
    category: 'Shopping',
    type: 'Expense',
    amount: '-$320.00',
    date: 'Yesterday',
    status: 'Success',
  },
  {
    id: 'txn-04',
    title: 'Freelance payout',
    merchantName: 'PixelCraft',
    category: 'Salary',
    type: 'Income',
    amount: '+$1,850.00',
    date: 'Yesterday',
    status: 'Pending',
  },
  {
    id: 'txn-05',
    title: 'Coffee transfer',
    merchantName: 'Harbor Café',
    category: 'Transfer',
    type: 'Expense',
    amount: '-$18.20',
    date: '2 days ago',
    status: 'Success',
  },
  {
    id: 'txn-06',
    title: 'Utility payment',
    merchantName: 'Nexus Energy',
    category: 'Payment',
    type: 'Expense',
    amount: '-$184.90',
    date: '2 days ago',
    status: 'Success',
  },
  {
    id: 'txn-07',
    title: 'Travel booking',
    merchantName: 'JetSet',
    category: 'Travel',
    type: 'Expense',
    amount: '-$765.00',
    date: '3 days ago',
    status: 'Success',
  },
  {
    id: 'txn-08',
    title: 'Crypto exchange',
    merchantName: 'Helix Exchange',
    category: 'Transfer',
    type: 'Expense',
    amount: '-$540.00',
    date: '4 days ago',
    status: 'Pending',
  },
  {
    id: 'txn-09',
    title: 'Reward rebate',
    merchantName: 'Ventura Rewards',
    category: 'Salary',
    type: 'Income',
    amount: '+$185.00',
    date: '5 days ago',
    status: 'Success',
  },
  {
    id: 'txn-10',
    title: 'Gym membership',
    merchantName: 'Pulse Fitness',
    category: 'Payment',
    type: 'Expense',
    amount: '-$79.00',
    date: '1 week ago',
    status: 'Success',
  },
];

export const BUDGET_CATEGORIES: BudgetCategory[] = [
  { id: 'budget-01', title: 'Food & dining', spent: 820, limit: 1200 },
  { id: 'budget-02', title: 'Shopping', spent: 950, limit: 1300 },
  { id: 'budget-03', title: 'Utilities', spent: 360, limit: 550 },
  { id: 'budget-04', title: 'Travel', spent: 685, limit: 760 },
];

export const SAVINGS_VAULTS: SavingsVault[] = [
  { id: 'vault-01', title: 'Tech Fund', current: 1500, goal: 5000 },
  { id: 'vault-02', title: 'Rainy Day', current: 3200, goal: 6000 },
  { id: 'vault-03', title: 'Travel Reserve', current: 1040, goal: 2500 },
];

export const QUICK_ACTIONS: ActionItem[] = [
  { id: 'action-01', label: 'Transfer Funds', icon: 'Transfer' },
  { id: 'action-02', label: 'Pay Bills', icon: 'Pay' },
  { id: 'action-03', label: 'Deposit Check', icon: 'Deposit' },
  { id: 'action-04', label: 'Exchange Crypto', icon: 'Exchange' },
];
