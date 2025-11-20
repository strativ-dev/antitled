import { createFileRoute } from '@tanstack/react-router';

import Sliders from '@/app/components/slider';

export const Route = createFileRoute('/components/slider/')({
  component: Sliders,
});
