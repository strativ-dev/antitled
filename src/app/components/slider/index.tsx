import { Col, Flex, Row, SliderSingleProps } from 'antd';
import styled from 'styled-components';

import Slider from '@/components/Atoms/Slider';

export default function Sliders() {
  const onChange = (value: number | number[]) =>
    console.log('onChange: ', value);
  const onChangeComplete = (value: number | number[]) =>
    console.log('onChangeComplete: ', value);

  const marks: SliderSingleProps['marks'] = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: { style: { color: '#f50' }, label: <strong>100°C</strong> },
  };
  const marks2: SliderSingleProps['marks'] = { 0: '0%', 25: '25%' };
  const marks3: SliderSingleProps['marks'] = { 0: '0%', 50: '50%' };
  const marks4: SliderSingleProps['marks'] = { 0: '0%', 75: '75%' };
  const marks6: SliderSingleProps['marks'] = { 50: '50%', 100: '100%' };
  const marks8: SliderSingleProps['marks'] = { 0: '0%', 100: '100%' };
  const marks9: SliderSingleProps['marks'] = { 50: '50%', 75: '75%' };
  const marks10: SliderSingleProps['marks'] = { 75: '75%', 100: '100%' };

  return (
    <Flex vertical gap='16px'>
      <h2>Sliders</h2>
      <Row gutter={[64, 32]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <h5>Draggable Track</h5>
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <h5>Graduated Slider</h5>
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ColWrapper>
            <h5>Control Visibility of Tooltip</h5>
          </ColWrapper>
        </Col>
      </Row>

      <Row gutter={[64, 32]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider range={{ draggableTrack: true }} defaultValue={[0, 25]} />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider range marks={marks2} defaultValue={[0, 25]} />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ColWrapper>
            <Slider range defaultValue={[0, 25]} tooltip={{ open: true }} />
          </ColWrapper>
        </Col>
      </Row>

      <Row gutter={[64, 32]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider range={{ draggableTrack: true }} defaultValue={[0, 50]} />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider range marks={marks3} defaultValue={[0, 50]} />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ColWrapper>
            <Slider defaultValue={50} tooltip={{ open: true }} />
          </ColWrapper>
        </Col>
      </Row>

      <Row gutter={[64, 32]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider range={{ draggableTrack: true }} defaultValue={[0, 75]} />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider range marks={marks4} defaultValue={[0, 75]} />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ColWrapper>
            <Slider defaultValue={75} tooltip={{ open: true }} />
          </ColWrapper>
        </Col>
      </Row>

      <Row gutter={[64, 32]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider range={{ draggableTrack: true }} defaultValue={[0, 100]} />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider range marks={marks8} defaultValue={[0, 100]} />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ColWrapper>
            <Slider defaultValue={100} tooltip={{ open: true }} />
          </ColWrapper>
        </Col>
      </Row>

      <Row gutter={[64, 32]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider
              range
              defaultValue={[50, 75]}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider
              range
              marks={marks9}
              defaultValue={[50, 75]}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ColWrapper>
            <Slider range defaultValue={[50, 75]} tooltip={{ open: true }} />
          </ColWrapper>
        </Col>
      </Row>

      <Row gutter={[64, 32]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider
              range
              defaultValue={[50, 100]}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider
              range
              marks={marks6}
              defaultValue={[50, 100]}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ColWrapper>
            <Slider range defaultValue={[50, 100]} tooltip={{ open: true }} />
          </ColWrapper>
        </Col>
      </Row>

      <Row gutter={[64, 32]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider
              range
              defaultValue={[75, 100]}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider
              range
              marks={marks10}
              defaultValue={[75, 100]}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ColWrapper>
            <Slider range defaultValue={[75, 100]} tooltip={{ open: true }} />
          </ColWrapper>
        </Col>
      </Row>

      <Row gutter={[64, 32]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider marks={marks} defaultValue={37} />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <ColWrapper>
            <Slider
              range
              marks={marks}
              defaultValue={[26, 37]}
              included={false}
            />
          </ColWrapper>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <ColWrapper>
            <Slider
              range
              marks={marks}
              defaultValue={[26, 37]}
              tooltip={{ open: true }}
            />
          </ColWrapper>
        </Col>
      </Row>
    </Flex>
  );
}
const ColWrapper = styled(Flex)`
  padding: 0 16px;
  margin-top: 24px;
`;
