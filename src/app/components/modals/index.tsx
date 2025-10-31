import { CheckCircle, Flag05, Trash01 } from '@untitledui/icons';
import { Flex } from 'antd';
import { useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { Button, Modal, Text } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Molecules/ComponentPageTitle';
import ModalTitle from '@/components/Molecules/Modals/ModalTitle';

export default function ModalsPage() {
  const [open, setOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openDestructiveModal, setOpenDestructiveModal] = useState(false);

  const { colors } = useTheme();
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
        <>
          <Text size='display-lg'>Modal Content</Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here. Additional
            information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
          <Text size='text-lg' color='textTertiary600'>
            Additional information about the modal can go here.
          </Text>
        </>
      </Modal>
      <Modal
        title={
          <ModalTitle
            title=''
            icon={
              <StyledIconContainer>
                <CheckCircle
                  size={24}
                  color={colors.foregrounds.fgSecondary700}
                />
              </StyledIconContainer>
            }
          />
        }
        open={openConfirmModal}
        onCancel={onCloseConfirm}
        onOk={onCloseConfirm}
        width={420}
        okButtonProps={{ block: true }}
        cancelButtonProps={{ block: true }}>
        <Text weight='semibold'>Blog post published</Text>

        <Text color='textTertiary600' size='text-sm'>
          This blog post has been published. Team members will be able to edit
          this post and republish changes.
        </Text>
      </Modal>
      <Modal
        title={
          <ModalTitle
            title=''
            icon={
              <StyledIconContainer>
                <Trash01 color={colors.foregrounds.fgErrorPrimary} size={24} />
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
        <Text weight='semibold'>Delete blog post</Text>
        <Text color='textTertiary600' size='text-sm'>
          Are you sure you want to delete this post? This action cannot be
          undone.
        </Text>
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
  border-radius: ${({ theme }) => theme.radius.lg}px;
  background-color: ${({ theme }) => theme.colors.backgrounds.bgPrimary};
  border: 2px solid ${({ theme }) => theme.colors.borders.borderPrimary};
`;
