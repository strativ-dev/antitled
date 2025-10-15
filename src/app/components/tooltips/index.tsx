import { HelpCircle } from '@untitledui/icons';
import { Col, Flex, Row } from 'antd';

import { COLORS } from '@/config/styles';

import { Button } from '@/components/Atoms/Button';
import { Tooltip } from '@/components/Atoms/Tooltip';

export default function Tooltips() {
  return (
    <>
      <h2>Tooltips</h2>

      <Flex vertical gap={'large'}>
        <h4 style={{ margin: 0 }}>Arrow Hide</h4>

        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip placement='top' title='This is a tooltip' arrow='Hide'>
              <Button>Top Hide</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              arrow='Hide'
              title='This is a tooltip'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
            />
          </Col>
        </Row>
        <h4 style={{ margin: 0 }}>Top</h4>

        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip placement='top' title='This is a tooltip'>
              <Button>Top</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='top'
              title='This is a tooltip'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
            />
          </Col>
        </Row>
        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip placement='topLeft' title='This is a tooltip'>
              <Button>Top Left</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='topLeft'
              title='This is a tooltip'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
            />
          </Col>
        </Row>

        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip placement='topRight' title='This is a tooltip'>
              <Button>Top Right</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='topRight'
              title='This is a tooltip'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
            />
          </Col>
        </Row>

        <h4 style={{ margin: 0 }}>Bottom</h4>

        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip placement='bottom' title='This is a tooltip'>
              <Button>Bottom</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='bottom'
              title='This is a tooltip'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
            />
          </Col>
        </Row>
        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip placement='bottomLeft' title='This is a tooltip'>
              <Button>Bottom Left</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='bottomLeft'
              title='This is a tooltip'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
            />
          </Col>
        </Row>
        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip placement='bottomRight' title='This is a tooltip'>
              <Button>Bottom Right</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='bottomRight'
              title='This is a tooltip'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
            />
          </Col>
        </Row>
        <h4 style={{ margin: 0 }}>LG Arrow Hide</h4>

        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip
              placement='top'
              title='This is a tooltip'
              arrow='Hide'
              type='with-subtitle'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'>
              <Button>Top Hide</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='top'
              title='This is a tooltip'
              arrow='Hide'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
              type='with-subtitle'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
            />
          </Col>
        </Row>
        <h4 style={{ margin: 0 }}>LG Top</h4>

        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip
              placement='top'
              title='This is a tooltip'
              type='with-subtitle'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'>
              <Button>Top</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='top'
              title='This is a tooltip'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
              type='with-subtitle'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
            />
          </Col>
        </Row>
        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip
              type='with-subtitle'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
              placement='topLeft'
              title='This is a tooltip'>
              <Button>LG Top Left</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              type='with-subtitle'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
              placement='topLeft'
              title='This is a tooltip'
            />
          </Col>
        </Row>

        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip
              placement='topRight'
              type='with-subtitle'
              title='This is a tooltip'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'>
              <Button>LG Top Right</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              type='with-subtitle'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
              placement='topRight'
              title='This is a tooltip'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
            />
          </Col>
        </Row>

        <h4 style={{ margin: 0 }}>Bottom</h4>

        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip
              placement='bottom'
              title='This is a tooltip'
              type='with-subtitle'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'>
              <Button>LG Bottom</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='bottom'
              title='This is a tooltip'
              type='with-subtitle'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
            />
          </Col>
        </Row>
        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip
              placement='bottomLeft'
              title='This is a tooltip'
              type='with-subtitle'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'>
              <Button>LG Bottom Left</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='bottomLeft'
              title='This is a tooltip'
              type='with-subtitle'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
            />
          </Col>
        </Row>
        <Row gutter={[0, 48]}>
          <Col span={6}>
            <Tooltip
              placement='bottomRight'
              title='This is a tooltip'
              type='with-subtitle'
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'>
              <Button>LG Bottom Right</Button>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip
              placement='bottomRight'
              title='This is a tooltip'
              type='with-subtitle'
              helperIcon={
                <HelpCircle
                  width={16}
                  height={16}
                  color={COLORS['Gray (light mode)'][400]}
                />
              }
              subtitle='Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
            />
          </Col>
        </Row>
      </Flex>
    </>
  );
}
