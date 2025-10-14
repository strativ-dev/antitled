import SimpleBar from 'simplebar-react';
import styled from 'styled-components';

export const StyledSimpleBar = styled(SimpleBar)`
  .simplebar-scrollbar::before {
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.3)'
        : 'rgba(0, 0, 0, 0.3)'};
  }

  .simplebar-scrollbar:hover::before {
    opacity: 1;
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.5)'
        : 'rgba(0, 0, 0, 0.5)'};
  }

  .simplebar-track {
    background-color: transparent;
  }

  /* Custom track styling */
  .simplebar-track.simplebar-vertical {
    width: 10px;
    right: 0;
  }

  .simplebar-track.simplebar-horizontal {
    height: 10px;
    bottom: 0;
  }
`;
