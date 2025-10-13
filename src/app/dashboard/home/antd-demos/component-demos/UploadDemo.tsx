import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import { Button, Upload } from 'antd';
import React from 'react';

const props: UploadProps = {
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
};
const fileList: UploadFile[] = [
  {
    uid: '-2',
    name: 'zzz.png',
    status: 'error',
  },
];
const UploadDemo: React.FC = () => (
  <div style={{ width: '50%' }}>
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
    <br />
    <Upload
      action='https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload'
      listType='picture'
      defaultFileList={fileList}>
      <Button type='primary' icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  </div>
);

export default UploadDemo;
