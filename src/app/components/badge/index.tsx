import { BellPlus, MessageTextCircle02, Plus } from '@untitledui/icons';
import { Col, Row, Flex } from 'antd';

import { Tag } from '@/components/Badge';

export default function Badges() {
  return (
    <>
      <h2>Badges</h2>
      <Flex vertical gap='large'>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Tag size='sm'>SM</Tag>
            <Tag size='md'>MD</Tag>
            <Tag size='lg'>LG</Tag>
          </Col>

          <Col span={6}>
            <Tag
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Tag color='primary' size='sm'>
              Label
            </Tag>
            <Tag color='primary' size='md'>
              Label
            </Tag>
            <Tag color='primary' size='lg'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='primary'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='primary'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='primary'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='primary' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='primary' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='primary' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='primary'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='primary'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='primary'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Tag color='danger' size='sm'>
              Label
            </Tag>
            <Tag color='danger' size='md'>
              Label
            </Tag>
            <Tag color='danger' size='lg'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='danger'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='danger'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='danger'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='danger' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='danger' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='danger' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='danger'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='danger'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='danger'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Tag color='warning' size='sm'>
              Label
            </Tag>
            <Tag color='warning' size='md'>
              Label
            </Tag>
            <Tag color='warning' size='lg'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='warning'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='warning'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='warning'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='warning' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='warning' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='warning' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='warning'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='warning'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='warning'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Tag color='success' size='sm'>
              Label
            </Tag>
            <Tag color='success' size='md'>
              Label
            </Tag>
            <Tag color='success' size='lg'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='success'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='success'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='success'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='success' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='success' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='success' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='success'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />

            <Tag
              color='success'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />

            <Tag
              color='success'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
      </Flex>
      <Flex vertical gap='large' style={{ marginTop: 20 }}>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Tag size='sm' color='blue'>
              Label
            </Tag>
            <Tag size='md' color='blue'>
              Label
            </Tag>
            <Tag size='lg' color='blue'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              size='sm'
              color='blue'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              size='md'
              color='blue'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              size='lg'
              color='blue'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag size='sm' color='blue'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag size='md' color='blue'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag size='lg' color='blue'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              size='sm'
              color='blue'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              size='md'
              color='blue'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              size='lg'
              color='blue'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Tag color='indigo' size='sm'>
              Label
            </Tag>
            <Tag color='indigo' size='md'>
              Label
            </Tag>
            <Tag color='indigo' size='lg'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='indigo'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='indigo'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='indigo'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='indigo' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='indigo' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='indigo' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='indigo'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='indigo'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='indigo'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Tag color='purple' size='sm'>
              Label
            </Tag>
            <Tag color='purple' size='md'>
              Label
            </Tag>
            <Tag color='purple' size='lg'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='purple'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='purple'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='purple'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='purple' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='purple' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='purple' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='purple'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='purple'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='purple'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Tag color='pink' size='sm'>
              Label
            </Tag>
            <Tag color='pink' size='md'>
              Label
            </Tag>
            <Tag color='pink' size='lg'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='pink'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='pink'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='pink'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='pink' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='pink' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='pink' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='pink'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='pink'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='pink'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Tag color='orange' size='sm'>
              Label
            </Tag>
            <Tag color='orange' size='md'>
              Label
            </Tag>
            <Tag color='orange' size='lg'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='orange'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='orange'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='orange'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='orange' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='orange' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='orange' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='orange'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />

            <Tag
              color='orange'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />

            <Tag
              color='orange'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
      </Flex>
      <Flex vertical gap='large' style={{ marginTop: 70 }}>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Tag size='sm' radius='sm'>
              SM
            </Tag>
            <Tag size='md' radius='sm'>
              MD
            </Tag>
            <Tag size='lg' radius='md'>
              LG
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              size='sm'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              size='md'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              size='lg'
              radius='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag
              size='sm'
              radius='sm'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Tag>
            <Tag
              size='md'
              radius='sm'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Tag>
            <Tag
              size='lg'
              radius='md'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              size='sm'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              size='md'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              size='lg'
              radius='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Tag color='primary' size='sm' radius='sm'>
              Label
            </Tag>
            <Tag color='primary' size='md' radius='sm'>
              Label
            </Tag>
            <Tag color='primary' size='lg' radius='md'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='primary'
              size='sm'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='primary'
              size='md'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='primary'
              size='lg'
              radius='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='primary' size='sm' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='primary' size='md' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='primary' size='lg' radius='md'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='primary'
              size='sm'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='primary'
              size='md'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='primary'
              size='lg'
              radius='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Tag color='danger' size='sm' radius='sm'>
              Label
            </Tag>
            <Tag color='danger' size='md' radius='sm'>
              Label
            </Tag>
            <Tag color='danger' size='lg' radius='md'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='danger'
              size='sm'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='danger'
              size='md'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='danger'
              size='lg'
              radius='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='danger' size='sm' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='danger' size='md' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='danger' size='lg' radius='md'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='danger'
              size='sm'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='danger'
              size='md'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='danger'
              size='lg'
              radius='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Tag color='warning' size='sm' radius='sm'>
              Label
            </Tag>
            <Tag color='warning' size='md' radius='sm'>
              Label
            </Tag>
            <Tag color='warning' size='lg' radius='md'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='warning'
              size='sm'
              radius='sm'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Tag>
            <Tag
              color='warning'
              size='md'
              radius='sm'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Tag>
            <Tag
              color='warning'
              size='lg'
              radius='md'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='warning' size='sm' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='warning' size='md' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='warning' size='lg' radius='md'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='warning'
              size='sm'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='warning'
              size='md'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='warning'
              size='lg'
              radius='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Tag color='success' size='sm' radius='sm'>
              Label
            </Tag>
            <Tag color='success' size='md' radius='sm'>
              Label
            </Tag>
            <Tag color='success' size='lg' radius='md'>
              Label
            </Tag>
          </Col>

          <Col span={6}>
            <Tag
              color='success'
              size='sm'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='success'
              size='md'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
            <Tag
              color='success'
              size='lg'
              radius='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Tag>
          </Col>
          <Col span={6}>
            <Tag color='success' size='sm' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='success' size='md' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
            <Tag color='success' size='lg' radius='md'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Tag>
          </Col>
          <Col span={4}>
            <Tag
              color='success'
              size='sm'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='success'
              size='md'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Tag
              color='success'
              size='lg'
              radius='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
      </Flex>
    </>
  );
}
