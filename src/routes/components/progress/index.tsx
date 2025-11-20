import { createFileRoute } from '@tanstack/react-router';

import ProgressBars from '@/app/components/progress';

export const Route = createFileRoute('/components/progress/')({
  component: ProgressBars,
});
