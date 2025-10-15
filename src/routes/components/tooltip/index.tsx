import { createFileRoute } from '@tanstack/react-router';

import Tooltips from '@/app/components/tooltips';

export const Route = createFileRoute('/components/tooltip/')({
  component: Tooltips,
});
