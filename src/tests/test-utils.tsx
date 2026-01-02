import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';

import ThemeProviderWrapper from '@/components/Providers/ThemeProviderWrapper';

const AllProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
);

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { wrapper: AllProviders, ...options });
};

export * from '@testing-library/react';
