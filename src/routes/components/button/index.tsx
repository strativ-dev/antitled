import { createFileRoute } from '@tanstack/react-router';

import Buttons from '@/app/components/button';

export const Route = createFileRoute('/components/button/')({
  component: Buttons,
});
