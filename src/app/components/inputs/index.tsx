import { Mail01 } from '@untitledui/icons';
import { Col, Flex, Row, Select } from 'antd';
import { useTranslation } from 'react-i18next';

import { Input } from '@/components/Atoms';
import ComponentPageTitle from '@/components/ComponentPageTitle';

export default function Inputs() {
  const { t } = useTranslation();
  //   const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  // const countrySelect = useMemo(() => {
  //   return (
  //     <Select
  //       suffixIcon={<ChevronDown size={18} />}
  //       value={selectedCountry.phone}
  //       onChange={(value) => {
  //         const country = COUNTRY_CODES.find((c) => c.phone === value);
  //         if (country) {
  //           setSelectedCountry(country);
  //         }
  //       }}>
  //       {COUNTRY_CODES.map((country) => (
  //         <Select.Option key={country.code} value={country.phone}>
  //           {country.code}
  //         </Select.Option>
  //       ))}
  //     </Select>
  //   );
  // }, [selectedCountry]);

  const domains = (
    <Select defaultValue='.com'>
      <Select.Option value='.com'>.com</Select.Option>
      <Select.Option value='.jp'>.jp</Select.Option>
      <Select.Option value='.cn'>.cn</Select.Option>
      <Select.Option value='.org'>.org</Select.Option>
    </Select>
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
