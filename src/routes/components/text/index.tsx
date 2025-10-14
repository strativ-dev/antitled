import { createFileRoute } from '@tanstack/react-router';

import Texts from '@/app/components/texts';

export const Route = createFileRoute('/components/text/')({
  component: Texts,
});
