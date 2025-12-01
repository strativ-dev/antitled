import { Col, Row } from 'antd';

import { PIRATES } from '@/lib/dummy';

import { Text } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';
import { AvatarLabelGroup } from '@/components/Molecules';

const Sizes = ['sm', 'md', 'lg', 'xl'] as const;

export default function AvatarLabelGroupPage() {
  return (
    <>
      <ComponentPageTitle title='AvatarLabelGroup Component' />
      <Text size='text-lg' weight='medium' margin='2rem 0 0 0'>
        Avatar Label Group with status
      </Text>
      <Row gutter={[32, 32]}>
        {PIRATES.slice(0, 4).map((pirate, index) => (
          <Col
            span={12}
            xxl={6}
            key={pirate.name}
            style={{ display: 'flex', alignItems: 'center' }}>
            <AvatarLabelGroup
              size={Sizes[index]}
              avatar={pirate.avatar}
              label={pirate.name}
              subtext={pirate.email}
            />
          </Col>
        ))}
      </Row>

      <Text size='text-lg' weight='medium' margin='2rem 0 0 0'>
        Avatar Label Group with status
      </Text>
      <Row gutter={[32, 32]}>
        {PIRATES.slice(6, 10).map((pirate, index) => (
          <Col
            span={12}
            xxl={6}
            key={pirate.name}
            style={{ display: 'flex', alignItems: 'center' }}>
            <AvatarLabelGroup
              size={Sizes[index]}
              avatar={pirate.avatar}
              label={pirate.name}
              subtext={pirate.email}
              status={pirate.status === 'Active' ? 'online' : 'offline'}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
