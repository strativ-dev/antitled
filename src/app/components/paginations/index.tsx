import { Flex } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import { Pagination, PaginationProps, Text } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Molecules/ComponentPageTitle';

export default function PaginationPage() {
  const [current, setCurrent] = useState(1);
  const showTotal: PaginationProps['showTotal'] = (total) =>
    `Total ${total} items`;

  return (
    <>
      <ComponentPageTitle title='Pagination Component' />
      <Flex vertical gap={48}>
        {/* Minimal Variant - Medium */}
        <PaginationWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Variant: Minimal - Medium
          </Text>
          <Flex vertical gap={24}>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                Basic (10 total pages)
              </Text>
              <Pagination
                variant='minimal'
                size='md'
                defaultCurrent={1}
                total={100}
                pageSize={10}
                hideNextPrevText
              />
            </div>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                With many pages (50 pages)
              </Text>
              <Pagination
                variant='minimal'
                size='md'
                defaultCurrent={25}
                total={500}
                pageSize={10}
                nextPrevType='bordered'
                nextButtonText='Next Page'
                prevButtonText='Previous Page'
              />
            </div>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                Disabled state
              </Text>
              <Pagination
                variant='minimal'
                size='md'
                current={5}
                total={100}
                pageSize={10}
                disabled
                buttonType='rounded'
              />
            </div>
          </Flex>
        </PaginationWrapper>

        {/* Minimal Variant - Small */}
        <PaginationWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Variant: Minimal - Small
          </Text>
          <Flex vertical gap={24}>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                Basic (10 total pages)
              </Text>
              <Pagination
                variant='minimal'
                size='sm'
                defaultCurrent={1}
                total={100}
                pageSize={10}
              />
            </div>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                With many pages (50 pages)
              </Text>
              <Pagination
                variant='minimal'
                size='sm'
                defaultCurrent={25}
                total={500}
                pageSize={10}
              />
            </div>
          </Flex>
        </PaginationWrapper>

        {/* Button Group Variant - Medium */}
        <PaginationWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Variant: Button Group - Size: Medium (Default)
          </Text>
          <Flex vertical gap={24}>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                Basic (10 total pages)
              </Text>
              <Pagination
                variant='button-group'
                size='md'
                current={current}
                total={100}
                pageSize={10}
                onChange={setCurrent}
                hideNextPrevText
              />
            </div>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                With many pages (50 pages)
              </Text>
              <Pagination
                variant='button-group'
                size='md'
                defaultCurrent={1}
                total={500}
                pageSize={10}
              />
            </div>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                Disabled state
              </Text>
              <Pagination
                variant='button-group'
                size='md'
                current={5}
                total={100}
                pageSize={10}
                disabled
              />
            </div>
          </Flex>
        </PaginationWrapper>

        {/* Button Group Variant - Small */}
        <PaginationWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Variant: Button Group - Small
          </Text>
          <Flex vertical gap={24}>
            <Pagination variant='button-group' size='sm' total={50} />
            <Pagination
              variant='button-group'
              size='sm'
              total={50}
              showSizeChanger
              showQuickJumper
            />
            <Pagination
              variant='button-group'
              size='sm'
              total={50}
              showTotal={showTotal}
            />
            <Pagination
              variant='button-group'
              size='sm'
              total={50}
              disabled
              showTotal={showTotal}
              showSizeChanger
              showQuickJumper
            />
          </Flex>
        </PaginationWrapper>

        {/* Alignment Examples */}
        <PaginationWrapper>
          <Text size='text-lg' weight='semibold' as='h2' margin='0 0 24px 0'>
            Alignment Options
          </Text>
          <Flex vertical gap={24}>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                Start (Default)
              </Text>
              <Pagination
                variant='button-group'
                defaultCurrent={1}
                total={100}
                pageSize={10}
                align='start'
              />
            </div>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                Center
              </Text>
              <Pagination
                variant='button-group'
                defaultCurrent={1}
                total={100}
                pageSize={10}
                align='center'
              />
            </div>
            <div>
              <Text size='text-sm' weight='medium' margin='0 0 12px 0'>
                End
              </Text>
              <Pagination
                variant='button-group'
                defaultCurrent={1}
                total={100}
                pageSize={10}
                align='end'
              />
            </div>
          </Flex>
        </PaginationWrapper>
      </Flex>
    </>
  );
}

const PaginationWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borders.borderSecondary};
  padding: 1rem;
  border-radius: 10px;
`;
