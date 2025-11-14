import { Col, Flex, Row, SliderSingleProps } from 'antd';

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

      <Row gutter={32}>
        <Col span={8}>
          <h5>Draggable Track</h5>
        </Col>
        <Col span={8}>
          <h5>Graduated Slider</h5>
        </Col>
        <Col span={8}>
          <h5>Control Visibility of Tooltip</h5>
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={8}>
          <Slider range={{ draggableTrack: true }} defaultValue={[0, 25]} />
        </Col>
        <Col span={8}>
          <Slider range marks={marks2} defaultValue={[0, 25]} />
        </Col>
        <Col span={8}>
          <Slider range defaultValue={[0, 25]} tooltip={{ open: true }} />
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={8}>
          <Slider range={{ draggableTrack: true }} defaultValue={[0, 50]} />
        </Col>
        <Col span={8}>
          <Slider range marks={marks3} defaultValue={[0, 50]} />
        </Col>
        <Col span={8}>
          <Slider defaultValue={50} tooltip={{ open: true }} />
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={8}>
          <Slider range={{ draggableTrack: true }} defaultValue={[0, 75]} />
        </Col>
        <Col span={8}>
          <Slider range marks={marks4} defaultValue={[0, 75]} />
        </Col>
        <Col span={8}>
          <Slider defaultValue={75} tooltip={{ open: true }} />
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={8}>
          <Slider range={{ draggableTrack: true }} defaultValue={[0, 100]} />
        </Col>
        <Col span={8}>
          <Slider range marks={marks8} defaultValue={[0, 100]} />
        </Col>
        <Col span={8}>
          <Slider defaultValue={100} tooltip={{ open: true }} />
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={8}>
          <Slider
            range
            defaultValue={[50, 75]}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        </Col>
        <Col span={8}>
          <Slider
            range
            marks={marks9}
            defaultValue={[50, 75]}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        </Col>
        <Col span={8}>
          <Slider range defaultValue={[50, 75]} tooltip={{ open: true }} />
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={8}>
          <Slider
            range
            defaultValue={[50, 100]}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        </Col>
        <Col span={8}>
          <Slider
            range
            marks={marks6}
            defaultValue={[50, 100]}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        </Col>
        <Col span={8}>
          <Slider range defaultValue={[50, 100]} tooltip={{ open: true }} />
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={8}>
          <Slider
            range
            defaultValue={[75, 100]}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        </Col>
        <Col span={8}>
          <Slider
            range
            marks={marks10}
            defaultValue={[75, 100]}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        </Col>
        <Col span={8}>
          <Slider range defaultValue={[75, 100]} tooltip={{ open: true }} />
        </Col>
      </Row>

      <Row gutter={32}>
        <Col span={8}>
          <Slider marks={marks} defaultValue={37} />
        </Col>
        <Col span={8}>
          <Slider
            range
            marks={marks}
            defaultValue={[26, 37]}
            included={false}
          />
        </Col>
        <Col span={8}>
          <Slider
            range
            marks={marks}
            defaultValue={[26, 37]}
            tooltip={{ open: true }}
          />
        </Col>
      </Row>
    </Flex>
  );
}
