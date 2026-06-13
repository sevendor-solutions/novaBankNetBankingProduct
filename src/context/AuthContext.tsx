import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { BANK_USERS } from '../data/mockUsers';
import type { AuthContextType, BankUser, LoginResult, ThemeMode } from '../types';

const initialContext: AuthContextType = {
  session: null,
  theme: 'light',
  isAuthenticated: false,
  login: () => ({ ok: false, message: 'Unable to login' }),
  logout: () => {},
  toggleTheme: () => {},
};

const AuthContext = createContext<AuthContextType>(initialContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useLocalStorage<BankUser | null>('novabank-session', null);
  const [theme, setTheme] = useLocalStorage<ThemeMode>('novabank-theme', 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  const login = (customerId: string, password: string): LoginResult => {
    const user = BANK_USERS.find(
      (bankUser) => bankUser.customerId === customerId && bankUser.password === password,
    );

    if (!user) {
      return { ok: false, message: 'Invalid Customer ID or password. Please verify your credentials.' };
    }

    setSession(user);
    return { ok: true };
  };

  const logout = () => {
    setSession(null);
  };

  const toggleTheme = () => {
    setTheme((current: ThemeMode) => (current === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(
    () => ({
      session,
      theme,
      isAuthenticated: Boolean(session),
      login,
      logout,
      toggleTheme,
    }),
    [session, theme],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
