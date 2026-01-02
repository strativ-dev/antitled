import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = () =>
    ({
      matches: false,
      media: 'all',
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
