import { BellPlus, MessageTextCircle02, Plus } from '@untitledui/icons';
import { Col, Row, Flex } from 'antd';

import { Badge } from '@/components/Atoms';

export default function Badges() {
  return (
    <>
      <h2>Badges</h2>
      <Flex vertical gap='large'>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Badge size='sm'>SM</Badge>
            <Badge size='md'>MD</Badge>
            <Badge size='lg'>LG</Badge>
          </Col>

          <Col span={6}>
            <Badge
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Badge color='brand' size='sm'>
              Label
            </Badge>
            <Badge color='brand' size='md'>
              Label
            </Badge>
            <Badge color='brand' size='lg'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='brand'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='brand'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='brand'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='brand' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='brand' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='brand' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='brand'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='brand'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='brand'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Badge color='error' size='sm'>
              Label
            </Badge>
            <Badge color='error' size='md'>
              Label
            </Badge>
            <Badge color='error' size='lg'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='error'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='error'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='error'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='error' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='error' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='error' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='error'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='error'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='error'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Badge color='warning' size='sm'>
              Label
            </Badge>
            <Badge color='warning' size='md'>
              Label
            </Badge>
            <Badge color='warning' size='lg'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='warning'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='warning'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='warning'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='warning' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='warning' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='warning' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='warning'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='warning'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='warning'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Badge color='success' size='sm'>
              Label
            </Badge>
            <Badge color='success' size='md'>
              Label
            </Badge>
            <Badge color='success' size='lg'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='success'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='success'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='success'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='success' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='success' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='success' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='success'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />

            <Badge
              color='success'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />

            <Badge
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
            <Badge size='sm' color='blue'>
              Label
            </Badge>
            <Badge size='md' color='blue'>
              Label
            </Badge>
            <Badge size='lg' color='blue'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              size='sm'
              color='blue'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              size='md'
              color='blue'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              size='lg'
              color='blue'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge size='sm' color='blue'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge size='md' color='blue'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge size='lg' color='blue'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              size='sm'
              color='blue'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              size='md'
              color='blue'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              size='lg'
              color='blue'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Badge color='indigo' size='sm'>
              Label
            </Badge>
            <Badge color='indigo' size='md'>
              Label
            </Badge>
            <Badge color='indigo' size='lg'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='indigo'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='indigo'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='indigo'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='indigo' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='indigo' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='indigo' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='indigo'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='indigo'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='indigo'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Badge color='purple' size='sm'>
              Label
            </Badge>
            <Badge color='purple' size='md'>
              Label
            </Badge>
            <Badge color='purple' size='lg'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='purple'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='purple'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='purple'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='purple' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='purple' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='purple' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='purple'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='purple'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='purple'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Badge color='pink' size='sm'>
              Label
            </Badge>
            <Badge color='pink' size='md'>
              Label
            </Badge>
            <Badge color='pink' size='lg'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='pink'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='pink'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='pink'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='pink' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='pink' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='pink' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='pink'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='pink'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='pink'
              size='lg'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Badge color='orange' size='sm'>
              Label
            </Badge>
            <Badge color='orange' size='md'>
              Label
            </Badge>
            <Badge color='orange' size='lg'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='orange'
              size='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='orange'
              size='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='orange'
              size='lg'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='orange' size='sm'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='orange' size='md'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='orange' size='lg'>
              Label <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='orange'
              size='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />

            <Badge
              color='orange'
              size='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />

            <Badge
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
            <Badge size='sm' radius='sm' color='primary'>
              SM
            </Badge>
            <Badge size='md' radius='sm' color='primary'>
              MD
            </Badge>
            <Badge size='lg' radius='md' color='primary'>
              LG
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              size='sm'
              radius='sm'
              color='primary'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              size='md'
              radius='sm'
              color='primary'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              size='lg'
              color='primary'
              radius='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge
              size='sm'
              radius='sm'
              color='primary'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Badge>
            <Badge
              size='md'
              radius='sm'
              color='primary'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Badge>
            <Badge
              size='lg'
              radius='md'
              color='primary'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              size='sm'
              color='primary'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              size='md'
              color='primary'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              size='lg'
              color='primary'
              radius='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 12]}>
          <Col span={6}>
            <Badge color='brand' size='sm' radius='sm'>
              Label
            </Badge>
            <Badge color='brand' size='md' radius='sm'>
              Label
            </Badge>
            <Badge color='brand' size='lg' radius='md'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='brand'
              size='sm'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='brand'
              size='md'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='brand'
              size='lg'
              radius='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='brand' size='sm' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='brand' size='md' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='brand' size='lg' radius='md'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='brand'
              size='sm'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='brand'
              size='md'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='brand'
              size='lg'
              radius='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Badge color='error' size='sm' radius='sm'>
              Label
            </Badge>
            <Badge color='error' size='md' radius='sm'>
              Label
            </Badge>
            <Badge color='error' size='lg' radius='md'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='error'
              size='sm'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='error'
              size='md'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='error'
              size='lg'
              radius='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='error' size='sm' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='error' size='md' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='error' size='lg' radius='md'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='error'
              size='sm'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='error'
              size='md'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='error'
              size='lg'
              radius='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Badge color='warning' size='sm' radius='sm'>
              Label
            </Badge>
            <Badge color='warning' size='md' radius='sm'>
              Label
            </Badge>
            <Badge color='warning' size='lg' radius='md'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='warning'
              size='sm'
              radius='sm'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Badge>
            <Badge
              color='warning'
              size='md'
              radius='sm'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Badge>
            <Badge
              color='warning'
              size='lg'
              radius='md'
              icon={<BellPlus width={12} height={12} strokeWidth={2.5} />}>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='warning' size='sm' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='warning' size='md' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='warning' size='lg' radius='md'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='warning'
              size='sm'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='warning'
              size='md'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='warning'
              size='lg'
              radius='md'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Badge color='success' size='sm' radius='sm'>
              Label
            </Badge>
            <Badge color='success' size='md' radius='sm'>
              Label
            </Badge>
            <Badge color='success' size='lg' radius='md'>
              Label
            </Badge>
          </Col>

          <Col span={6}>
            <Badge
              color='success'
              size='sm'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='success'
              size='md'
              radius='sm'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
            <Badge
              color='success'
              size='lg'
              radius='md'
              icon={
                <MessageTextCircle02 width={12} height={12} strokeWidth={2.5} />
              }>
              Label
            </Badge>
          </Col>
          <Col span={6}>
            <Badge color='success' size='sm' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='success' size='md' radius='sm'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
            <Badge color='success' size='lg' radius='md'>
              Label
              <BellPlus width={12} height={12} strokeWidth={2.5} />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge
              color='success'
              size='sm'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
              color='success'
              size='md'
              radius='sm'
              icon={<Plus width={16} height={16} strokeWidth={2.5} />}
            />
            <Badge
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
