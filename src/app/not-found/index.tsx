import { useNavigate } from '@tanstack/react-router';
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'common',
  });

  const navigate = useNavigate();

  return (
    <Result
      status='404'
      title='404'
      subTitle={t('not_found_page_title')}
      extra={
        <Button type='primary' onClick={() => navigate({ to: '/' })}>
          {t('back_home')}
        </Button>
      }
    />
  );
};

export default NotFound;
