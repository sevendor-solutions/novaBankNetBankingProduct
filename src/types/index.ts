export type ThemeMode = 'light' | 'dark';

export type TransactionType = 'Credit' | 'Debit' | 'UPI' | 'NEFT' | 'IMPS' | 'RTGS';
export type TransactionStatus = 'Success' | 'Pending' | 'Failed';

export interface BankUser {
  id: string;
  customerId: string;
  fullName: string;
  email: string;
  phone: string;
  branch: string;
  pan: string;
  aadhaar: string;
  address: string;
  password: string;
  avatar?: string;
}

export interface AccountSummary {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  accent: 'blue' | 'cyan' | 'indigo' | 'emerald' | 'rose';
}

export interface AccountRecord {
  id: string;
  type: 'Savings' | 'Current' | 'Fixed Deposit';
  title: string;
  number: string;
  balance: number;
  ifsc: string;
  branch: string;
  interestRate?: string;
  maturityDate?: string;
}

export interface TransactionRecord {
  id: string;
  date: string;
  description: string;
  category: string;
  type: TransactionType;
  amount: number;
  status: TransactionStatus;
}

export interface Beneficiary {
  id: string;
  name: string;
  bank: string;
  accountNumber: string;
  ifsc: string;
  nickname: string;
}

export interface BankCard {
  id: string;
  type: 'Debit' | 'Credit';
  brand: string;
  maskedNumber: string;
  holder: string;
  expiry: string;
  limit?: number;
  available?: number;
  status: 'Active' | 'Frozen';
}

export interface LoanRecord {
  id: string;
  title: string;
  loanNumber: string;
  amount: number;
  outstanding: number;
  emi: number;
  status: string;
}

export interface DepositRecord {
  id: string;
  title: string;
  accountNumber: string;
  amount: number;
  interestRate: string;
  maturityDate: string;
  valueAtMaturity?: string;
}

export interface InvestmentRecord {
  id: string;
  category: string;
  invested: number;
  currentValue: number;
  returns: number;
}

export interface RewardRecord {
  id: string;
  title: string;
  earned: number;
  redeemed: number;
  available: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

export interface SupportTicket {
  id: string;
  subject: string;
  status: 'Resolved' | 'In Progress' | 'Open';
  updated: string;
}

export interface ChartPoint {
  label: string;
  value: number;
}

export interface AuthContextType {
  session: BankUser | null;
  theme: ThemeMode;
  isAuthenticated: boolean;
  login: (customerId: string, password: string) => LoginResult;
  logout: () => void;
  toggleTheme: () => void;
}

export interface LoginResult {
  ok: boolean;
  message?: string;
}

export interface UserSession {
  id: string;
  fullName: string;
  email: string;
  role?: string;
  accountType?: string;
}

export interface ActionItem {
  id: string;
  label: string;
  icon: 'Transfer' | 'Pay' | 'Deposit' | 'Exchange';
}

export interface SummaryMetric {
  id: string;
  title: string;
  value: string;
  trend: string;
  trendLabel: string;
  accent: string;
}

export interface CreditCard {
  id: string;
  provider: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  isFrozen: boolean;
}

export interface BudgetCategory {
  id: string;
  title: string;
  spent: number;
  limit: number;
}

export interface SavingsVault {
  id: string;
  title: string;
  current: number;
  goal: number;
}

export interface Transaction {
  id: string;
  title: string;
  merchantName: string;
  category: string;
  type: 'Income' | 'Expense';
  amount: string;
  date: string;
  status: 'Success' | 'Pending' | 'Failed';
}

export interface SecuritySettings {
  dailyAtmLimit: number;
  freezeCard: boolean;
  allowInternational: boolean;
}
