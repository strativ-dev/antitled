import { Mail01 } from '@untitledui/icons';
import { Col, Flex, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import { Input, Select } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Shared/ComponentPageTitle';

export default function Inputs() {
  const { t } = useTranslation();

  const domains = (
    <Select
      defaultValue='.com'
      options={[
        { label: '.com', value: '.com' },
        { label: '.org', value: '.org' },
        { label: '.net', value: '.net' },
      ]}></Select>
  );

  return (
    <>
      <ComponentPageTitle title={t('common.Input')} />

      <Flex vertical gap={24}>
        <Row gutter={[24, 24]} align='middle'>
          <Col span={6}>
            <Input
              id='email'
              type='email'
              autoComplete='email'
              placeholder='john@emial.com'
              prefix={<Mail01 size={20} />}
              size='sm'
            />
          </Col>
          <Col span={6}>
            <Input
              id='email'
              type='email'
              autoComplete='email'
              placeholder='john@emial.com'
              prefix={<Mail01 size={20} />}
              value={'john@email.com'}
              allowClear
            />
          </Col>
          <Col span={6}>
            <Input
              id='email'
              type='email'
              autoComplete='email'
              placeholder='john@emial.com'
              prefix={<Mail01 size={20} />}
              size='lg'
              disabled
              value={'john@disabled.com'}
            />
          </Col>
          <Col span={6}>
            <Input
              id='email'
              type='email'
              autoComplete='email'
              placeholder='john@emial.com'
              prefix={<Mail01 size={20} />}
              size='lg'
              value={'johndoe'}
              status='error'
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]} align='middle'>
          <Col span={6}>
            <Input size='sm' addonBefore='https://' addonAfter={domains} />
          </Col>
          <Col span={6}>
            <Input size='md' addonBefore='https://' addonAfter={domains} />
          </Col>
          <Col span={6}>
            <Input
              size='lg'
              addonBefore='https://'
              disabled
              addonAfter={domains}
            />
          </Col>
          <Col span={6}>
            <Input
              size='lg'
              addonBefore='http://'
              status='error'
              addonAfter={domains}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]} align='middle'>
          <Col span={6}>
            <Input size='sm' addonBefore='https://' addonAfter='.com' />
          </Col>
          <Col span={6}>
            <Input size='md' addonBefore='https://' addonAfter='.com' />
          </Col>
          <Col span={6}>
            <Input
              size='lg'
              addonBefore='https://'
              disabled
              addonAfter='.com'
            />
          </Col>
          <Col span={6}>
            <Input
              size='lg'
              addonBefore='http://'
              status='error'
              addonAfter='.com'
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]} align='middle'>
          <Col span={6}>
            <Input size='sm' addonAfter='@gmail.com' />
          </Col>
          <Col span={6}>
            <Input size='md' addonAfter='@gmail.com' />
          </Col>
          <Col span={6}>
            <Input size='lg' addonAfter='@gmail.com' disabled />
          </Col>
          <Col span={6}>
            <Input size='lg' addonAfter='@gmail.com' status='error' />
          </Col>
        </Row>
      </Flex>
    </>
  );
}
