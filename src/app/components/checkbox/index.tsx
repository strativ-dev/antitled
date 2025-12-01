import { Col, Divider, Flex, Row } from 'antd';
import { t } from 'i18next';
import { useState } from 'react';

import { Button, Checkbox } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

const groupOptions = ['Checkbox', 'Group Checkbox'];

export default function CheckboxesDemo() {
  const [smChecked, setSmChecked] = useState(false);
  const [mdChecked, setMdChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [smRadioChecked, setSmRadioChecked] = useState(false);
  const [mdRadioChecked, setMdRadioChecked] = useState(false);
  const [radioDisabled, setRadioDisabled] = useState(false);

  const [smGroupChecked, setSmGroupChecked] = useState<string[]>(['Checkbox']);
  const [mdGroupChecked, setMdGroupChecked] = useState<string[]>(['Checkbox']);
  const [groupDisabled, setGroupDisabled] = useState(false);

  return (
    <Flex style={{ padding: '2rem' }} vertical>
      <ComponentPageTitle title={t('common.Checkbox')} />

      <Flex vertical>
        <h4>Default checkboxes</h4>
        <Row gutter={32}>
          <Col span={6}>
            <Flex gap='1rem' vertical>
              <Checkbox
                size='sm'
                checked={smChecked}
                disabled={disabled}
                onChange={(e) => setSmChecked(e.target.checked)}>
                Small Checkbox
              </Checkbox>
              <Checkbox
                size='sm'
                supportingText='Save my login details for next time.'
                checked={smChecked}
                disabled={disabled}
                onChange={(e) => setSmChecked(e.target.checked)}>
                Remember me
              </Checkbox>
            </Flex>
          </Col>
          <Col span={6}>
            <Flex gap='1rem' vertical>
              <Checkbox
                size='md'
                checked={mdChecked}
                disabled={disabled}
                onChange={(e) => setMdChecked(e.target.checked)}>
                Medium Checkbox
              </Checkbox>
              <Checkbox
                size='md'
                supportingText='Save my login details for next time.'
                checked={mdChecked}
                disabled={disabled}
                onChange={(e) => setMdChecked(e.target.checked)}>
                Remember me
              </Checkbox>
            </Flex>
          </Col>
        </Row>
        <Flex gap='0.5rem' style={{ marginTop: '0.5rem' }}>
          <Button
            size='sm'
            onClick={() => setSmChecked(!smChecked)}
            variant='primary'>
            {smChecked ? 'Uncheck sm' : 'Check sm'}
          </Button>
          <Button size='sm' onClick={() => setMdChecked(!mdChecked)}>
            {mdChecked ? 'Uncheck md' : 'Check md'}
          </Button>
          <Button
            size='sm'
            onClick={() => setDisabled(!disabled)}
            variant='primary'
            color={disabled ? undefined : 'destructive'}>
            {disabled ? 'Enable All' : 'Disable All'}
          </Button>
        </Flex>
      </Flex>

      <Divider />

      <Flex vertical>
        <h4>Radio Checkboxes</h4>
        <Row gutter={32}>
          <Col span={6}>
            <Flex gap='1rem' vertical>
              <Checkbox
                type='radio'
                size='sm'
                checked={smRadioChecked}
                disabled={radioDisabled}
                onChange={(e) => setSmRadioChecked(e.target.checked)}>
                Small Radio
              </Checkbox>
              <Checkbox
                type='radio'
                size='sm'
                supportingText='Save my login details for next time.'
                checked={smRadioChecked}
                disabled={radioDisabled}
                onChange={(e) => setSmRadioChecked(e.target.checked)}>
                Remember me
              </Checkbox>
            </Flex>
          </Col>
          <Col span={6}>
            <Flex gap='1rem' vertical>
              <Checkbox
                type='radio'
                size='md'
                checked={mdRadioChecked}
                disabled={radioDisabled}
                onChange={(e) => setMdRadioChecked(e.target.checked)}>
                Medium Radio
              </Checkbox>
              <Checkbox
                type='radio'
                size='md'
                supportingText='Save my login details for next time.'
                checked={mdRadioChecked}
                disabled={radioDisabled}
                onChange={(e) => setMdRadioChecked(e.target.checked)}>
                Remember me
              </Checkbox>
            </Flex>
          </Col>
        </Row>
        <Flex gap='0.5rem' style={{ marginTop: '0.5rem' }}>
          <Button
            size='sm'
            onClick={() => setSmRadioChecked(!smRadioChecked)}
            variant='primary'>
            {smRadioChecked ? 'Uncheck sm' : 'Check sm'}
          </Button>
          <Button
            size='sm'
            onClick={() => setMdRadioChecked(!mdRadioChecked)}
            variant='primary'>
            {mdRadioChecked ? 'Uncheck md' : 'Check md'}
          </Button>
          <Button
            size='sm'
            onClick={() => setRadioDisabled(!radioDisabled)}
            variant='primary'
            color={radioDisabled ? undefined : 'destructive'}>
            {radioDisabled ? 'Enable All' : 'Disable All'}
          </Button>
        </Flex>
      </Flex>

      <Divider />

      <Flex vertical>
        <h4>Checkbox Groups</h4>
        <Row gutter={32}>
          <Col span={6}>
            <Flex gap='1rem' vertical>
              <Checkbox
                size='sm'
                indeterminate={
                  smGroupChecked.length > 0 &&
                  smGroupChecked.length < groupOptions.length
                }
                onChange={(e) =>
                  setSmGroupChecked(e.target.checked ? groupOptions : [])
                }
                checked={smGroupChecked.length === groupOptions.length}
                disabled={groupDisabled}>
                Check all small
              </Checkbox>
              <Checkbox.Group
                size='sm'
                options={groupOptions}
                value={smGroupChecked}
                onChange={(list) => setSmGroupChecked(list)}
                disabled={groupDisabled}
              />
            </Flex>
          </Col>
          <Col span={6}>
            <Flex gap='1rem' vertical>
              <Checkbox
                size='md'
                indeterminate={
                  mdGroupChecked.length > 0 &&
                  mdGroupChecked.length < groupOptions.length
                }
                onChange={(e) =>
                  setMdGroupChecked(e.target.checked ? groupOptions : [])
                }
                checked={mdGroupChecked.length === groupOptions.length}
                disabled={groupDisabled}>
                Check all medium
              </Checkbox>
              <Checkbox.Group
                size='md'
                options={groupOptions}
                value={mdGroupChecked}
                onChange={(list) => setMdGroupChecked(list)}
                disabled={groupDisabled}
              />
            </Flex>
          </Col>
        </Row>
        <Flex gap='0.5rem' style={{ marginTop: '0.5rem' }}>
          <Button
            size='sm'
            variant='primary'
            onClick={() =>
              setSmGroupChecked(
                smGroupChecked.length === groupOptions.length
                  ? []
                  : [...groupOptions]
              )
            }>
            {smGroupChecked.length === groupOptions.length
              ? 'Uncheck sm'
              : 'Check sm'}
          </Button>
          <Button
            size='sm'
            variant='primary'
            onClick={() =>
              setMdGroupChecked(
                mdGroupChecked.length === groupOptions.length
                  ? []
                  : [...groupOptions]
              )
            }>
            {mdGroupChecked.length === groupOptions.length
              ? 'Uncheck md'
              : 'Check md'}
          </Button>
          <Button
            size='sm'
            variant='primary'
            color={groupDisabled ? undefined : 'destructive'}
            onClick={() => setGroupDisabled(!groupDisabled)}>
            {groupDisabled ? 'Enable All' : 'Disable All'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
