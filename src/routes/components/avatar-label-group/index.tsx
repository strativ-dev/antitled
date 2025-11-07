import { createFileRoute } from '@tanstack/react-router';

import AvatarLabelGroupPage from '@/app/components/avatar-label-group';

export const Route = createFileRoute('/components/avatar-label-group/')({
  component: AvatarLabelGroupPage,
});
