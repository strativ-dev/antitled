import { createFileRoute } from '@tanstack/react-router';

import AntDesignDemo from '@/app/dashboard/home/antd-demos';

export const Route = createFileRoute('/dashboard/antd-demos')({
  component: RouteComponent,
});

function RouteComponent() {
  return <AntDesignDemo />;
}
