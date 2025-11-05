import { createFileRoute } from '@tanstack/react-router';

import PaginationPage from '@/app/components/paginations';

export const Route = createFileRoute('/components/paginations/')({
  component: PaginationPage,
});
