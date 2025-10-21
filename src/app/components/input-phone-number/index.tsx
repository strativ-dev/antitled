import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import ComponentPageTitle from '@/components/Molecules/ComponentPageTitle';
import InputPhoneNumber from '@/components/Molecules/InputPhoneNumber';

export default function InputPhoneNumberPage() {
  const { t } = useTranslation();
  return (
    <>
      <ComponentPageTitle title={t('common.Input Phone Number')} />
      <Row gutter={[24, 24]} align='middle'>
        <Col span={8}>
          <InputPhoneNumber />
        </Col>
      </Row>
    </>
  );
}
