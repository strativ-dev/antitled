import { Col, Row, Select } from 'antd';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CURRENCY_CODES } from '@/lib/utils/constants';

import { InputNumber } from '@/components/Atoms';
import ComponentPageTitle from '@/components/ComponentPageTitle';

export default function InputNumberPage() {
  const { t } = useTranslation();
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_CODES[0]);

  const selectCurrencyAfter = useMemo(() => {
    return (
      <Select
        value={selectedCurrency.code}
        onChange={(value) => {
          const currency = CURRENCY_CODES.find(
            (currency) => currency.code === value
          );
          if (currency) {
            setSelectedCurrency(currency);
          }
        }}>
        {CURRENCY_CODES.map((currency) => (
          <Select.Option key={currency.name} value={currency.code}>
            {currency.symbol} ({currency.code})
          </Select.Option>
        ))}
      </Select>
    );
  }, [selectedCurrency]);

  return (
    <>
      <ComponentPageTitle title={t('common.Input Number')} />

      <Row gutter={[24, 24]} align='middle'>
        <Col span={6}>
          <InputNumber size='sm' type='number' fullWidth defaultValue={0} />
        </Col>
        <Col span={6}>
          <InputNumber
            size='md'
            addonAfter={selectCurrencyAfter}
            prefix={selectedCurrency.symbol}
            fullWidth
            defaultValue={34}
          />
        </Col>
        <Col span={6}>
          <InputNumber
            size='lg'
            addonAfter={selectCurrencyAfter}
            prefix={selectedCurrency.symbol}
            type='number'
            fullWidth
          />
        </Col>
        <Col span={6}>
          <InputNumber
            size='lg'
            addonAfter={selectCurrencyAfter}
            prefix={selectedCurrency.symbol}
            type='number'
            fullWidth
          />
        </Col>
      </Row>
    </>
  );
}
