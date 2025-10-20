import { Form, InputProps } from 'antd';
import { Option } from 'antd/es/mentions';
import { useState } from 'react';

import { COUNTRY_CODES } from '@/lib/utils/constants';

import { Input, Select } from '@/components/Atoms';

export default function InputPhoneNumber() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);

  const handleCountryChange = (value: string) => {
    const [phone, code] = value.split('_');
    const country = COUNTRY_CODES.find(
      (country) => country.phone === phone && country.code === code
    );
    if (country) {
      setSelectedCountry(country);
    }
  };

  const onPhoneNumberChange: InputProps['onChange'] = (e) => {
    console.log(e.target.value);
  };

  const addonBefore = (
    <Form.Item name={'country'} noStyle>
      <Select
        showSearch
        defaultValue={`${selectedCountry.phone}_${selectedCountry.code}`}
        value={`${selectedCountry.phone}_${selectedCountry.code}`}
        onChange={handleCountryChange}
        menuItemSelectedIcon={null}
        size='sm'>
        {COUNTRY_CODES.map((country) => (
          <Option
            style={{ fontSize: '14px' }}
            key={country.code}
            value={`${country.phone}_${country.code}`}>
            {`${country.code} (${country.phone})`}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <Input
      style={{ width: '400px' }}
      name='phone'
      placeholder='000-0000'
      addonBefore={addonBefore}
      addonAfter={addonBefore}
      prefix={selectedCountry.phone}
      onChange={onPhoneNumberChange}
      removeAffixLeftBorder={true}
      removeAffixRightBorder={true}
      removeGroupAddonBG
    />
  );
}
