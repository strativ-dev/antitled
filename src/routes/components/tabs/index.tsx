import { createFileRoute } from '@tanstack/react-router';

import TabsPage from '@/app/components/tabs';

export const Route = createFileRoute('/components/tabs/')({
  component: TabsPage,
});
