import { Col, Flex } from 'antd';
import Row from 'antd/es/row';
import { useTranslation } from 'react-i18next';

import { Select } from '@/components/Atoms/Select';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

const OPTIONS = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
  {
    label: 'Option 4',
    value: 'option4',
  },
];

const avatarOptions = [
  {
    label: (
      <Flex align='center' gap={8}>
        <img
          src='https://avatar.iran.liara.run/public'
          height={16}
          width={16}
        />
        <span>Avatar 1</span>
      </Flex>
    ),
    value: 'option1',
  },
  {
    label: (
      <Flex align='center' gap={8}>
        <img
          src='https://avatar.iran.liara.run/public'
          height={16}
          width={16}
        />
        <span>Avatar 2</span>
      </Flex>
    ),
    value: 'option2',
  },
  {
    label: (
      <Flex align='center' gap={8}>
        <img
          src='https://avatar.iran.liara.run/public'
          height={16}
          width={16}
        />
        <span>Avatar 3</span>
      </Flex>
    ),
    value: 'option3',
  },
  {
    label: (
      <Flex align='center' gap={8}>
        <img
          src='https://avatar.iran.liara.run/public'
          height={16}
          width={16}
        />
        <span>Avatar 4</span>
      </Flex>
    ),
    value: 'option4',
  },
];

export default function SelectPage() {
  const { t } = useTranslation();

  return (
    <>
      <ComponentPageTitle title={t('common.Select')} />
      <Flex vertical gap={24}>
        <Row gutter={[24, 24]} align='middle'>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option1'
              size='sm'
              options={OPTIONS}
              placeholder='Search'
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              options={OPTIONS}
              loading
              defaultValue='option2'
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option3'
              size='lg'
              options={OPTIONS}
              disabled
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option4'
              size='lg'
              options={OPTIONS}
              status='error'
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]} align='middle'>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option1'
              size='sm'
              options={OPTIONS}
              mode='multiple'
              placeholder='Search'
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option2'
              options={OPTIONS}
              allowClear
              placeholder='Search'
              mode='tags'
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option3'
              size='lg'
              options={OPTIONS}
              disabled
              mode='multiple'
              allowClear
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option4'
              size='lg'
              options={OPTIONS}
              status='error'
              mode='multiple'
              allowClear
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]} align='middle'>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option1'
              size='sm'
              options={avatarOptions}
              mode='multiple'
              placeholder='Search'
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue={['option1', 'option2']}
              options={avatarOptions}
              allowClear
              placeholder='Search'
              mode='tags'
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option3'
              size='lg'
              options={avatarOptions}
              disabled
              mode='multiple'
              allowClear
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option4'
              size='lg'
              options={avatarOptions}
              status='error'
              mode='multiple'
              allowClear
            />
          </Col>
        </Row>
      </Flex>
    </>
  );
}
