import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface User {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<User> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <>
        <a style={{ marginRight: 8 }}>Invite {record.name}</a>
        <a>Delete</a>
      </>
    ),
  },
];

const data: User[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York',
    tags: ['developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London',
    tags: ['designer'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 29,
    address: 'Sydney',
    tags: ['teacher'],
  },
];

const TableDemo: React.FC = () => (
  <div>
    <Table
      columns={columns}
      dataSource={data}
      style={{ marginTop: 24 }}
      pagination={false}
    />
  </div>
);

export default TableDemo;
