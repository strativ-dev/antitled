import { Dropdown as AntDropdown } from 'antd';
import { ComponentProps, ReactNode } from 'react';
import styled from 'styled-components';

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

// eslint-disable-next-line react-refresh/only-export-components
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

// eslint-disable-next-line react-refresh/only-export-components
function DropdownButtonBase(props: DropdownButtonProps) {
  const { popupRender, ...rest } = props;

  return (
    <>
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
