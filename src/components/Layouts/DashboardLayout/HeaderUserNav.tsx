import { MenuProps } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { createInitials } from '@/lib/utils/helpers';
import { useLogoutMutation } from '@/services/authentication.service';
import useAuthStore from '@/stores/useAuthStore';

import { Avatar, Dropdown, Text } from '@/components/Atoms';

export const HeaderUserNav = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'common',
  });

  const user = useAuthStore((state) => state.user);

  const logout = useLogoutMutation();

  const menuItems: MenuProps = useMemo(() => {
    return {
      items: [
        {
          key: 'profile',
          label: user?.name,
          disabled: true,
        },
        {
          key: 'logout',
          label: t('logout'),
          onClick: logout,
        },
      ],
    };
  }, [logout, t, user?.name]);

  return (
    <Dropdown menu={menuItems} trigger={['click']}>
      <Avatar src={user?.avatar} style={{ cursor: 'pointer' }}>
        <Text color='textQuaternary500'>{createInitials('User Name')}</Text>
      </Avatar>
    </Dropdown>
  );
};
