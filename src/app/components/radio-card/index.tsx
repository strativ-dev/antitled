import { Avatar, Col, Flex, Row } from 'antd';
import { t } from 'i18next';
import { useState } from 'react';

import {
  Badge,
  CardRadioGroup,
  CardRadioGroupItem,
  Checkbox,
} from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

export function CardRadioGroups() {
  const [smallSelected, setSmallSelected] = useState<string | number>(
    'smallSelected1'
  );
  const [defaultSelected, setDefaultSelected] = useState<string | number>(
    'defaultSelected3'
  );

  return (
    <Flex vertical gap='large'>
      <ComponentPageTitle title={t('common.Radio_card')} />
      <Row gutter={16}>
        <Col span={10}>
          <h2>Radio group item</h2>
          <Flex vertical gap='large'>
            <Flex vertical gap='small'>
              <h4>Default Simple card</h4>
              <CardRadioGroupItem
                size='sm'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Small size' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='md'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Default size' />
              </CardRadioGroupItem>
            </Flex>
            <Flex vertical gap='small'>
              <h4>Default Simple card with extra </h4>
              <CardRadioGroupItem
                size='sm'
                bodyRight={<Checkbox size='sm' />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Small size with body right' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='md'
                bodyRight={<Checkbox size='md' checked />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Default size with body right' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='md'
                bodyRight={
                  <Badge shape='pill' color='brand'>
                    Limited time only
                  </Badge>
                }
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Default size with body right' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='sm'
                bodyLeft={<Checkbox size='sm' type='radio' />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Small size with body left' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='md'
                bodyLeft={<Checkbox size='md' checked type='radio' />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Default size with body left' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='md'
                bodyLeft={
                  <Badge shape='pill' color='indigo'>
                    Limited time only
                  </Badge>
                }
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Default size with body left' />
              </CardRadioGroupItem>
            </Flex>
            <Flex vertical gap='small'>
              <h4>Default Simple card body left and right</h4>
              <CardRadioGroupItem
                size='sm'
                bodyRight={
                  <Badge shape='pill' color='orange' size='sm'>
                    Limited time only
                  </Badge>
                }
                bodyLeft={<Checkbox type='radio' checked size='sm' />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Default size with extra' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='md'
                bodyRight={
                  <Badge shape='pill' color='orange'>
                    Limited time only
                  </Badge>
                }
                bodyLeft={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Default size with extra' />
              </CardRadioGroupItem>
            </Flex>
            <Flex vertical gap='small'>
              <h4>Basic card with header </h4>
              <CardRadioGroupItem
                title='Small Size'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                size='sm'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                title='Default Size'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                size='md'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
            </Flex>
            <Flex vertical gap='small'>
              <h4>Basic card with header extra</h4>
              <CardRadioGroupItem
                title='Small size with header right'
                headerRight={
                  <Badge shape='rect' color='brand' size='sm'>
                    Header Right
                  </Badge>
                }
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                size='sm'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                title='Default size with header left'
                headerLeft={<Checkbox checked />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                size='md'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                title='Default size with header left and right'
                headerLeft={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
                headerRight={
                  <Badge shape='rect' color='brand' size='md'>
                    Header Right
                  </Badge>
                }
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                size='md'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
            </Flex>

            <Flex vertical gap='small'>
              <h4>Selected</h4>
              <CardRadioGroupItem
                size='sm'
                isSelected={true}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Small size' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='md'
                isSelected={true}
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
              <CardRadioGroupItem
                title='Selected small size'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                isSelected={true}
                headerLeft={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
                bodyLeft={<Checkbox checked type='radio' size='sm' />}
                headerRight={<Checkbox size='sm' />}
                bodyRight={
                  <Badge shape='pill' color='brand' size='sm'>
                    Limited time only
                  </Badge>
                }
                size='sm'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                title='Selected default size'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                isSelected={true}
                headerLeft={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
                bodyLeft={<Checkbox checked type='radio' />}
                headerRight={<Checkbox />}
                bodyRight={
                  <Badge shape='pill' color='brand'>
                    Limited time only
                  </Badge>
                }
                size='md'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
            </Flex>
            <Flex vertical gap='small'>
              <h4>Disable</h4>
              <CardRadioGroupItem
                size='sm'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                disabled>
                <CardRadioGroupItem.Meta title='Disable small size' />
              </CardRadioGroupItem>

              <CardRadioGroupItem
                size='md'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                disabled>
                <CardRadioGroupItem.Meta title='Disable default size' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='sm'
                bodyLeft={<Checkbox size='sm' type='radio' />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                disabled>
                <CardRadioGroupItem.Meta title='Disable small size' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                size='md'
                bodyRight={
                  <Badge shape='pill' color='indigo'>
                    Limited time only
                  </Badge>
                }
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                disabled>
                <CardRadioGroupItem.Meta title='Disable default size' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                title='Disable small size with title'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                isSelected={true}
                headerRight={<Checkbox />}
                disabled
                size='sm'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                title='Disable default size with title'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'
                isSelected={true}
                disabled
                headerLeft={<Checkbox />}
                headerRight={<Checkbox />}
                bodyLeft={<Checkbox type='radio' checked />}
                bodyRight={
                  <Badge shape='pill' color='indigo'>
                    Limited time only
                  </Badge>
                }
                size='md'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
            </Flex>
          </Flex>
        </Col>

        <Col lg={{ span: 10, offset: 2 }}>
          <h2>Radio group</h2>
          <Flex vertical gap='large'>
            <Flex vertical gap='small'>
              <h4>Small size</h4>
              <CardRadioGroup value={smallSelected} onChange={setSmallSelected}>
                <CardRadioGroupItem
                  size='sm'
                  value='smallSelected1'
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Small size' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  size='sm'
                  value='smallSelected2'
                  bodyLeft={<Checkbox size='sm' type='radio' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Small size with body left' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  size='sm'
                  value='smallSelected3'
                  bodyRight={<Checkbox size='sm' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Small size with body right' />
                </CardRadioGroupItem>
                <CardRadioGroupItem
                  size='sm'
                  value='smallSelected4'
                  bodyRight={
                    <Badge shape='pill' color='orange' size='sm'>
                      Limited time only
                    </Badge>
                  }
                  bodyLeft={<Checkbox type='radio' checked size='sm' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Default size with extra' />
                </CardRadioGroupItem>
              </CardRadioGroup>
            </Flex>
            <Flex vertical gap='small'>
              <h4>Default size</h4>
              <CardRadioGroup
                value={defaultSelected}
                onChange={setDefaultSelected}>
                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected1'
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Default size' />
                </CardRadioGroupItem>
                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected2'
                  bodyRight={
                    <Badge shape='pill' color='orange'>
                      Limited time only
                    </Badge>
                  }
                  bodyLeft={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Default size with extra' />
                </CardRadioGroupItem>
                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected3'
                  bodyRight={<Checkbox size='md' checked />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Default size with body right' />
                </CardRadioGroupItem>
                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected4'
                  bodyRight={
                    <Badge shape='pill' color='brand'>
                      Limited time only
                    </Badge>
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Default size with body right' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected5'
                  bodyLeft={<Checkbox size='md' checked type='radio' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Default size with body left' />
                </CardRadioGroupItem>
                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected6'
                  bodyLeft={
                    <Badge shape='pill' color='indigo'>
                      Limited time only
                    </Badge>
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Default size with body left' />
                </CardRadioGroupItem>
              </CardRadioGroup>
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
}

export default CardRadioGroups;
