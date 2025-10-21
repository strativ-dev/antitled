import { Mail01 } from '@untitledui/icons';
import { App, Col, Flex, Form, Row, Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useTranslation } from 'react-i18next';

import { Input, Select, InputNumber, Button } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Molecules/ComponentPageTitle';
import InputPhoneNumber from '@/components/Molecules/InputPhoneNumber';

type InputsFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  emailDomain: string;
  phoneCode: string;
  phone: string;
  urlPrefix: string;
  website: string;
  age: number;
};

export default function Inputs() {
  const { t } = useTranslation();
  const [form] = Form.useForm<InputsFormValues>();

  const { message } = App.useApp();

  const domains = (
    <Select
      defaultValue='.com'
      options={[
        { label: '.com', value: '.com' },
        { label: '.org', value: '.org' },
        { label: '.net', value: '.net' },
      ]}></Select>
  );

  const handleSubmit = (values: InputsFormValues) => {
    console.log('Form values:', values);
    message.success('Form submitted successfully!');
  };

  const handleSubmitFailed = (_errorInfo: unknown) => {
    console.error('Form submission failed:', _errorInfo);
    message.error('Please fill in all required fields correctly');
  };

  return (
    <>
      <ComponentPageTitle title={t('common.Input')} />
      <Flex vertical gap={24} style={{ marginBottom: 32 }}>
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

      <ComponentPageTitle title='A submit form example' />
      <Form
        layout='vertical'
        form={form}
        initialValues={{
          //* forms with addonBefore and addonAfter inputs need initial values
          emailDomain: '@gmail.com',
          urlPrefix: 'https://',
          //* Used _countryCode postfix to avoid duplicated key issue, since phone codes can be same for different countries, e.g., +1 for US and Canada, process the value accordingly on form submit
          phoneCode: '+880_BD',
        }}
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <FormItem
              label='First Name'
              name='firstName'
              rules={[
                { required: true, message: 'Please enter your first name' },
              ]}>
              <Input placeholder='John' />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label='Last Name'
              name='lastName'
              rules={[
                { required: true, message: 'Please enter your last name' },
              ]}>
              <Input placeholder='Doe' />
            </FormItem>
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          <Col span={12}>
            <FormItem
              label='Email'
              name='email'
              rules={[{ required: true, message: 'Please enter your email' }]}>
              <Input
                placeholder='john'
                addonAfter={
                  <FormItem noStyle name='emailDomain'>
                    <Select
                      defaultValue='@gmail.com'
                      options={[
                        { label: '@gmail.com', value: '@gmail.com' },
                        { label: '@outlook.com', value: '@outlook.com' },
                      ]}
                    />
                  </FormItem>
                }
              />
            </FormItem>
          </Col>
          <Col span={12}>
            <InputPhoneNumber
              inputFormItemProps={{
                label: 'Phone',
                rules: [
                  { required: true, message: 'Please enter your phone number' },
                ],
                name: 'phone',
              }}
              selectFormItemProps={{ name: 'phoneCode' }}
            />
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          <Col span={12}>
            <FormItem
              label='Website'
              name='website'
              rules={[
                { required: true, message: 'Please enter your website' },
                {
                  pattern:
                    /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?(\.[a-zA-Z]{2,})+$/,
                  message: 'Please enter a valid domain (e.g., example.com)',
                },
              ]}>
              <Input
                placeholder='example.com'
                addonBefore={
                  <FormItem noStyle name='urlPrefix'>
                    <Select
                      defaultValue='https://'
                      options={[
                        { label: 'https://', value: 'https://' },
                        { label: 'http://', value: 'http://' },
                      ]}
                    />
                  </FormItem>
                }
              />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label='Age'
              name='age'
              rules={[
                { required: true, message: 'Please enter your age' },
                {
                  type: 'number',
                  min: 1,
                  max: 120,
                  message: 'Age must be between 1 and 120',
                },
              ]}>
              <InputNumber
                type='number'
                placeholder='25'
                min={1}
                max={120}
                fullWidth
              />
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <FormItem>
              <Space>
                <Button htmlType='submit'>Submit</Button>
                <Button variant='secondary' onClick={() => form.resetFields()}>
                  Reset
                </Button>
              </Space>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </>
  );
}
