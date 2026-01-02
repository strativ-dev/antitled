import { render } from '@testing-library/react';
import { act } from 'react';

import App from './App';

describe('App', () => {
  it('renders the App component', async () => {
    let container: HTMLElement | null = null;

    await act(async () => {
      const rendered = render(<App />);
      container = rendered.container;
    });

    if (!container) {
      throw new Error('App container was not rendered');
    }

    expect(container).toBeInTheDocument();
  });
});
