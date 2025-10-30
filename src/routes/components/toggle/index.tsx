import { createFileRoute } from '@tanstack/react-router';

import Toggles from '@/app/components/toggle';

export const Route = createFileRoute('/components/toggle/')({
  component: Toggles,
});
