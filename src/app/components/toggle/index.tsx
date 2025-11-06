import { Flex } from 'antd';
import { useState } from 'react';

import { Toggle } from '@/components/Atoms';

export default function Toggles() {
  const [globalChecked, setGlobalChecked] = useState(true);

  const onChange = (checked: boolean) => {
    console.log(`Toggle to ${checked}`);
  };
  return (
    <>
      <h2>Toggles</h2>
      <Flex align='center' gap='small' style={{ marginBottom: 24 }}>
        <Toggle checked={globalChecked} onChange={setGlobalChecked}>
          Toggle All
        </Toggle>
      </Flex>

      <Flex gap='large' align='flex-start' wrap>
        <Flex vertical gap='large' style={{ flex: 1 }}>
          <h4>Default Variant</h4>
          <Flex gap='small' wrap align='center'>
            <Toggle defaultChecked onChange={onChange} size='xs' />
            <Toggle defaultChecked onChange={onChange} size='sm' />
            <Toggle defaultChecked onChange={onChange} size='md' />
          </Flex>

          <Flex gap='small' wrap align='center'>
            <Toggle checked size='xs' disabled />
            <Toggle checked={false} size='sm' disabled />
            <Toggle checked size='md' disabled />
          </Flex>

          <Flex vertical gap='small'>
            <Toggle
              size='xs'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
            <Toggle
              size='sm'
              checked={!globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
            <Toggle
              size='md'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
          </Flex>

          <Flex vertical gap='small'>
            <Toggle
              size='xs'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
            <Toggle
              size='sm'
              checked={false}
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
            <Toggle
              size='md'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
          </Flex>
        </Flex>

        <Flex vertical gap='large' style={{ flex: 2 }}>
          <h4>slim Variant</h4>
          <Flex gap='small' wrap align='center'>
            <Toggle
              defaultChecked
              onChange={onChange}
              size='xs'
              variant='slim'
            />
            <Toggle
              defaultChecked
              onChange={onChange}
              size='sm'
              variant='slim'
            />
            <Toggle
              defaultChecked
              onChange={onChange}
              size='md'
              variant='slim'
            />
          </Flex>

          <Flex gap='small' wrap align='center'>
            <Toggle checked variant='slim' size='xs' disabled />
            <Toggle checked={false} variant='slim' size='sm' disabled />
            <Toggle checked variant='slim' size='md' disabled />
          </Flex>

          <Flex vertical gap='small'>
            <Toggle
              variant='slim'
              size='xs'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
            <Toggle
              variant='slim'
              size='sm'
              checked={!globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
            <Toggle
              variant='slim'
              size='md'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
          </Flex>

          <Flex vertical gap='small'>
            <Toggle
              variant='slim'
              size='xs'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
            <Toggle
              variant='slim'
              size='sm'
              checked={false}
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
            <Toggle
              variant='slim'
              size='md'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Toggle>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
