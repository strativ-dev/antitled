import { createFileRoute } from '@tanstack/react-router';

import Checkboxes from '@/app/components/checkbox';

export const Route = createFileRoute('/components/checkbox/')({
  component: Checkboxes,
});
