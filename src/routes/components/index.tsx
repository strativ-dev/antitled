import { createFileRoute } from '@tanstack/react-router';

import ComponentsPage from '@/app/components';

export const Route = createFileRoute('/components/')({
  component: ComponentsPage,
});
