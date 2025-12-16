import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext } from '@tanstack/react-router';
import 'simplebar-react/dist/simplebar.min.css';

import NotFound from '@/app/not-found';
import { AuthStoreType } from '@/stores/useAuthStore';

import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback';
import RootLayout from '@/components/Layouts/RootLayout';

type RouterContext = {
  auth: AuthStoreType & { isAuthenticated: boolean };
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFound,
  errorComponent: ({ error, reset }) => (
    <ErrorFallback error={error} resetErrorBoundary={reset} />
  ),
  onError: (error) => {
    // Log error to your error tracking service
    console.error('Router Error:', error);
    // You can integrate with services like Sentry here
    // Sentry.captureException(error);
  },
});
