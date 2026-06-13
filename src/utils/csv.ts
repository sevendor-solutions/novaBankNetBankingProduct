import type { TransactionRecord } from '../types';

export function exportTransactionsAsCsv(transactions: TransactionRecord[]) {
  const headers = ['Transaction ID', 'Date', 'Description', 'Category', 'Type', 'Amount', 'Status'];
  const rows = transactions.map((txn) => [txn.id, txn.date, txn.description, txn.category, txn.type, txn.amount.toString(), txn.status]);
  const csvContent = [headers, ...rows].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'transactions.csv';
  anchor.click();
  URL.revokeObjectURL(url);
}
