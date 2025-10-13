import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import React from 'react';

const onChange: PaginationProps['onChange'] = (pageNumber) => {
  console.log('Page: ', pageNumber);
};

const PaginationDemo: React.FC = () => (
  <div style={{ width: '100%' }}>
    <Pagination
      size='small'
      showQuickJumper
      defaultCurrent={2}
      total={100}
      onChange={onChange}
    />
  </div>
);

export default PaginationDemo;
