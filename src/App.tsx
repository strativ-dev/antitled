import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import ConfigurationsProvider from './components/Providers/ConfigurationsProvider';
import ThemeProviderWrapper from './components/Providers/ThemeProviderWrapper';
import { routeTree } from './routeTree.gen';
import i18n from '@/lib/translation/i18n';
import useAuthStore from '@/stores/useAuthStore';

import { Spin } from '@/components/Atoms/Spin';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined!,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const authStore = useAuthStore();
  // explicitly convert to boolean for easier and direct access to check if user is authenticated
  const isAuthenticated = authStore.user ? true : true; // until auth is implemented, set to true

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ThemeProviderWrapper>
          <ErrorBoundary>
            <ConfigurationsProvider
              loading={<Spin type='window-centre' size='large' />}>
              <Suspense fallback={<Spin type='window-centre' size='large' />}>
                <RouterProvider
                  router={router}
                  context={{ auth: { ...authStore, isAuthenticated } }}
                />
              </Suspense>
            </ConfigurationsProvider>
          </ErrorBoundary>
        </ThemeProviderWrapper>
      </QueryClientProvider>
    </I18nextProvider>
  );
}

export default App;
