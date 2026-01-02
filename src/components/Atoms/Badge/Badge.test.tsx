import { describe, expect, it, vi } from 'vitest';

import { Badge } from './index';
import { renderWithProviders, screen } from '@/tests/test-utils';

vi.mock('antd', async () => {
  const actual = await vi.importActual<typeof import('antd')>('antd');

  const TagComponent = ({ icon, children, className, ...rest }: any) => (
    <div data-testid='antd-tag' className={className} {...rest}>
      {icon ? <span data-testid='tag-icon'>{icon}</span> : null}
      {children}
    </div>
  );

  return { ...actual, Tag: TagComponent };
});

describe('Badge', () => {
  it('applies the size-prefixed class when a size is provided', () => {
    renderWithProviders(<Badge size='sm'>Label</Badge>);

    const tag = screen.getByTestId('antd-tag');
    expect(tag).toHaveClass('ant-tag-sm');
    expect(tag).toHaveTextContent('Label');
  });

  it('renders the provided icon even when no label is supplied', () => {
    renderWithProviders(
      <Badge icon={<span data-testid='sample-icon'>I</span>} color='brand' />
    );

    expect(screen.getByTestId('tag-icon')).toBeInTheDocument();
    expect(screen.getByTestId('sample-icon')).toBeInTheDocument();
    expect(screen.getByTestId('antd-tag')).toHaveTextContent('I');
  });
});

describe('Badge snapshots', () => {
  it('matches snapshot for the default solid badge', () => {
    renderWithProviders(<Badge color='brand'>Active</Badge>);

    const tag = screen.getByTestId('antd-tag');
    const wrapper = tag.parentElement;
    console.log({ tag });
    expect({
      sizeClassApplied: tag.className.includes('ant-tag-md'),
      hasStyledWrapper: Boolean(wrapper?.className),
      iconPresent: Boolean(screen.queryByTestId('tag-icon')),
      textContent: tag.textContent,
    }).toMatchSnapshot(`
      {
        "hasStyledWrapper": true,
        "iconPresent": false,
        "sizeClassApplied": true,
        "textContent": "Active",
      }
    `);
  });

  it('matches snapshot for an outlined badge with icon and label', () => {
    const { container } = renderWithProviders(
      <Badge
        size='lg'
        color='success'
        variant='outlined'
        icon={<span data-testid='outlined-icon'>+</span>}>
        Synced
      </Badge>
    );

    expect(container).toMatchSnapshot();
  });
});
