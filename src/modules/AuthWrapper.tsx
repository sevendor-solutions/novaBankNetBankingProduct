import type { ReactNode } from 'react';

interface AuthWrapperProps {
  isAuthenticated: boolean;
  children: ReactNode;
  fallback: ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ isAuthenticated, children, fallback }) => {
  return <>{isAuthenticated ? children : fallback}</>;
};
