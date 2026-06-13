import { CircleDot, CreditCard, Globe2, ShieldCheck } from 'lucide-react';
import type { SecuritySettings } from '../types/index';
import { useMemo, useState } from 'react';

interface SecurityScreenProps {
  settings: SecuritySettings;
  onUpdateSettings: (settings: SecuritySettings) => void;
}

const SecurityScreen = ({ settings, onUpdateSettings }: SecurityScreenProps) => {
  const [virtualCard, setVirtualCard] = useState('');

  const limitLabel = useMemo(() => `$${settings.dailyAtmLimit.toLocaleString()} / day`, [settings.dailyAtmLimit]);

  const generateVirtualCard = () => {
    const digits = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
    const grouped = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    setVirtualCard(grouped);
  };

  return (
    <div className="space-y-8">
      <div className="glass-card p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Security hub</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50">Protect your money with active controls</h2>
          </div>
          <button
            type="button"
            onClick={generateVirtualCard}
            className="glass-button inline-flex items-center gap-2"
          >
            <CreditCard className="h-4 w-4" />
            Generate virtual card
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Hardware toggles</p>
          <div className="mt-6 space-y-5">
            {[
              { label: 'Freeze Card', value: settings.freezeCard, key: 'freezeCard', icon: ShieldCheck },
              { label: 'Contactless Payments', value: !settings.allowInternational, key: 'contactless', icon: CircleDot },
              { label: 'Allow International Charges', value: settings.allowInternational, key: 'allowInternational', icon: Globe2 },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-3xl bg-cyan-500/10 text-cyan-200">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-50">{item.label}</p>
                    <p className="text-sm text-slate-400">{item.key === 'contactless' ? 'Use local NFC payments only' : item.label}</p>
                  </div>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={item.key === 'freezeCard' ? item.value : item.key === 'allowInternational' ? item.value : !item.value}
                    onChange={() => {
                      if (item.key === 'freezeCard') {
                        onUpdateSettings({ ...settings, freezeCard: !settings.freezeCard });
                      }
                      if (item.key === 'allowInternational') {
                        onUpdateSettings({ ...settings, allowInternational: !settings.allowInternational });
                      }
                      if (item.key === 'contactless') {
                        onUpdateSettings({ ...settings, allowInternational: false });
                      }
                    }}
                    className="peer sr-only"
                  />
                  <div className="h-7 w-14 rounded-full border border-white/10 bg-white/5 transition peer-checked:bg-cyan-500/20"></div>
                  <div className="pointer-events-none absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-lg shadow-slate-950/20 transition peer-checked:translate-x-7 peer-checked:bg-cyan-300"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Spending limit</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-50">Daily ATM withdrawal</h3>
            </div>
            <span className="rounded-3xl bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-200">{limitLabel}</span>
          </div>
          <div className="mt-8 space-y-4">
            <input
              type="range"
              min={100}
              max={1500}
              step={50}
              value={settings.dailyAtmLimit}
              onChange={(event) => onUpdateSettings({ ...settings, dailyAtmLimit: Number(event.target.value) })}
              className="w-full accent-cyan-400"
            />
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
              <p className="font-semibold text-slate-50">Daily limit recommendation</p>
              <p className="mt-2 leading-6">Set a secure daily ATM withdrawal limit to protect your account from unauthorized cash access.</p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-inner shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Virtual card</p>
            <div className="mt-4 rounded-3xl bg-slate-900/80 p-5 text-slate-300">
              {virtualCard ? (
                <div className="space-y-4">
                  <p className="text-sm text-slate-400">Generated burnable card</p>
                  <p className="text-xl font-semibold text-slate-50">{virtualCard}</p>
                  <p className="text-sm text-slate-400">Use this number for one-time checkout and destroy it after payment.</p>
                </div>
              ) : (
                <p className="text-sm text-slate-400">Tap the button to mock-generate a secure temporary virtual card for online shopping.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityScreen;
