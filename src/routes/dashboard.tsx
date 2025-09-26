import { createFileRoute, redirect } from '@tanstack/react-router';

import DashboardLayout from '@/components/Layouts/DashboardLayout';

export const Route = createFileRoute('/dashboard')({
  beforeLoad: ({
    context: {
      auth: { isAuthenticated },
    },
  }) => {
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: DashboardLayout,
});
