import { createFileRoute } from '@tanstack/react-router';

import InputCopyTextPage from '@/app/components/input-copy-text';

export const Route = createFileRoute('/components/input-copy-text/')({
  component: InputCopyTextPage,
});
