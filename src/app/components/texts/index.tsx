import { Col, Flex, Row } from 'antd';

import { Text } from '@/components/Atoms';

export default function Texts() {
  return (
    <>
      <Text as='h2' size='display-lg' weight='regular' margin='0 0 16px 0'>
        Texts
      </Text>
      <Flex vertical gap={'large'}>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='display-2xl' weight='regular'>
              D-2xl-R
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-2xl' weight='medium' color='textTertiary600'>
              D-2xl-M
            </Text>
          </Col>
          <Col span={6}>
            <Text
              size='display-2xl'
              weight='semibold'
              color='textBrandTertiary600'>
              D-2xl-S
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-2xl' weight='bold' color='textErrorPrimary600'>
              D-2xl-B
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='display-xl' weight='regular'>
              D-xl-R
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-xl' weight='medium' color='textTertiary600'>
              D-xl-M
            </Text>
          </Col>
          <Col span={6}>
            <Text
              size='display-xl'
              weight='semibold'
              color='textBrandTertiary600'>
              D-xl-Semi
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-xl' weight='bold' color='textErrorPrimary600'>
              D-xl-B
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='display-lg' weight='regular'>
              D-lg-R
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-lg' weight='medium' color='textTertiary600'>
              D-lg-M
            </Text>
          </Col>
          <Col span={6}>
            <Text
              size='display-lg'
              weight='semibold'
              color='textBrandTertiary600'>
              D-lg-Semi
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-lg' weight='bold' color='textErrorPrimary600'>
              D-lg-B
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='display-md' weight='regular'>
              Display-md-R
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-md' weight='medium' color='textTertiary600'>
              Display-md-M
            </Text>
          </Col>
          <Col span={6}>
            <Text
              size='display-md'
              weight='semibold'
              color='textBrandTertiary600'>
              Display-md-Semi
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-md' weight='bold' color='textErrorPrimary600'>
              Display-md-B
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='display-sm' weight='regular'>
              Display-sm-Regular
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-sm' weight='medium' color='textTertiary600'>
              Display-sm-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text
              size='display-sm'
              weight='semibold'
              color='textBrandTertiary600'>
              Display-sm-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-sm' weight='bold' color='textErrorPrimary600'>
              Display-sm-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='display-xs' weight='regular'>
              Display-xs-Regular
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-xs' weight='medium' color='textTertiary600'>
              Display-xs-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text
              size='display-xs'
              weight='semibold'
              color='textBrandTertiary600'>
              Display-xs-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text size='display-xs' weight='bold' color='textErrorPrimary600'>
              Display-xs-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='text-xl' weight='regular'>
              Text-xl-Regular
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-xl' weight='medium' color='textTertiary600'>
              Text-xl-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-xl' weight='semibold' color='textBrandTertiary600'>
              Text-xl-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-xl' weight='bold' color='textErrorPrimary600'>
              Text-xl-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='text-lg' weight='regular'>
              Text-lg-Regular
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-lg' weight='medium' color='textTertiary600'>
              Text-lg-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-lg' weight='semibold' color='textBrandTertiary600'>
              Text-lg-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-lg' weight='bold' color='textErrorPrimary600'>
              Text-lg-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='text-md' weight='regular'>
              Text-md-Regular
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-md' weight='medium' color='textTertiary600'>
              Text-md-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-md' weight='semibold' color='textBrandTertiary600'>
              Text-md-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-md' weight='bold' color='textErrorPrimary600'>
              Text-md-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='text-sm' weight='regular'>
              Text-sm-Regular
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-sm' weight='medium' color='textTertiary600'>
              Text-sm-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-sm' weight='semibold' color='textBrandTertiary600'>
              Text-sm-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-sm' weight='bold' color='textErrorPrimary600'>
              Text-sm-Bold
            </Text>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Text size='text-xs' weight='regular'>
              Text-xs-Regular
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-xs' weight='medium' color='textTertiary600'>
              Text-xs-Medium
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-xs' weight='semibold' color='textBrandTertiary600'>
              Text-xs-Semibold
            </Text>
          </Col>
          <Col span={6}>
            <Text size='text-xs' weight='bold' color='textErrorPrimary600'>
              Text-xs-Bold
            </Text>
          </Col>
        </Row>
      </Flex>
    </>
  );
}
