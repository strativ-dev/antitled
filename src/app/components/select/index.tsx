import { Col, Flex } from 'antd';
import Row from 'antd/es/row';
import { useTranslation } from 'react-i18next';

import { Select } from '@/components/Atoms/Select';
import ComponentPageTitle from '@/components/ComponentPageTitle';

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
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option2'
              options={OPTIONS}
              loading
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
              allowClear
            />
          </Col>
          <Col span={6}>
            <Select
              id='select'
              fullWidth
              defaultValue='option2'
              options={OPTIONS}
              mode='tags'
              allowClear
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
      </Flex>
    </>
  );
}
