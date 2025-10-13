import { Button, notification } from 'antd';
import React from 'react';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationButtonProps {
  type: NotificationType;
  message?: string;
  description?: string;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({
  type,
  message,
  description,
}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api[type]({
      message: message || 'Notification Title',
      description:
        description ||
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  const buttonLabels: Record<NotificationType, string> = {
    success: 'Success Notification',
    info: 'Info Notification',
    warning: 'Warning Notification',
    error: 'Error Notification',
  };

  return (
    <>
      {contextHolder}
      <Button onClick={openNotification}>{buttonLabels[type]}</Button>
    </>
  );
};

export default NotificationButton;
