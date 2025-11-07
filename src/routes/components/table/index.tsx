import { createFileRoute } from '@tanstack/react-router';

import TablePage from '@/app/components/table';

export const Route = createFileRoute('/components/table/')({
  component: TablePage,
});
