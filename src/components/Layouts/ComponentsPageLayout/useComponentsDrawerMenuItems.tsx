import { Link } from '@tanstack/react-router';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import useAuthStore from '@/stores/useAuthStore';

export const useComponentsDrawerMenuItems = (collapsed: boolean) => {
  const { t } = useTranslation();
  const { user } = useAuthStore();

  const menuItems = useMemo(() => {
    const items: ItemType<MenuItemType>[] = [
      {
        key: '',
        label: <Link to='/components'>{t('common.Component Overview')}</Link>,
      },
      {
        key: 'general',
        label: <StyledGroupName>{t('common.General')}</StyledGroupName>,
        type: 'group',
        children: [
          {
            key: 'button',
            label: <Link to='/components/button'>{t('common.Button')}</Link>,
          },
          {
            key: 'text',
            label: <Link to='/components/text'>{t('common.Text')}</Link>,
          },
          {
            key: 'input',
            label: <Link to='/components/input'>{t('common.Input')}</Link>,
          },
          {
            key: 'input-number',
            label: (
              <Link to='/components/input-number'>
                {t('common.Input Number')}
              </Link>
            ),
          },
          {
            key: 'input-copy-text',
            label: (
              <Link to='/components/input-copy-text'>
                {t('common.Input Copy Text')}
              </Link>
            ),
          },
          {
            key: 'input-phone-number',
            label: (
              <Link to='/components/input-phone-number'>
                {t('common.Input Phone Number')}
              </Link>
            ),
          },
          {
            key: 'badge',
            label: <Link to='/components/badge'>{t('common.Badge')}</Link>,
          },
          {
            key: 'checkbox',
            label: (
              <Link to='/components/checkbox'>{t('common.Checkbox')}</Link>
            ),
          },
          {
            key: 'tooltip',
            label: <Link to='/components/tooltip'>{t('common.Tooltip')}</Link>,
          },
          {
            key: 'select',
            label: <Link to='/components/select'>{t('common.Select')}</Link>,
          },
        ],
      },
    ];

    return items;
  }, [collapsed, user, t]);

  const menuItemKeys = menuItems.reduce((acc, item) => {
    if (item && 'children' in item && item.children) {
      return [
        ...acc,
        ...item.children
          .filter(
            (child): child is ItemType<MenuItemType> & { key: string } =>
              !!child && 'key' in child
          )
          .map((child) => child.key),
      ];
    }
    return acc;
  }, [] as string[]);
  return {
    componentsMenuItem: menuItems,
    componentsMenuItemKeys: menuItemKeys,
  };
};

const StyledGroupName = styled.span`
  /* color: ${({ theme }) => theme.colors['texts']['textDisabled']}; */
`;
