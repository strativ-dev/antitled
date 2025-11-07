import { createFileRoute } from '@tanstack/react-router';

import AvatarPage from '@/app/components/avatar';

export const Route = createFileRoute('/components/avatar/')({
  component: AvatarPage,
});
