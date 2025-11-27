import { BellPlus, MessageTextCircle02, Plus } from '@untitledui/icons';
import { Col, Flex, Row } from 'antd';
import { t } from 'i18next';

import { Badge } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

export default function Badges() {
  return (
    <>
      <ComponentPageTitle title={t('common.Badge')} />

      <Flex vertical gap='small'>
        <Flex vertical>
          <Row gutter={[16, 12]}>
            <Col span={12}>
              <h4>Pill Shape Size</h4>
              <Flex gap='small'>
                <Badge size='sm'>SM</Badge>
                <Badge size='md'>MD</Badge>
                <Badge size='lg'>LG</Badge>
              </Flex>
            </Col>

            <Col span={12}>
              <h4>Rect Shape Size</h4>
              <Flex gap='small'>
                <Badge size='sm' shape='rect'>
                  SM
                </Badge>
                <Badge size='md' shape='rect'>
                  MD
                </Badge>
                <Badge size='lg' shape='rect'>
                  LG
                </Badge>
              </Flex>
            </Col>
          </Row>

          <Row gutter={[16, 12]}>
            <Col span={12}>
              <h4>Pill Shape (Default)</h4>
              <Flex gap='small'>
                <Badge size='sm'>Label</Badge>
                <Badge size='md'>Label</Badge>
                <Badge size='lg'>Label</Badge>
              </Flex>
            </Col>

            <Col span={12}>
              <h4>Rect Shape</h4>
              <Flex gap='small'>
                <Badge size='sm' shape='rect'>
                  Label
                </Badge>
                <Badge size='md' shape='rect'>
                  Label
                </Badge>
                <Badge size='lg' shape='rect'>
                  Label
                </Badge>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </Flex>
      <Flex vertical gap='small' style={{ marginTop: 40 }}>
        <Flex vertical>
          <h3>Variants</h3>

          <Row gutter={[16, 12]}>
            <Col span={12}>
              <h5>Pill - Solid</h5>
              <Flex gap='small'>
                <Badge size='sm' variant='solid' color='brand'>
                  Label
                </Badge>
                <Badge size='md' variant='solid' color='brand'>
                  Label
                </Badge>
                <Badge size='lg' variant='solid' color='brand'>
                  Label
                </Badge>
              </Flex>
            </Col>

            <Col span={12}>
              <h5>Rect - Solid</h5>
              <Flex gap='small'>
                <Badge size='sm' shape='rect' variant='solid' color='brand'>
                  Label
                </Badge>
                <Badge size='md' shape='rect' variant='solid' color='brand'>
                  Label
                </Badge>
                <Badge size='lg' shape='rect' variant='solid' color='brand'>
                  Label
                </Badge>
              </Flex>
            </Col>
          </Row>

          <Row gutter={[16, 12]}>
            <Col span={12}>
              <h5>Pill - Outlined</h5>
              <Flex gap='small'>
                <Badge size='sm' variant='outlined' color='brand'>
                  Label
                </Badge>
                <Badge size='md' variant='outlined' color='brand'>
                  Label
                </Badge>
                <Badge size='lg' variant='outlined' color='brand'>
                  Label
                </Badge>
              </Flex>
            </Col>

            <Col span={12}>
              <h5>Rect - Outlined</h5>
              <Flex gap='small'>
                <Badge size='sm' shape='rect' variant='outlined' color='brand'>
                  Label
                </Badge>
                <Badge size='md' shape='rect' variant='outlined' color='brand'>
                  Label
                </Badge>
                <Badge size='lg' shape='rect' variant='outlined' color='brand'>
                  Label
                </Badge>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </Flex>

      <Flex vertical gap='small'>
        <Flex vertical>
          <h3>All Colors</h3>
          <Row gutter={[16, 12]}>
            <Col span={12}>
              <h5>Pill - Solid</h5>
              <Row gutter={[8, 12]}>
                <Col span={24}>
                  <Badge color='primary' size='md'>
                    Primary
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='brand' size='md'>
                    Brand
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='success' size='md'>
                    Success
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='warning' size='md'>
                    Warning
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='error' size='md'>
                    Error
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='gray' size='md'>
                    Gray
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='gray-blue' size='md'>
                    Gray Blue
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='blue-light' size='md'>
                    Blue Light
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='blue' size='md'>
                    Blue
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='indigo' size='md'>
                    Indigo
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='purple' size='md'>
                    Purple
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='pink' size='md'>
                    Pink
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='orange' size='md'>
                    Orange
                  </Badge>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <h5>Rect - Solid</h5>
              <Row gutter={[8, 12]}>
                <Col span={24}>
                  <Badge color='primary' shape='rect' size='md'>
                    Primary
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='brand' shape='rect' size='md'>
                    Brand
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='success' shape='rect' size='md'>
                    Success
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='warning' shape='rect' size='md'>
                    Warning
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='error' shape='rect' size='md'>
                    Error
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='gray' shape='rect' size='md'>
                    Gray
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='gray-blue' shape='rect' size='md'>
                    Gray Blue
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='blue-light' shape='rect' size='md'>
                    Blue Light
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='blue' shape='rect' size='md'>
                    Blue
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='indigo' shape='rect' size='md'>
                    Indigo
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='purple' shape='rect' size='md'>
                    Purple
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='pink' shape='rect' size='md'>
                    Pink
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='orange' shape='rect' size='md'>
                    Orange
                  </Badge>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={[16, 12]} style={{ marginTop: 24 }}>
            <Col span={12}>
              <h5>Pill - Outlined</h5>
              <Row gutter={[8, 12]}>
                <Col span={24}>
                  <Badge color='primary' variant='outlined' size='md'>
                    Primary
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='brand' variant='outlined' size='md'>
                    Brand
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='success' variant='outlined' size='md'>
                    Success
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='warning' variant='outlined' size='md'>
                    Warning
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='error' variant='outlined' size='md'>
                    Error
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='gray' variant='outlined' size='md'>
                    Gray
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='gray-blue' variant='outlined' size='md'>
                    Gray Blue
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='blue-light' variant='outlined' size='md'>
                    Blue Light
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='blue' variant='outlined' size='md'>
                    Blue
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='indigo' variant='outlined' size='md'>
                    Indigo
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='purple' variant='outlined' size='md'>
                    Purple
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='pink' variant='outlined' size='md'>
                    Pink
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='orange' variant='outlined' size='md'>
                    Orange
                  </Badge>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <h4>Rect - Outlined</h4>
              <Row gutter={[8, 12]}>
                <Col span={24}>
                  <Badge
                    color='primary'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Primary
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    color='brand'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Brand
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    color='success'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Success
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    color='warning'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Warning
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    color='error'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Error
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='gray' shape='rect' variant='outlined' size='md'>
                    Gray
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    color='gray-blue'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Gray Blue
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    color='blue-light'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Blue Light
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='blue' shape='rect' variant='outlined' size='md'>
                    Blue
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    color='indigo'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Indigo
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    color='purple'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Purple
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge color='pink' shape='rect' variant='outlined' size='md'>
                    Pink
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    color='orange'
                    shape='rect'
                    variant='outlined'
                    size='md'>
                    Orange
                  </Badge>
                </Col>
              </Row>
            </Col>
          </Row>
        </Flex>
      </Flex>

      <Flex vertical gap='small'>
        <Flex vertical>
          <h3>With Icons</h3>

          <Row gutter={[16, 12]}>
            <Col span={12}>
              <h4>Pill - Left Icon</h4>
              <Row gutter={[8, 12]}>
                <Col span={24}>
                  <Badge
                    size='sm'
                    color='primary'
                    icon={
                      <MessageTextCircle02
                        width={12}
                        height={12}
                        strokeWidth={2.5}
                      />
                    }>
                    Label
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    size='md'
                    color='brand'
                    icon={
                      <MessageTextCircle02
                        width={12}
                        height={12}
                        strokeWidth={2.5}
                      />
                    }>
                    Label
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    size='lg'
                    color='success'
                    icon={
                      <MessageTextCircle02
                        width={12}
                        height={12}
                        strokeWidth={2.5}
                      />
                    }>
                    Label
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    size='lg'
                    color='error'
                    variant='outlined'
                    icon={
                      <MessageTextCircle02
                        width={12}
                        height={12}
                        strokeWidth={2.5}
                      />
                    }>
                    Label
                  </Badge>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <h4>Rect - Left Icon</h4>
              <Row gutter={[8, 12]}>
                <Col span={24}>
                  <Badge
                    size='sm'
                    shape='rect'
                    color='primary'
                    icon={
                      <MessageTextCircle02
                        width={12}
                        height={12}
                        strokeWidth={2.5}
                      />
                    }>
                    Label
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    size='md'
                    shape='rect'
                    color='brand'
                    icon={
                      <MessageTextCircle02
                        width={12}
                        height={12}
                        strokeWidth={2.5}
                      />
                    }>
                    Label
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    size='lg'
                    shape='rect'
                    color='success'
                    icon={
                      <MessageTextCircle02
                        width={12}
                        height={12}
                        strokeWidth={2.5}
                      />
                    }>
                    Label
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    size='lg'
                    shape='rect'
                    color='error'
                    variant='outlined'
                    icon={
                      <MessageTextCircle02
                        width={12}
                        height={12}
                        strokeWidth={2.5}
                      />
                    }>
                    Label
                  </Badge>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={[16, 12]} style={{ marginTop: 24 }}>
            <Col span={12}>
              <h4>Pill - Right Icon</h4>
              <Row gutter={[8, 12]}>
                <Col span={24}>
                  <Badge size='sm' color='primary'>
                    Label <BellPlus width={12} height={12} strokeWidth={2.5} />
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge size='md' color='brand'>
                    Label <BellPlus width={12} height={12} strokeWidth={2.5} />
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge size='lg' color='success'>
                    Label <BellPlus width={12} height={12} strokeWidth={2.5} />
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge size='lg' color='error' variant='outlined'>
                    Label <BellPlus width={12} height={12} strokeWidth={2.5} />
                  </Badge>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <h4>Rect - Right Icon</h4>
              <Row gutter={[8, 12]}>
                <Col span={24}>
                  <Badge size='sm' shape='rect' color='primary'>
                    Label <BellPlus width={12} height={12} strokeWidth={1.5} />
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge size='md' shape='rect' color='brand'>
                    Label <BellPlus width={12} height={12} strokeWidth={1.5} />
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge size='lg' shape='rect' color='success'>
                    Label <BellPlus width={12} height={12} strokeWidth={2.5} />
                  </Badge>
                </Col>
                <Col span={24}>
                  <Badge
                    size='lg'
                    shape='rect'
                    color='error'
                    variant='outlined'>
                    Label <BellPlus width={12} height={12} strokeWidth={2.5} />
                  </Badge>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={[16, 12]} style={{ marginTop: 24 }}>
            <Col span={12}>
              <h4>Pill - Icon Only</h4>
              <Flex gap='small'>
                <Badge
                  size='sm'
                  color='primary'
                  icon={<Plus width={16} height={16} strokeWidth={2.5} />}
                />
                <Badge
                  size='md'
                  color='brand'
                  icon={<Plus width={16} height={16} strokeWidth={2.5} />}
                />
                <Badge
                  size='lg'
                  color='success'
                  icon={<Plus width={16} height={16} strokeWidth={2.5} />}
                />
                <Badge
                  size='lg'
                  color='error'
                  icon={<Plus width={16} height={16} strokeWidth={2.5} />}
                />
              </Flex>
            </Col>

            <Col span={12}>
              <h4>Rect - Icon Only</h4>
              <Flex gap='small'>
                <Badge
                  size='sm'
                  shape='rect'
                  color='primary'
                  icon={<Plus width={16} height={16} strokeWidth={2.5} />}
                />
                <Badge
                  size='md'
                  shape='rect'
                  color='brand'
                  icon={<Plus width={16} height={16} strokeWidth={2.5} />}
                />
                <Badge
                  size='lg'
                  shape='rect'
                  color='success'
                  icon={<Plus width={16} height={16} strokeWidth={2.5} />}
                />
                <Badge
                  size='lg'
                  shape='rect'
                  color='error'
                  icon={<Plus width={16} height={16} strokeWidth={2.5} />}
                />
              </Flex>
            </Col>
          </Row>
        </Flex>
      </Flex>
    </>
  );
}
