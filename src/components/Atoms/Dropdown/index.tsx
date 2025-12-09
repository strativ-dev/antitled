import { Dropdown as AntDropdown } from 'antd';
import { ComponentProps, ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

type AntDropdownProps = ComponentProps<typeof AntDropdown>;
type AntDropdownButtonProps = ComponentProps<typeof AntDropdown.Button>;

export type DropdownProps = Omit<AntDropdownProps, 'dropdownRender'> & {
  className?: string;
  children: ReactNode;
  popupRender?: (originNode: ReactNode) => ReactNode;
};

export type DropdownButtonProps = Omit<
  AntDropdownButtonProps,
  'dropdownRender'
> & {
  popupRender?: (originNode: ReactNode) => ReactNode;
};

function DropdownBase(props: DropdownProps) {
  const {
    className,
    placement = 'bottomLeft',
    trigger = ['click'],
    popupRender,
    children,
    ...rest
  } = props;

  return (
    <DropdownWrapper className={className}>
      <AntDropdown
        {...rest}
        placement={placement}
        trigger={trigger}
        popupRender={(menu) => (
          <StyledMenuWrapper>
            {popupRender ? popupRender(menu) : menu}
          </StyledMenuWrapper>
        )}>
        {children}
      </AntDropdown>
    </DropdownWrapper>
  );
}

function DropdownButtonBase(props: DropdownButtonProps) {
  const { popupRender, ...rest } = props;

  return (
    <>
      <GlobalDropdownStyles />
      <AntDropdown.Button
        {...rest}
        popupRender={(menu) => (popupRender ? popupRender(menu) : menu)}
      />
    </>
  );
}

interface DropdownComponent extends React.FC<DropdownProps> {
  Button: React.FC<DropdownButtonProps>;
}

export const Dropdown = Object.assign(DropdownBase, {
  Button: DropdownButtonBase,
}) as DropdownComponent;

Dropdown.displayName = 'Dropdown';
DropdownButtonBase.displayName = 'Dropdown.Button';

const DropdownWrapper = styled.div`
  display: inline-block;
`;

const StyledMenuWrapper = styled.div`
  .ant-dropdown-menu {
    padding: 0.75rem !important;
  }
`;

const GlobalDropdownStyles = createGlobalStyle`
  .ant-dropdown {
    .ant-dropdown-menu {
      background-color: ${({ theme }) => theme.colors.backgrounds.bgPrimary};
      border: ${({ theme }) => (theme.mode === 'light' ? 'none' : '1px solid')};
      border-color: ${({ theme }) => theme.colors.borders.borderTertiary};
      box-shadow:
        0px 1px 2px 0px ${({ theme }) => theme.colors['effects']['shadowXs']},
        0px -2px 0px 0px ${({ theme }) =>
          theme.colors['effects']['shadowSkeumorphicInner']} inset,
        0px 0px 0px 1px
          ${({ theme }) =>
            theme.colors['effects']['shadowSkeumorphicInnerBorder']}
          inset;
    }
  }
`;
