import { createFileRoute } from '@tanstack/react-router';

import Badges from '@/app/components/badge';

export const Route = createFileRoute('/components/badge/')({
  component: Badges,
});
