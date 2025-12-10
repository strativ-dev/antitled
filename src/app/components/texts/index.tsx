import { Col, Flex, Row } from 'antd';

import { Text } from '@/components/Atoms';

export default function Texts() {
  return (
    <>
      <Text as='h2' variant='display-xl-regular' margin='0 0 16px 0'>
        Texts
      </Text>
      <Flex vertical gap={'large'}>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='display-2xl-regular'>D-2xl-R</Text>
          </Col>
          <Col span={6}>
            <Text variant='display-2xl-medium' color='textTertiary600'>
              D-2xl-M
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-2xl-semibold' color='textBrandTertiary600'>
              D-2xl-SB
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-2xl-bold' color='textErrorPrimary600'>
              D-2xl-B
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='display-xl-regular'>D-xl-R</Text>
          </Col>
          <Col span={6}>
            <Text variant='display-xl-medium' color='textTertiary600'>
              D-xl-M
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-xl-semibold' color='textBrandTertiary600'>
              D-xl-Semi
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-xl-bold' color='textErrorPrimary600'>
              D-xl-B
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='display-xl-regular'>D-lg-R</Text>
          </Col>
          <Col span={6}>
            <Text variant='display-lg-medium' color='textTertiary600'>
              D-lg-M
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-lg-semibold' color='textBrandTertiary600'>
              D-lg-Semi
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-lg-bold' color='textErrorPrimary600'>
              D-lg-B
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='display-md-regular'>Display-md-R</Text>
          </Col>
          <Col span={6}>
            <Text variant='display-md-medium' color='textTertiary600'>
              Display-md-M
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-md-semibold' color='textBrandTertiary600'>
              Display-md-Semi
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-md-bold' color='textErrorPrimary600'>
              Display-md-B
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='display-sm-regular'>Display-sm-Regular</Text>
          </Col>
          <Col span={6}>
            <Text variant='display-sm-medium' color='textTertiary600'>
              Display-sm-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-sm-semibold' color='textBrandTertiary600'>
              Display-sm-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-sm-bold' color='textErrorPrimary600'>
              Display-sm-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='display-xs-regular'>Display-xs-Regular</Text>
          </Col>
          <Col span={6}>
            <Text variant='display-xs-medium' color='textTertiary600'>
              Display-xs-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-xs-semibold' color='textBrandTertiary600'>
              Display-xs-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='display-xs-bold' color='textErrorPrimary600'>
              Display-xs-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='text-xl-regular'>Text-xl-Regular</Text>
          </Col>
          <Col span={6}>
            <Text variant='text-xl-medium' color='textTertiary600'>
              Text-xl-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-xl-semibold' color='textBrandTertiary600'>
              Text-xl-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-xl-bold' color='textErrorPrimary600'>
              Text-xl-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='text-lg-regular'>Text-lg-Regular</Text>
          </Col>
          <Col span={6}>
            <Text variant='text-lg-medium' color='textTertiary600'>
              Text-lg-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-lg-semibold' color='textBrandTertiary600'>
              Text-lg-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-lg-bold' color='textErrorPrimary600'>
              Text-lg-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='text-md-regular'>Text-md-Regular</Text>
          </Col>
          <Col span={6}>
            <Text variant='text-md-medium' color='textTertiary600'>
              Text-md-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-md-semibold' color='textBrandTertiary600'>
              Text-md-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-md-bold' color='textErrorPrimary600'>
              Text-md-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='text-sm-regular'>Text-sm-Regular</Text>
          </Col>
          <Col span={6}>
            <Text variant='text-sm-medium' color='textTertiary600'>
              Text-sm-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-sm-semibold' color='textBrandTertiary600'>
              Text-sm-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-sm-bold' color='textErrorPrimary600'>
              Text-sm-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text variant='text-xs-regular'>Text-xs-Regular</Text>
          </Col>
          <Col span={6}>
            <Text variant='text-xs-medium' color='textTertiary600'>
              Text-xs-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-xs-semibold' color='textBrandTertiary600'>
              Text-xs-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text variant='text-xs-bold' color='textErrorPrimary600'>
              Text-xs-Bold
            </Text>
          </Col>
        </Row>
      </Flex>
    </>
  );
}
