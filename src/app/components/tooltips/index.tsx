import { HelpCircle, InfoCircle } from '@untitledui/icons';
import { Flex, Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';
import { useTheme } from 'styled-components';

import { Text } from '@/components/Atoms';
import { Button } from '@/components/Atoms/Button';
import { Tooltip } from '@/components/Atoms/Tooltip';

export default function Tooltips() {
  const theme = useTheme();

  const [arrow, setArrow] = useState<'show' | 'hide' | 'center'>('show');
  const text = 'This is a tooltip';
  const subtitle =
    'Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.';
  const buttonWidth = 60;

  const handleArrowChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    setArrow(value);
  };

  return (
    <>
      <Radio.Group
        size='small'
        value={arrow}
        onChange={handleArrowChange}
        style={{ marginBottom: 24 }}>
        <Radio.Button value='show'>Show Arrow</Radio.Button>
        <Radio.Button value='hide'>Hide Arrow</Radio.Button>
        <Radio.Button value='center'>Centered Arrow</Radio.Button>
      </Radio.Group>

      <Flex vertical justify='center' align='center' gap={8}>
        <Flex
          justify='center'
          align='center'
          style={{ whiteSpace: 'nowrap' }}
          gap={12}>
          <Tooltip placement='topLeft' title={text} arrow={arrow}>
            <Button>TL</Button>
          </Tooltip>
          <Tooltip placement='top' title={text} arrow={arrow}>
            <Button>Top</Button>
          </Tooltip>
          <Tooltip placement='topRight' title={text} arrow={arrow}>
            <Button>TR</Button>
          </Tooltip>
        </Flex>
        <Flex
          style={{ width: buttonWidth * 5 + 32 }}
          justify='space-between'
          align='center'
          gap={12}>
          <Flex align='center' vertical gap={12}>
            <Tooltip placement='leftTop' title={text} arrow={arrow}>
              <Button>LT</Button>
            </Tooltip>
            <Tooltip placement='left' title={text} arrow={arrow}>
              <Button>Left</Button>
            </Tooltip>
            <Tooltip placement='leftBottom' title={text} arrow={arrow}>
              <Button>LB</Button>
            </Tooltip>
          </Flex>
          <Flex align='center' vertical gap={12}>
            <Tooltip placement='rightTop' title={text} arrow={arrow}>
              <Button>RT</Button>
            </Tooltip>
            <Tooltip placement='right' title={text} arrow={arrow}>
              <Button>Right</Button>
            </Tooltip>
            <Tooltip placement='rightBottom' title={text} arrow={arrow}>
              <Button>RB</Button>
            </Tooltip>
          </Flex>
        </Flex>
        <Flex
          justify='center'
          align='center'
          style={{ whiteSpace: 'nowrap' }}
          gap={12}>
          <Tooltip placement='bottomLeft' title={text} arrow={arrow}>
            <Button>BL</Button>
          </Tooltip>
          <Tooltip placement='bottom' title={text} arrow={arrow}>
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip placement='bottomRight' title={text} arrow={arrow}>
            <Button>BR</Button>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex
        vertical
        justify='center'
        align='center'
        gap={32}
        style={{ marginTop: 64 }}>
        <Flex align='center' gap={8}>
          <Tooltip placement='left' title={text} subtitle={subtitle}>
            <InfoCircle
              width={16}
              height={16}
              color={theme.colors.foregrounds.fgQuaternary400}
            />
          </Tooltip>
          <Text weight='medium'>Left</Text>
        </Flex>

        <Flex align='center' gap={8}>
          <Text weight='medium'>Right</Text>
          <Tooltip
            subtitle={subtitle}
            placement='right'
            title={'I am at right'}>
            <HelpCircle
              width={16}
              height={16}
              color={theme.colors.foregrounds.fgQuaternary400}
            />
          </Tooltip>
        </Flex>

        <Flex vertical align='center' gap={8}>
          <Tooltip subtitle={subtitle} placement='top' title={'I am at top'}>
            <InfoCircle
              size={16}
              color={theme.colors.foregrounds.fgQuaternary400}
            />
          </Tooltip>
          <Text weight='medium'>Top</Text>
        </Flex>

        <Flex vertical align='center' gap={8}>
          <Text weight='medium'>Bottom</Text>
          <Tooltip
            subtitle={subtitle}
            placement='bottom'
            title={'I am at bottom'}
          />
        </Flex>

        <Flex vertical align='center' gap={8}>
          <Tooltip
            subtitle={subtitle}
            placement='topLeft'
            title={'I am at top left'}
          />
          <Text weight='medium'>Top Left</Text>
        </Flex>
        <Flex vertical align='center' gap={8}>
          <Text weight='medium'>Bottom Left</Text>
          <Tooltip
            subtitle={subtitle}
            placement='bottomLeft'
            title={'I am at bottom left'}
          />
        </Flex>
        <Flex vertical align='center' gap={8}>
          <Tooltip
            subtitle={subtitle}
            placement='topRight'
            title={'I am at top right'}
          />
          <Text weight='medium'>Top Right</Text>
        </Flex>
        <Flex vertical align='center' gap={8}>
          <Text weight='medium'>Bottom Right</Text>
          <Tooltip
            subtitle={subtitle}
            placement='bottomRight'
            title={'I am at bottom right'}
          />
        </Flex>
        <Flex align='center' gap={8}>
          <Tooltip
            subtitle={subtitle}
            placement='leftTop'
            title={'I am at left top'}
          />
          <Text weight='medium'>Left Top</Text>
        </Flex>
        <Flex align='center' gap={8}>
          <Tooltip
            subtitle={subtitle}
            placement='leftBottom'
            title={'I am at left bottom'}
          />
          <Text weight='medium'>Left Bottom</Text>
        </Flex>
        <Flex align='center' gap={8}>
          <Text weight='medium'>Right Top</Text>
          <Tooltip
            subtitle={subtitle}
            placement='rightTop'
            title={'I am at right top'}
          />
        </Flex>
        <Flex align='center' gap={8}>
          <Text weight='medium'>Right Bottom</Text>
          <Tooltip
            subtitle={subtitle}
            placement='rightBottom'
            title={'I am at right bottom'}
          />
        </Flex>
      </Flex>
    </>
  );
}
