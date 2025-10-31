import { X } from '@untitledui/icons';
import { Modal as AntModal, ModalProps } from 'antd';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { CSSProperties } from 'styled-components';

import { Button, ButtonProps } from '../Button';

import { StyledSimpleBar } from '@/components/Atoms/StyledSimplebar';

type Props = Omit<
  ModalProps,
  'footer' | 'okButtonProps' | 'cancelButtonProps'
> & {
  maxContentHeight?: number;
  modalStyles?: CSSProperties;
  contentWidth?: number;
  bordered?: boolean;
  footer?: ReactNode | null;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  hideFooter?: boolean;
  hideOkButton?: boolean;
  hideCancelButton?: boolean;
};

export const Modal = ({
  maxContentHeight = 464,
  children,
  modalStyles,
  contentWidth,
  bordered = false,
  width = 688,
  footer,
  onOk,
  onCancel,
  okText,
  cancelText,
  okButtonProps,
  cancelButtonProps,
  hideFooter = false,
  hideOkButton = false,
  hideCancelButton = false,
  closeIcon,
  ...props
}: Props) => {
  const { t } = useTranslation();
  const _okText = okText !== undefined ? okText : t('common.Confirm');
  const _cancelText =
    cancelText !== undefined ? cancelText : t('common.Cancel');

  const customFooter = hideFooter
    ? null
    : footer !== undefined
      ? footer
      : [
          !hideCancelButton && (
            <Button
              key='cancel'
              variant='secondary'
              onClick={onCancel}
              {...cancelButtonProps}>
              {_cancelText}
            </Button>
          ),
          !hideOkButton && (
            <Button key='ok' onClick={onOk} {...okButtonProps}>
              {_okText}
            </Button>
          ),
        ].filter(Boolean);

  const _closeIcon = closeIcon !== undefined ? closeIcon : <X />;

  return (
    <>
      <StyledModal
        $modalStyles={modalStyles}
        $contentWidth={contentWidth}
        $maxContentHeight={maxContentHeight}
        $bordered={bordered}
        width={width}
        onOk={onOk}
        onCancel={onCancel}
        footer={customFooter}
        closeIcon={_closeIcon}
        {...props}>
        <StyledSimpleBar
          style={{
            maxHeight: maxContentHeight,
            paddingRight: 'var(--simplebar-padding-right)',
            paddingBlock: 'var(--simplebar-padding-block)',
          }}>
          {children}
        </StyledSimpleBar>
      </StyledModal>
    </>
  );
};

const StyledModal = styled(AntModal)<{
  $modalStyles?: CSSProperties;
  $contentWidth?: number;
  $maxContentHeight?: number;
  $bordered?: boolean;
}>`
  --simplebar-padding-right: 1.125rem;
  --simplebar-padding-block: ${({ $bordered }) =>
    $bordered ? '1.25' : '0'}rem;

  .ant-modal-content {
    border-radius: ${({ theme }) => theme.radius['2xl']}px;
    padding: 0;
  }

  .ant-modal-header {
    padding-inline: 1.5rem;
    padding-block: 1.5rem;
    border-bottom: ${({ $bordered, theme }) =>
      $bordered ? `1px solid ${theme.colors.borders.borderSecondary}` : 'none'};
    margin: 0;
    border-radius: 1rem 1rem 0 0;
    padding-bottom: ${({ $bordered }) => ($bordered ? '1.5rem' : '1rem')};
  }

  .ant-modal-title {
    padding-right: 1.5rem; // to accommodate close button
  }

  .ant-modal-body {
    padding-inline-start: 1.5rem;
    padding-inline-end: 0.375rem;
    color: ${({ theme }) => theme.colors.texts.textTertiary600};
  }

  .ant-modal-footer {
    margin: 0;
    padding-inline: 1.5rem;
    padding-top: ${({ $bordered }) => ($bordered ? '1.5rem' : '2rem')};
    padding-bottom: 1.5rem;
    display: flex;
    gap: 0.75rem;
    border-top: ${({ $bordered, theme }) =>
      $bordered ? `1px solid ${theme.colors.borders.borderSecondary}` : 'none'};
    border-radius: 0 0 1rem 1rem;
    justify-content: flex-end;
  }

  @media screen and (max-width: 768px) {
    --simplebar-padding-right: 0.625rem;
    --simplebar-padding-block: ${({ $bordered }) => ($bordered ? '1rem' : '0')};

    .ant-modal-header {
      padding-inline: 1rem;
      padding-block: 1rem;
      padding-top: 1.25rem;
    }

    .ant-modal-body {
      padding-inline-start: 1rem;
      padding-inline-end: 0.375rem;
    }

    .ant-modal-footer {
      padding-inline: 1rem;
      padding-top: ${({ $bordered }) => ($bordered ? '1rem' : '1.5rem')};
      padding-bottom: 1rem;
    }
  }
`;
