import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { BankLayout } from '../layouts/BankLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { OTPPage } from '../pages/OTPPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AccountsPage } from '../pages/AccountsPage';
import { TransactionsPage } from '../pages/TransactionsPage';
import { TransferPage } from '../pages/TransferPage';
import { BeneficiariesPage } from '../pages/BeneficiariesPage';
import { CardsPage } from '../pages/CardsPage';
import { LoansPage } from '../pages/LoansPage';
import { DepositsPage } from '../pages/DepositsPage';
import { InvestmentsPage } from '../pages/InvestmentsPage';
import { BillsPage } from '../pages/BillsPage';
import { RechargePage } from '../pages/RechargePage';
import { RewardsPage } from '../pages/RewardsPage';
import { NotificationsPage } from '../pages/NotificationsPage';
import { ProfilePage } from '../pages/ProfilePage';
import { SupportPage } from '../pages/SupportPage';
import { SettingsPage } from '../pages/SettingsPage';
import { AdminAnalyticsPage } from '../pages/AdminAnalyticsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<OTPPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<BankLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/beneficiaries" element={<BeneficiariesPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/deposits" element={<DepositsPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/recharge" element={<RechargePage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/admin-analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
