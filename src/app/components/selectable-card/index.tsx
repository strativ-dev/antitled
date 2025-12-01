import { Avatar, Col, Flex, Row } from 'antd';
import { t } from 'i18next';
import { useState } from 'react';

import { Badge, CardRadioGroupItem, Checkbox } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

export function SelectableCards() {
  const [isCardSelected, setIsCardSelected] = useState<boolean>(true);
  return (
    <Flex vertical gap='large'>
      <ComponentPageTitle title={t('common.Selectable_card')} />
      <Row gutter={16}>
        <Col span={10}>
          <Flex vertical gap='small'>
            <h4>Selected Simple card</h4>
            <CardRadioGroupItem
              size='sm'
              isSelected={isCardSelected}
              description='Includes up to 10 users, 20 GB individual data and access to all features.'>
              <CardRadioGroupItem.Meta title='Small size' />
            </CardRadioGroupItem>
            <CardRadioGroupItem
              size='md'
              isSelected={isCardSelected}
              bodyRight={
                <Flex>
                  <Badge shape='pill' color='blue-light' size='sm'>
                    Selected
                  </Badge>
                  <Badge shape='rect' color='purple' size='sm'>
                    Notification
                  </Badge>
                </Flex>
              }
              description='Includes up to 10 users, 20 GB individual data and access to all features.'>
              <CardRadioGroupItem.Meta title='Default size' />
            </CardRadioGroupItem>
          </Flex>
          <Flex vertical gap='small'>
            <h4> Selected card with header</h4>

            <CardRadioGroupItem
              title='Selected small size'
              description='Includes up to 10 users, 20 GB individual data and access to all features.'
              isSelected={isCardSelected}
              headerLeft={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
              bodyLeft={
                <Checkbox type='radio' size='sm' checked={isCardSelected} />
              }
              headerRight={<Checkbox size='sm' checked={isCardSelected} />}
              bodyRight={
                <Badge shape='pill' color='brand' size='sm'>
                  right
                </Badge>
              }
              size='sm'>
              <CardRadioGroupItem.Meta title='Basic $10/month' />
            </CardRadioGroupItem>
            <CardRadioGroupItem
              title='Basic plan'
              description='Includes up to 10 users, 20 GB individual data and access to all features.'
              isSelected={isCardSelected}
              headerLeft={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
              bodyLeft={<Checkbox type='radio' checked={isCardSelected} />}
              headerRight={<Checkbox checked={isCardSelected} />}
              bodyRight={
                <Badge shape='pill' color='brand'>
                  right
                </Badge>
              }
              size='md'>
              <CardRadioGroupItem.Meta title='Basic $10/month' />
            </CardRadioGroupItem>
          </Flex>
          <Flex vertical gap='small'>
            <h4>Selected disable card</h4>

            <CardRadioGroupItem
              description='Includes up to 10 users, 20 GB individual data and access to all features.'
              disabled
              isSelected={isCardSelected}>
              <CardRadioGroupItem.Meta title='Basic plan $10/month' />
            </CardRadioGroupItem>

            <CardRadioGroupItem
              bodyLeft={
                <Checkbox type='radio' checked={isCardSelected} disabled />
              }
              description='Includes up to 10 users, 20 GB individual data and access to all features.'
              disabled
              isSelected={isCardSelected}>
              <CardRadioGroupItem.Meta title='Basic plan $10/month' />
            </CardRadioGroupItem>

            <CardRadioGroupItem
              bodyRight={
                <Badge shape='pill' color='indigo'>
                  Body right
                </Badge>
              }
              description='Includes up to 10 users, 20 GB individual data and access to all features.'
              disabled
              isSelected={isCardSelected}>
              <CardRadioGroupItem.Meta title='Basic plan $10/month' />
            </CardRadioGroupItem>

            <CardRadioGroupItem
              title='Basic plan'
              description='Includes up to 10 users, 20 GB individual data and access to all features.'
              headerRight={<Checkbox checked={isCardSelected} disabled />}
              disabled
              isSelected={isCardSelected}>
              <CardRadioGroupItem.Meta title='Basic plan $10/month' />
            </CardRadioGroupItem>

            <CardRadioGroupItem
              title='Basic plan'
              description='Includes up to 10 users, 20 GB individual data and access to all features.'
              disabled
              isSelected={isCardSelected}
              headerLeft={<Checkbox checked={isCardSelected} disabled />}>
              <CardRadioGroupItem.Meta title='Basic $10/month' />
            </CardRadioGroupItem>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
}

export default SelectableCards;
