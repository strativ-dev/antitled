import { Form } from 'antd';
import FormItem, { FormItemProps } from 'antd/es/form/FormItem';
import { useMemo, useState } from 'react';
import { css, useTheme } from 'styled-components';

import { COUNTRY_CODES } from '@/lib/utils/constants';

import { Input, Select } from '@/components/Atoms';
import { AntitledInputProps } from '@/components/Atoms/Input';
import { AntitledSelectProps } from '@/components/Atoms/Select';

type Props = {
  selectProps?: AntitledSelectProps;
  inputProps?: AntitledInputProps;
  inputFormItemProps?: FormItemProps;
  selectFormItemProps?: FormItemProps;
};

export default function InputPhoneNumber({
  selectProps,
  inputProps,
  selectFormItemProps = {},
  inputFormItemProps = {},
}: Props) {
  const theme = useTheme();
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

  const addonBefore = useMemo(() => {
    if (!selectedCountry.code) return null;
    return (
      <Form.Item noStyle {...selectFormItemProps}>
        <Select
          //Used _countryCode in value to avoid duplicated key issue, since phone codes can be same for different countries
          value={`${selectedCountry.phone}_${selectedCountry.code}`}
          showSearch
          onChange={handleCountryChange}
          menuItemSelectedIcon={null}
          style={{ minWidth: '7rem' }}
          options={COUNTRY_CODES.map((country) => ({
            label: `${country.phone} (${country.code})`,
            value: `${country.phone}_${country.code}`,
          }))}
          {...selectProps}
        />
      </Form.Item>
    );
  }, [selectedCountry, selectProps, selectFormItemProps]);

  const customInputCSS = css`
    .ant-input-affix-wrapper {
      padding-left: 0;
    }
    .ant-input-prefix {
      color: ${theme.colors.texts.textPrimary900} !important;
    }
  `;

  return (
    <FormItem {...inputFormItemProps}>
      <Input
        name='phone'
        placeholder='000-0000'
        addonBefore={addonBefore}
        prefix={selectedCountry.phone}
        removeAffixLeftBorder={true}
        removeGroupAddonBG
        cssProp={customInputCSS}
        {...inputProps}
      />
    </FormItem>
  );
}
