import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import ComponentPageTitle from '@/components/Common/ComponentPageTitle';
import { InputCopyText } from '@/components/Molecules';

export default function InputCopyTextPage() {
  const { t } = useTranslation();

  return (
    <>
      <ComponentPageTitle title={t('common.Input Copy Text')} />

      <Row gutter={[24, 24]} align='middle'>
        <Col span={6}>
          <InputCopyText size='sm' value='+1 234 567 8901' />
        </Col>
        <Col span={6}>
          <InputCopyText size='md' value='johndoe@email.com' />
        </Col>
        <Col span={6}>
          <InputCopyText size='lg' value='johndoe@email.com' />
        </Col>
        <Col span={6}>
          <InputCopyText size='lg' value='johndoe@email.com' />
        </Col>
      </Row>
    </>
  );
}
