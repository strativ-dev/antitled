import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import React from 'react';

const ConfirmModalDemo: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  const showConfirm = () => {
    modal.confirm({
      title: 'Confirm This?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions.',
      width: 230,
      centered: true,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={showConfirm}>Confirm</Button>
      </Space>
    </>
  );
};

export default ConfirmModalDemo;
