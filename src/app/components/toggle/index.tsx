import { Flex } from 'antd';
import { useState } from 'react';

import { Switch } from '@/components/Atoms/Toggle';

export default function Toggles() {
  const [globalChecked, setGlobalChecked] = useState(true);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <h2>Toggles</h2>
      <Flex align='center' gap='small' style={{ marginBottom: 24 }}>
        <Switch checked={globalChecked} onChange={setGlobalChecked}>
          Toggle All
        </Switch>
      </Flex>

      <Flex gap='large' align='flex-start' wrap>
        <Flex vertical gap='large' style={{ flex: 1 }}>
          <h4>Default Variant</h4>
          <Flex gap='small' wrap align='center'>
            <Switch defaultChecked onChange={onChange} size='xs' />
            <Switch defaultChecked onChange={onChange} size='sm' />
            <Switch defaultChecked onChange={onChange} size='md' />
          </Flex>

          <Flex gap='small' wrap align='center'>
            <Switch checked size='xs' disabled />
            <Switch checked={false} size='sm' disabled />
            <Switch checked size='md' disabled />
          </Flex>

          <Flex vertical gap='small'>
            <Switch
              size='xs'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
            <Switch
              size='sm'
              checked={!globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
            <Switch
              size='md'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
          </Flex>

          <Flex vertical gap='small'>
            <Switch
              size='xs'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
            <Switch
              size='sm'
              checked={false}
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
            <Switch
              size='md'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
          </Flex>
        </Flex>

        <Flex vertical gap='large' style={{ flex: 2 }}>
          <h4>slim Variant</h4>
          <Flex gap='small' wrap align='center'>
            <Switch
              defaultChecked
              onChange={onChange}
              size='xs'
              variant='slim'
            />
            <Switch
              defaultChecked
              onChange={onChange}
              size='sm'
              variant='slim'
            />
            <Switch
              defaultChecked
              onChange={onChange}
              size='md'
              variant='slim'
            />
          </Flex>

          <Flex gap='small' wrap align='center'>
            <Switch checked variant='slim' size='xs' disabled />
            <Switch checked={false} variant='slim' size='sm' disabled />
            <Switch checked variant='slim' size='md' disabled />
          </Flex>

          <Flex vertical gap='small'>
            <Switch
              variant='slim'
              size='xs'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
            <Switch
              variant='slim'
              size='sm'
              checked={!globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
            <Switch
              variant='slim'
              size='md'
              checked={globalChecked}
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
          </Flex>

          <Flex vertical gap='small'>
            <Switch
              variant='slim'
              size='xs'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
            <Switch
              variant='slim'
              size='sm'
              checked={false}
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
            <Switch
              variant='slim'
              size='md'
              checked
              disabled
              supportingText='Save my login details for next time.'>
              Remember me
            </Switch>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
