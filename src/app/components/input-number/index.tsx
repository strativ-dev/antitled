import { Col, Row } from 'antd';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CURRENCY_CODES } from '@/lib/utils/constants';

import { InputNumber, Select } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Shared/ComponentPageTitle';

export default function InputNumberPage() {
  const { t } = useTranslation();
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_CODES[0]);

  const selectCurrencyAfter = useMemo(() => {
    return (
      <Select
        style={{ width: '90px' }}
        value={selectedCurrency.code}
        onChange={(value) => {
          const currency = CURRENCY_CODES.find(
            (currency) => currency.code === value
          );
          if (currency) {
            setSelectedCurrency(currency);
          }
        }}
        options={CURRENCY_CODES.map((currency) => {
          return {
            label: currency.code,
            value: currency.code,
          };
        })}
      />
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
            removeAffixRightBorder={true}
            prefix={selectedCurrency.symbol}
            fullWidth
            defaultValue={34}
          />
        </Col>
        <Col span={6}>
          <InputNumber
            size='lg'
            addonAfter={selectCurrencyAfter}
            removeAffixRightBorder={true}
            prefix={selectedCurrency.symbol}
            type='number'
            fullWidth
            disabled
          />
        </Col>
        <Col span={6}>
          <InputNumber
            size='lg'
            addonAfter={selectCurrencyAfter}
            removeAffixRightBorder={true}
            prefix={selectedCurrency.symbol}
            type='number'
            fullWidth
            status='error'
          />
        </Col>
      </Row>
    </>
  );
}
