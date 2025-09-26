import { ComponentType } from 'react';
import { AccessProvider } from 'react-access-boundary-v2';

import useAuthStore from '@/stores/useAuthStore';

export const withAuth = <T extends object>(
  WrappedComponent: ComponentType<T>
) => {
  return (props: T) => {
    const permissions = useAuthStore((state) => state.permissions);

    return (
      <AccessProvider permissions={permissions}>
        <WrappedComponent {...props} />
      </AccessProvider>
    );
  };
};
