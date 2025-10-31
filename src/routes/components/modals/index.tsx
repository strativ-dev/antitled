import { createFileRoute } from '@tanstack/react-router';

import ModalsPage from '@/app/components/modals';

export const Route = createFileRoute('/components/modals/')({
  component: ModalsPage,
});
