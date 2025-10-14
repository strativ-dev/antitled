import { WarningOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import styled from 'styled-components';

import { Text } from '@/components/Atoms';

import AntitledCoverPhoto from '@/assets/images/antitled-cover.png';

export default function ComponentsPage() {
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
        <Text size='text-lg'>
          This project is to track the project of a component library for our
          own. It contains the Untitled UI component set, which serves as our
          design foundation in most of the projects.
        </Text>

        <Text size='text-lg'>
          In frontend, Ant Design components will be customized to visually
          match these Untitled UI components. The goal is to save time in future
          projects by standardizing this process into a ready-to-use library.
        </Text>

        <Flex gap={40} align='center'>
          <WarningOutlined style={{ color: 'orange', fontSize: 72 }} />
          <Text size='text-lg' color='textErrorPrimary600'>
            Disclaimer: This is a base collection with core components and
            simple variants. Individual projects may extend it with new
            components, additional variants or even a whole custom design
            approach.
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
