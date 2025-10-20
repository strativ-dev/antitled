import { createFileRoute } from '@tanstack/react-router';

import Inputs from '@/app/components/inputs';

export const Route = createFileRoute('/components/input/')({
  component: Inputs,
});
