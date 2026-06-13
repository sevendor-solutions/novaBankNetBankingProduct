import React from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  variant: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, variant, onClose }) => {
  const variantClasses = {
    success: 'from-emerald-500 to-cyan-500 text-white',
    error: 'from-rose-500 to-pink-500 text-white',
    info: 'from-slate-700 to-slate-900 text-white',
  };

  return (
    <div className={`fixed right-6 top-6 z-50 rounded-3xl bg-gradient-to-r ${variantClasses[variant]} p-4 shadow-2xl shadow-slate-950/20 ring-1 ring-white/10`}>
      <div className="flex items-start gap-3">
        <div className="flex-1 text-sm font-semibold">{message}</div>
        <button onClick={onClose} className="rounded-full p-2 text-white/90 transition hover:bg-white/10">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
