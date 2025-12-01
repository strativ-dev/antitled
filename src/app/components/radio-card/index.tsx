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

  const isChecked = (value: string) => defaultSelected === value;

  return (
    <Flex vertical gap='large'>
      <ComponentPageTitle title={t('common.Card_radio_group')} />
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
              <h4>Basic card with header</h4>
              <CardRadioGroupItem
                title='Small Size'
                size='sm'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                title='Default Size'
                size='md'
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Basic $10/month' />
              </CardRadioGroupItem>
            </Flex>

            <Flex vertical gap='small'>
              <h4>Default Simple card with body extra</h4>

              <Flex vertical gap='small'>
                <h5>Checkbox</h5>

                <CardRadioGroupItem
                  bodyRight={<Checkbox />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  bodyLeft={<Checkbox type='radio' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  bodyLeft={<Checkbox type='radio' />}
                  bodyRight={<Checkbox />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>
              </Flex>

              <Flex vertical gap='small'>
                <h5>Badge</h5>

                <CardRadioGroupItem
                  bodyRight={
                    <Badge shape='pill' color='brand'>
                      Body right
                    </Badge>
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  bodyLeft={
                    <Badge shape='pill' color='indigo'>
                      Body left
                    </Badge>
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  bodyRight={
                    <Badge shape='pill' color='pink'>
                      Body right
                    </Badge>
                  }
                  bodyLeft={
                    <Badge shape='pill' color='orange'>
                      Body left
                    </Badge>
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <h5>Avater</h5>

                <CardRadioGroupItem
                  bodyLeft={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  bodyRight={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  bodyRight={<Avatar src='/assets/dummy/images/zoro-dp.webp' />}
                  bodyLeft={<Avatar src='/assets/dummy/images/luffy-dp.png' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>
              </Flex>

              <Flex vertical gap='small'>
                <h4>Basic card with header extra</h4>

                <h5>Checkbox</h5>

                <CardRadioGroupItem
                  title='Basic plan'
                  headerRight={<Checkbox />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  title='Basic plan'
                  headerLeft={<Checkbox type='radio' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  title='Basic plan'
                  headerRight={<Checkbox />}
                  headerLeft={<Checkbox type='radio' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic $10/month' />
                </CardRadioGroupItem>

                <h5>Badge</h5>

                <CardRadioGroupItem
                  title='Basic plan'
                  headerRight={
                    <Badge shape='rect' color='blue-light'>
                      Header right
                    </Badge>
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  title='Basic plan'
                  headerLeft={
                    <Badge shape='rect' color='success'>
                      Header left
                    </Badge>
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  title='Basic plan'
                  headerRight={
                    <Badge shape='rect' color='brand'>
                      Header right
                    </Badge>
                  }
                  headerLeft={
                    <Badge shape='rect' color='orange'>
                      Header left
                    </Badge>
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <h5>Avater</h5>

                <CardRadioGroupItem
                  title='Basic plan'
                  headerRight={
                    <Avatar src='/assets/dummy/images/luffy-dp.png' />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  title='Basic plan'
                  headerLeft={
                    <Avatar src='/assets/dummy/images/zoro-dp.webp' />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  title='Basic plan'
                  headerRight={
                    <Avatar src='/assets/dummy/images/nami-dp.webp' />
                  }
                  headerLeft={
                    <Avatar src='/assets/dummy/images/sanji-dp.webp' />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan $10/month' />
                </CardRadioGroupItem>
              </Flex>
            </Flex>
            <Flex vertical gap='small'>
              <h4>Disable</h4>
              <CardRadioGroupItem
                disabled
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Basic plan $10/month' />
              </CardRadioGroupItem>

              <CardRadioGroupItem
                disabled
                bodyLeft={<Checkbox disabled type='radio' />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Basic plan $10/month' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                disabled
                bodyRight={
                  <Badge shape='pill' color='indigo'>
                    Body right
                  </Badge>
                }
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Basic plan $10/month' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                disabled
                title='Basic plan'
                headerRight={<Checkbox disabled />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                <CardRadioGroupItem.Meta title='Basic plan $10/month' />
              </CardRadioGroupItem>
              <CardRadioGroupItem
                disabled
                title='Basic plan'
                headerLeft={<Checkbox disabled />}
                description='Includes up to 10 users, 20 GB individual data and access to all features.'>
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
                  bodyRight={
                    <Badge shape='pill' color='indigo' size='sm'>
                      Body right
                    </Badge>
                  }
                  bodyLeft={<Avatar src='/assets/dummy/images/luffy-dp.png' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  size='sm'
                  value='smallSelected2'
                  bodyRight={
                    <Badge shape='pill' color='purple' size='sm'>
                      Body right
                    </Badge>
                  }
                  bodyLeft={<Avatar src='/assets/dummy/images/zoro-dp.webp' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  size='md'
                  value='smallSelected3'
                  bodyRight={
                    <Badge shape='pill' color='pink' size='sm'>
                      Body right
                    </Badge>
                  }
                  bodyLeft={<Avatar src='/assets/dummy/images/nami-dp.webp' />}
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
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
                  bodyRight={
                    <Checkbox
                      size='md'
                      checked={isChecked('defaultSelected1')}
                    />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
                </CardRadioGroupItem>
                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected2'
                  bodyRight={
                    <Checkbox
                      size='md'
                      checked={isChecked('defaultSelected2')}
                    />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
                </CardRadioGroupItem>
                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected3'
                  bodyRight={
                    <Checkbox
                      size='md'
                      checked={isChecked('defaultSelected3')}
                    />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected4'
                  disabled
                  bodyRight={
                    <Checkbox
                      size='md'
                      checked={isChecked('defaultSelected4')}
                      disabled
                    />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
                </CardRadioGroupItem>
              </CardRadioGroup>
            </Flex>
            <Flex vertical gap='small'>
              <h4>Default size with header</h4>
              <CardRadioGroup
                value={defaultSelected}
                onChange={setDefaultSelected}>
                <CardRadioGroupItem
                  size='md'
                  title='Basic plan'
                  value='defaultSelected1'
                  headerRight={
                    <Checkbox
                      size='md'
                      checked={isChecked('defaultSelected1')}
                    />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
                </CardRadioGroupItem>
                <CardRadioGroupItem
                  size='md'
                  title='Basic plan'
                  value='defaultSelected2'
                  headerRight={
                    <Checkbox
                      size='md'
                      checked={isChecked('defaultSelected2')}
                    />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
                </CardRadioGroupItem>
                <CardRadioGroupItem
                  size='md'
                  title='Basic plan'
                  value='defaultSelected3'
                  headerRight={
                    <Checkbox
                      size='md'
                      checked={isChecked('defaultSelected3')}
                    />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
                </CardRadioGroupItem>

                <CardRadioGroupItem
                  size='md'
                  value='defaultSelected4'
                  disabled
                  title='Basic plan'
                  headerRight={
                    <Checkbox
                      size='md'
                      checked={isChecked('defaultSelected4')}
                      disabled
                    />
                  }
                  description='Includes up to 10 users, 20 GB individual data and access to all features.'>
                  <CardRadioGroupItem.Meta title='Basic plan' />
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
