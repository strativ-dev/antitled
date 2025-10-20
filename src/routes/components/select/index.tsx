import { createFileRoute } from '@tanstack/react-router';

import SelectPage from '@/app/components/select';

export const Route = createFileRoute('/components/select/')({
  component: SelectPage,
});
