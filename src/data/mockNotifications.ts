import type { NotificationItem } from '../types';

export const NOTIFICATIONS: NotificationItem[] = [
  { id: 'note-01', title: 'Salary Credited', message: '₹85,000 has been credited to your savings account.', time: 'Today · 09:30 AM', unread: true },
  { id: 'note-02', title: 'EMI Debited', message: 'Home loan EMI of ₹24,500 has been debited.', time: 'Yesterday · 06:15 PM', unread: true },
  { id: 'note-03', title: 'Bill Payment Successful', message: 'Electricity bill payment of ₹1,850 completed.', time: 'Yesterday · 03:20 PM', unread: false },
  { id: 'note-04', title: 'UPI Payment Successful', message: 'UPI transfer of ₹5,000 completed to Priya Sharma.', time: '2 days ago · 11:05 AM', unread: false },
  { id: 'note-05', title: 'FD Maturity Reminder', message: 'Your FD is maturing on 15-Apr-2028. Review rollover options.', time: '3 days ago · 02:00 PM', unread: false },
];
