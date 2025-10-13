import { createFileRoute } from '@tanstack/react-router';

import Buttons from '@/components/Buttons';

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Buttons />
    </div>
  );
}
