import { createFileRoute, redirect } from '@tanstack/react-router';

import Login from '@/app/authentication/login';

export const Route = createFileRoute('/_public/login')({
  beforeLoad: ({
    context: {
      auth: { isAuthenticated },
    },
  }) => {
    if (!isAuthenticated) return;
    throw redirect({ to: '/dashboard' });
  },
  component: Login,
});
