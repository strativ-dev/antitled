import { createFileRoute } from '@tanstack/react-router';

import SelectableCards from '@/app/components/selectable-card';

export const Route = createFileRoute('/components/selectable-card/')({
  component: SelectableCards,
});
