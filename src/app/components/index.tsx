import { AlertTriangle } from '@untitledui/icons';
import { Flex } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Text } from '@/components/Atoms';

import AntitledCoverPhoto from '@/assets/images/antitled-cover.png';

export default function ComponentsPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <Flex vertical justify='center' gap={16}>
        <img
          src={AntitledCoverPhoto}
          alt='Antitled Cover'
          style={{ objectFit: 'contain', maxWidth: 900 }}
        />
        <Text size='display-md' weight='regular'>
          Note:
        </Text>
        <Text size='text-lg'>{t('features.components.welcome_text_1')}</Text>

        <Text size='text-lg'>{t('features.components.welcome_text_2')}</Text>

        <Flex gap={40} align='center'>
          <AlertTriangle style={{ color: '#F04438', fontSize: 72 }} />
          <Text size='text-lg' color='textErrorPrimary600'>
            {t('features.components.disclaimer_text')}
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
`;
