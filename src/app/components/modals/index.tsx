import { CheckCircle, Flag05, Trash01 } from '@untitledui/icons';
import { Flex } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import { Button, Modal } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Molecules/ComponentPageTitle';
import ModalTitle from '@/components/Molecules/Modals/ModalTitle';

export default function ModalsPage() {
  const [open, setOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openDestructiveModal, setOpenDestructiveModal] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onOpenConfirm = () => {
    setOpenConfirmModal(true);
  };
  const onOpenDestructive = () => {
    setOpenDestructiveModal(true);
  };

  const onCloseConfirm = () => {
    setOpenConfirmModal(false);
  };

  const onCloseDestructive = () => {
    setOpenDestructiveModal(false);
  };

  return (
    <>
      <ComponentPageTitle title='Modals' />
      <Flex vertical align='center' justify='center' gap={24}>
        <Button onClick={onOpen}>Default Modal</Button>
        <Button color='info' onClick={onOpenConfirm}>
          Confirm Modal
        </Button>
        <Button color='destructive' onClick={onOpenDestructive}>
          Destructive Modal
        </Button>
      </Flex>
      <Modal
        title={
          <ModalTitle
            title='Add Experience'
            subtitle='Share where you’ve worked on your profile.'
            icon={
              <StyledIconContainer>
                <Flag05 size={24} />
              </StyledIconContainer>
            }
          />
        }
        open={open}
        onCancel={onClose}
        onOk={onClose}
        bordered>
        <div>This is the modal content.</div>
      </Modal>
      <Modal
        title={
          <ModalTitle
            title=''
            icon={
              <StyledIconContainer>
                <CheckCircle size={24} />
              </StyledIconContainer>
            }
          />
        }
        open={openConfirmModal}
        onCancel={onCloseConfirm}
        onOk={onCloseConfirm}
        width={400}
        okButtonProps={{ block: true }}
        cancelButtonProps={{ block: true }}>
        <div>Are you sure you want to proceed with this action?</div>
      </Modal>
      <Modal
        title={
          <ModalTitle
            title=''
            icon={
              <StyledIconContainer>
                <Trash01 color='red' size={24} />
              </StyledIconContainer>
            }
          />
        }
        open={openDestructiveModal}
        onCancel={onCloseDestructive}
        onOk={onCloseDestructive}
        width={400}
        okButtonProps={{ block: true, color: 'destructive' }}
        cancelButtonProps={{ block: true }}>
        <div>
          This action cannot be undone. Are you sure you want to proceed?
        </div>
      </Modal>
    </>
  );
}

const StyledIconContainer = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors.backgrounds.bgPrimary};
  border: 2px solid ${({ theme }) => theme.colors.borders.borderPrimary};
`;
