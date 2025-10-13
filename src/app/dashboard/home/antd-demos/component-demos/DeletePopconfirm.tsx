import { message, Popconfirm } from 'antd';
import React from 'react';

const confirm = () => {
  message.success('Click on Yes');
};

const cancel = () => {
  message.error('Click on No');
};

const DeletePopConfirm: React.FC = () => (
  <Popconfirm
    title='Are you sure to delete this task?'
    onConfirm={confirm}
    onCancel={cancel}
    okText='Yes'
    cancelText='No'>
    <a href='#'>Delete</a>
  </Popconfirm>
);

export default DeletePopConfirm;
