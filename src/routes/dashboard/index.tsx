import { createFileRoute } from '@tanstack/react-router';

import { Text } from '@/components/Atoms';

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Text variant='display-sm-medium' as='h1'>
        Dashboard
      </Text>
    </div>
  );
}
