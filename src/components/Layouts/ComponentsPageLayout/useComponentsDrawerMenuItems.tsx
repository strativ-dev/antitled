import { Link } from '@tanstack/react-router';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import useAuthStore from '@/stores/useAuthStore';

const sortMenuItems = (
  items: Array<{
    key: string;
    path: string;
    i18nKey?: string;
    label?: string;
  }>,
  translate: (k?: string) => string
) => {
  return items
    .map((it) => ({
      ...it,
      display: it.label ?? translate(it.i18nKey),
    }))
    .sort((a, b) =>
      a.display.localeCompare(b.display, undefined, { sensitivity: 'base' })
    )
    .map((it) => ({
      key: it.key,
      label: (
        <Link to={it.path}>
          {it.i18nKey ? translate(it.i18nKey) : it.label}
        </Link>
      ),
    }));
};

export const useComponentsDrawerMenuItems = (collapsed: boolean) => {
  const { t } = useTranslation();
  const { user } = useAuthStore();
  const translate = (k?: string) =>
    k ? (t as (key: string) => string)(k) : '';

  const menuItems = useMemo(() => {
    const atomsChildrenData: Array<{
      key: string;
      path: string;
      i18nKey?: string;
      label?: string;
    }> = [
      { key: 'button', path: '/components/button', i18nKey: 'common.Button' },
      {
        key: 'button-group',
        path: '/components/button-group',
        i18nKey: 'common.button_group',
      },
      { key: 'text', path: '/components/text', i18nKey: 'common.Text' },
      { key: 'input', path: '/components/input', i18nKey: 'common.Input' },
      {
        key: 'input-number',
        path: '/components/input-number',
        i18nKey: 'common.Input Number',
      },
      { key: 'select', path: '/components/select', i18nKey: 'common.Select' },
      {
        key: 'dropdown',
        path: '/components/dropdown',
        i18nKey: 'common.Dropdown',
      },
      { key: 'modals', path: '/components/modals', i18nKey: 'common.Modal' },
      { key: 'badge', path: '/components/badge', i18nKey: 'common.Badge' },
      {
        key: 'checkbox',
        path: '/components/checkbox',
        i18nKey: 'common.Checkbox',
      },
      { key: 'toggle', path: '/components/toggle', i18nKey: 'common.Toggle' },
      { key: 'slider', path: '/components/slider', i18nKey: 'common.Slider' },
      {
        key: 'progress',
        path: '/components/progress',
        i18nKey: 'common.Progress',
      },
      {
        key: 'tooltip',
        path: '/components/tooltip',
        i18nKey: 'common.Tooltip',
      },
      { key: 'tabs', path: '/components/tabs', i18nKey: 'common.Tabs' },
      {
        key: 'paginations',
        path: '/components/paginations',
        i18nKey: 'common.Pagination',
      },
      { key: 'table', path: '/components/table', i18nKey: 'common.Table' },
      {
        key: 'radio-card',
        path: '/components/radio-card',
        i18nKey: 'common.Radio_card',
      },
      {
        key: 'selectable-card ',
        path: '/components/selectable-card',
        i18nKey: 'common.Selectable_card',
      },
      { key: 'avatar', path: '/components/avatar', i18nKey: 'common.Avatar' },
    ];

    const moleculesChildrenData: Array<{
      key: string;
      path: string;
      i18nKey?: string;
      label?: string;
    }> = [
      {
        key: 'input-copy-text',
        path: '/components/input-copy-text',
        i18nKey: 'common.Input Copy Text',
      },
      {
        key: 'input-phone-number',
        path: '/components/input-phone-number',
        i18nKey: 'common.Input Phone Number',
      },
      {
        key: 'avatar-label-group',
        path: '/components/avatar-label-group',
        label: 'Avatar Label Group',
      },
    ];

    const items: ItemType<MenuItemType>[] = [
      {
        key: '',
        label: <Link to='/components'>{t('common.Component Overview')}</Link>,
      },
      {
        key: 'Atoms',
        label: 'Atoms',
        type: 'group',
        children: sortMenuItems(atomsChildrenData, translate),
      },
      {
        key: 'Molecules',
        label: 'Molecules',
        type: 'group',
        children: sortMenuItems(moleculesChildrenData, translate),
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
