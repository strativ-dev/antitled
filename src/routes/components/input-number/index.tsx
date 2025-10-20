import { createFileRoute } from '@tanstack/react-router';

import InputNumberPage from '@/app/components/input-number';

export const Route = createFileRoute('/components/input-number/')({
  component: InputNumberPage,
});
