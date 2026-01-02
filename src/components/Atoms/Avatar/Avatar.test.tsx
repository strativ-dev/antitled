import { createElement } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { getSize } from './helpers';
import { Avatar } from './index';
import type { AvatarSize } from './types';
import { renderWithProviders, screen } from '@/tests/test-utils';

vi.mock('antd', async () => {
  const actual = await vi.importActual<typeof import('antd')>('antd');
  const React = await vi.importActual<typeof import('react')>('react');

  const AvatarComponent = ({ size, children, ...rest }: any) => {
    const { ['data-testid']: dataTestId = 'antd-avatar', ...otherProps } = rest;
    return React.createElement(
      'div',
      { 'data-testid': dataTestId, 'data-size': size, ...otherProps },
      children
    );
  };

  const AvatarGroupComponent = ({ size, children, ...rest }: any) => {
    const { ['data-testid']: dataTestId = 'antd-avatar-group', ...otherProps } =
      rest;
    return React.createElement(
      'div',
      { 'data-testid': dataTestId, 'data-size': size, ...otherProps },
      children
    );
  };

  AvatarComponent.Group = AvatarGroupComponent;

  return { ...actual, Avatar: AvatarComponent };
});

vi.mock('@/components/Atoms/Avatar/StatusDot', () => {
  return {
    __esModule: true,
    default: ({ status, size }: { status: string; size?: number }) =>
      createElement('div', {
        'data-testid': 'status-dot',
        'data-status': status,
        'data-size': size,
      }),
  };
});

type SizeAwareChildProps = {
  label: string;
  size?: AvatarSize;
};

const SizeAwareChild = ({ label, size }: SizeAwareChildProps) => (
  <span data-testid={`child-${label}`}>{size}</span>
);

describe('Avatar', () => {
  it('renders children and forwards computed size to Ant Design Avatar', () => {
    renderWithProviders(<Avatar size='lg'>AB</Avatar>);

    expect(screen.getByText('AB')).toBeInTheDocument();
    expect(screen.getByTestId('antd-avatar')).toHaveAttribute(
      'data-size',
      String(getSize('lg'))
    );
  });

  it('renders a custom status icon and skips the status dot when statusIcon is provided', () => {
    renderWithProviders(
      <Avatar
        status='online'
        statusIcon={<span data-testid='custom-status-icon'>*</span>}>
        JD
      </Avatar>
    );

    expect(screen.getByTestId('custom-status-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('status-dot')).not.toBeInTheDocument();
  });

  it('renders the status dot with the computed size when status is provided', () => {
    renderWithProviders(
      <Avatar size='md' status='away'>
        MT
      </Avatar>
    );

    const statusDot = screen.getByTestId('status-dot');
    expect(statusDot).toHaveAttribute('data-status', 'away');
    expect(statusDot).toHaveAttribute('data-size', String(getSize('md') / 3));
  });

  it('passes the requested size to Avatar.Group and its children', () => {
    renderWithProviders(
      <Avatar.Group size='xl' data-testid='avatar-group'>
        <SizeAwareChild label='one' />
        <SizeAwareChild label='two' />
      </Avatar.Group>
    );

    expect(screen.getByTestId('avatar-group')).toHaveAttribute(
      'data-size',
      String(getSize('xl'))
    );
    expect(screen.getByTestId('child-one')).toHaveTextContent('xl');
    expect(screen.getByTestId('child-two')).toHaveTextContent('xl');
  });
});

// add snapshot tests for Avatar
describe('Avatar snapshots', () => {
  it('matches snapshot for default Avatar', () => {
    const { container } = renderWithProviders(<Avatar>AB</Avatar>);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot for Avatar with status dot', () => {
    const { container } = renderWithProviders(
      <Avatar size='md' status='online'>
        CD
      </Avatar>
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot for Avatar with custom status icon', () => {
    const { container } = renderWithProviders(
      <Avatar size='lg' statusIcon={<span data-testid='custom-icon'>!</span>}>
        EF
      </Avatar>
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot for Avatar.Group with children', () => {
    const { container } = renderWithProviders(
      <Avatar.Group size='sm'>
        <Avatar>GH</Avatar>
        <Avatar status='away'>IJ</Avatar>
      </Avatar.Group>
    );
    expect(container).toMatchSnapshot();
  });
});
