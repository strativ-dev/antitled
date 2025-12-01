import { ChevronDown, DotsVertical, Edit01, Trash01 } from '@untitledui/icons';
import { Flex } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

import { PIRATES } from '@/lib/dummy';

import { Badge, Button, Pagination, Text, Tooltip } from '@/components/Atoms';
import { Table, TableProps } from '@/components/Atoms/Table';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';
import Dot from '@/components/Common/Dot';
import { AvatarLabelGroup } from '@/components/Molecules';

type DataType = {
  id: string;
  name: string;
  username: string;
  status: string;
  role: string;
  email: string;
  teams: string[];
  avatar: string;
};

const data: DataType[] = PIRATES;

const tagVariants = [
  'brand',
  'success',
  'blue',
  'indigo',
  'purple',
  'pink',
  'orange',
  'gray-blue',
  'blue-light',
] as const;

export default function TablePage() {
  const { colors } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const columns: ColumnsType<DataType> = useMemo(() => {
    return [
      {
        width: 280,
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (name: string, record: DataType) => {
          return (
            <AvatarLabelGroup
              avatar={record.avatar}
              label={name}
              subtext={`@${record.username}`}
              status={record.status === 'Active' ? 'online' : 'offline'}
            />
          );
        },
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        width: 109,
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => {
          return (
            <Badge
              color='primary'
              variant='outlined'
              shape='rect'
              size='sm'
              icon={<Dot color={colors.utility['success-500']} />}>
              {status}
            </Badge>
          );
        },
        sorter: (a, b) => a.status.localeCompare(b.status),
      },
      {
        width: 180,
        title: () => {
          return (
            <Flex align='center' gap={4}>
              <span>Role</span>
              <Tooltip title='This is role tooltip content' />
            </Flex>
          );
        },
        dataIndex: 'role',
        key: 'role',
      },
      {
        width: 220,
        title: 'Email address',
        dataIndex: 'email',
        key: 'email',
      },
      {
        width: 285,
        title: 'Teams',
        dataIndex: 'teams',
        key: 'teams',
        render: (teams: string[]) => {
          return (
            <Flex gap={2} wrap>
              {teams.map((team) => (
                <Badge
                  variant='outlined'
                  size='sm'
                  key={team}
                  color={
                    tagVariants[Math.floor(Math.random() * tagVariants.length)]
                  }>
                  {team}
                </Badge>
              ))}
            </Flex>
          );
        },
      },
      {
        width: 90,
        title: 'Actions',
        render: () => {
          return (
            <Flex gap={2}>
              <Button
                variant='tertiary'
                icon={
                  <Trash01
                    color={colors.foregrounds.fgQuaternary400}
                    size={16}
                  />
                }
                size='xs'
              />
              <Button
                variant='tertiary'
                icon={
                  <Edit01
                    color={colors.foregrounds.fgQuaternary400}
                    size={16}
                  />
                }
                size='xs'
              />
            </Flex>
          );
        },
      },
    ];
  }, [colors.foregrounds.fgQuaternary400]);

  // Calculate paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [currentPage, pageSize]);

  const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Nami', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const TableTitle = useMemo(() => {
    return (
      <Flex align='center' gap={24} justify='space-between'>
        <Text size='text-md' weight='semibold'>
          Strawhat Crew{' '}
          <Badge color='brand' size='sm' style={{ marginLeft: '.375rem' }}>
            10 members
          </Badge>
        </Text>
        <Button
          variant='tertiary'
          size='sm'
          icon={<DotsVertical size={20} />}
        />
      </Flex>
    );
  }, []);

  return (
    <>
      <ComponentPageTitle title='Table Component' />
      <Flex vertical gap={24}>
        <Text size='text-lg' weight='medium' as='h2'>
          Table with Pagination and Row Selection
        </Text>
        <Flex vertical gap={16}>
          <Table<DataType>
            columns={columns}
            dataSource={paginatedData}
            pagination={false}
            rowSelection={{ ...rowSelection }}
            rowKey={'id'}
            scroll={{ x: 500 }}
          />
          <Pagination
            size='md'
            variant='button-group'
            current={currentPage}
            pageSize={pageSize}
            total={data.length}
            onChange={(page, size) => {
              setCurrentPage(page);
              setPageSize(size || pageSize);
            }}
            showSizeChanger={{ suffixIcon: <ChevronDown /> }}
            align='end'
          />
        </Flex>
        <Text size='text-lg' weight='semibold' as='h2' margin='2rem 0 0 0'>
          Table with header and footer
        </Text>
        <Flex vertical gap={16}>
          <Table<DataType>
            columns={columns}
            dataSource={paginatedData}
            pagination={false}
            rowSelection={{ ...rowSelection }}
            rowKey={'id'}
            scroll={{ x: 500 }}
            title={() => TableTitle}
            footer={() => (
              <Pagination
                size='sm'
                variant='minimal'
                current={currentPage}
                pageSize={pageSize}
                total={data.length}
                onChange={(page, size) => {
                  setCurrentPage(page);
                  setPageSize(size || pageSize);
                }}
                align='center'
              />
            )}
          />
        </Flex>
      </Flex>
    </>
  );
}
