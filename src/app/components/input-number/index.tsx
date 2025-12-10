import { Col, Row, Space } from 'antd';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CURRENCY_CODES } from '@/lib/utils/constants';

import { InputNumber, Select } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

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
          <Space.Compact style={{ isolation: 'isolate' }}>
            <InputNumber
              size='md'
              removeAffixRightBorder={true}
              prefix={selectedCurrency.symbol}
              fullWidth
              defaultValue={34}
              style={{ zIndex: 1 }}
            />
            {selectCurrencyAfter}
          </Space.Compact>
        </Col>
        <Col span={6}>
          <Space.Compact style={{ isolation: 'isolate' }}>
            <InputNumber
              size='lg'
              removeAffixRightBorder={true}
              prefix={selectedCurrency.symbol}
              type='number'
              fullWidth
              disabled
              style={{ zIndex: 1 }}
            />
            {selectCurrencyAfter}
          </Space.Compact>
        </Col>
        <Col span={6} style={{ isolation: 'isolate' }}>
          <Space.Compact>
            <InputNumber
              size='lg'
              removeAffixRightBorder={true}
              prefix={selectedCurrency.symbol}
              type='number'
              fullWidth
              status='error'
            />
            {selectCurrencyAfter}
          </Space.Compact>
        </Col>
      </Row>
    </>
  );
}
