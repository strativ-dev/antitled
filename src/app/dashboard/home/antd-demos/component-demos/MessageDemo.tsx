import { Button, message } from 'antd';
import React from 'react';

type MessageType = 'success' | 'error' | 'warning';

interface MessageButtonProps {
  type: MessageType;
  content: string;
}

const MessageButton: React.FC<MessageButtonProps> = ({ type, content }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = () => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={showMessage}>
        {type.charAt(0).toUpperCase() + type.slice(1)} Message
      </Button>
    </>
  );
};

export default MessageButton;
