import { Flex } from 'antd';
import { useState } from 'react';

import { AtomSwitch } from '@/components/Atoms/Toggle';

export default function Toggles() {
  const [globalChecked, setGlobalChecked] = useState(true);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <h2>Toggles</h2>
      <Flex align='center' gap='small' style={{ marginBottom: 24 }}>
        <AtomSwitch checked={globalChecked} onChange={setGlobalChecked}>
          Toggle All
        </AtomSwitch>
      </Flex>

      <Flex gap='large' align='flex-start' wrap>
        <Flex vertical gap='large' style={{ flex: 1 }}>
          <h4>Default Variant</h4>
          <Flex gap='small' wrap align='center'>
            <AtomSwitch defaultChecked onChange={onChange} size='xs' />
            <AtomSwitch defaultChecked onChange={onChange} size='sm' />
            <AtomSwitch defaultChecked onChange={onChange} size='md' />
          </Flex>

          <Flex gap='small' wrap align='center'>
            <AtomSwitch checked size='xs' disabled />
            <AtomSwitch checked={false} size='sm' disabled />
            <AtomSwitch checked size='md' disabled />
          </Flex>

          <Flex vertical gap='small'>
            <AtomSwitch
              size='xs'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
            <AtomSwitch
              size='sm'
              checked={!globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
            <AtomSwitch
              size='md'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
          </Flex>

          <Flex vertical gap='small'>
            <AtomSwitch
              size='xs'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
            <AtomSwitch
              size='sm'
              checked={false}
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
            <AtomSwitch
              size='md'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
          </Flex>
        </Flex>

        <Flex vertical gap='large' style={{ flex: 2 }}>
          <h4>Slim Variant</h4>
          <Flex gap='small' wrap align='center'>
            <AtomSwitch
              defaultChecked
              onChange={onChange}
              size='xs'
              variant='Slim'
            />
            <AtomSwitch
              defaultChecked
              onChange={onChange}
              size='sm'
              variant='Slim'
            />
            <AtomSwitch
              defaultChecked
              onChange={onChange}
              size='md'
              variant='Slim'
            />
          </Flex>

          <Flex gap='small' wrap align='center'>
            <AtomSwitch checked variant='Slim' size='xs' disabled />
            <AtomSwitch checked={false} variant='Slim' size='sm' disabled />
            <AtomSwitch checked variant='Slim' size='md' disabled />
          </Flex>

          <Flex vertical gap='small'>
            <AtomSwitch
              variant='Slim'
              size='xs'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
            <AtomSwitch
              variant='Slim'
              size='sm'
              checked={!globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
            <AtomSwitch
              variant='Slim'
              size='md'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
          </Flex>

          <Flex vertical gap='small'>
            <AtomSwitch
              variant='Slim'
              size='xs'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
            <AtomSwitch
              variant='Slim'
              size='sm'
              checked={false}
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
            <AtomSwitch
              variant='Slim'
              size='md'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </AtomSwitch>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
