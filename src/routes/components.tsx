import { createFileRoute } from '@tanstack/react-router';

import ComponentsPageLayout from '@/components/Layouts/ComponentsPageLayout';

export const Route = createFileRoute('/components')({
  component: ComponentsPageLayout,
});
