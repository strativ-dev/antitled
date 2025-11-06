import { DownloadOutlined } from '@ant-design/icons';
import {
  ArrowLeft,
  ArrowRight,
  Circle,
  Dataflow01,
  Dataflow02,
  Dataflow03,
  Dataflow04,
  Plus,
} from '@untitledui/icons';
import { Flex, RadioChangeEvent } from 'antd';
import { useState } from 'react';

import { Button, ButtonGroup } from '@/components/Atoms';

export default function ButtonGroups() {
  const [defaultSize, setDefaultSize] = useState<'sm' | 'md' | 'lg' | 'xl'>(
    'md'
  );
  const [defaultIconValue, setDefaultIconValue] = useState('pdf');
  const [defaultTextValue, setDefaultTextValue] = useState('md');

  const [primarySize, setPrimarySize] = useState<'sm' | 'md' | 'lg' | 'xl'>(
    'md'
  );
  const [primaryIconValue, setPrimaryIconValue] = useState('pdf');
  const [primaryTextValue, setPrimaryTextValue] = useState<
    'sm2' | 'md2' | 'lg2' | 'xl2'
  >('md2');

  return (
    <Flex vertical gap='small'>
      <h2>Button Group</h2>

      <Flex vertical gap='small'>
        <h4>Variant: Default</h4>

        <ButtonGroup
          value={defaultSize}
          onChange={(e: RadioChangeEvent) => setDefaultSize(e.target.value)}
          options={[
            { label: 'SM', value: 'sm' },
            { label: 'MD', value: 'md' },
            { label: 'LG', value: 'lg' },
            { label: 'XL', value: 'xl' },
          ]}
        />

        <ButtonGroup
          value={defaultIconValue}
          onChange={(e) => setDefaultIconValue(e.target.value)}
          options={[
            {
              label: 'Text',
              value: 'pdf',
              icon: <Circle size={20} />,
            },
            {
              label: 'Text',
              value: 'word',
              icon: <Circle size={20} />,
            },
            {
              label: 'Text',
              value: 'excel',
              icon: <Circle size={20} />,
            },
            {
              label: 'Text',
              value: 'download',
              icon: <Circle size={20} />,
            },
          ]}
        />

        <ButtonGroup
          value={defaultTextValue}
          onChange={(e) => setDefaultTextValue(e.target.value)}
          disabled
          options={[
            { label: 'Text', value: 'sm' },
            { label: 'Text', value: 'md' },
            { label: 'Text', value: 'lg' },
            { label: 'Text', value: 'xl' },
          ]}
        />

        <ButtonGroup
          value={defaultTextValue}
          onChange={(e) => setDefaultTextValue(e.target.value)}
          options={[
            { value: '1', icon: <ArrowLeft /> },
            { value: '2', icon: <Plus /> },
            { value: '3', icon: <ArrowRight /> },
          ]}
        />
      </Flex>

      <Flex vertical gap='1.5rem'>
        <h4>Variant: Primary</h4>

        <ButtonGroup
          value={primarySize}
          onChange={(e) => setPrimarySize(e.target.value)}
          options={[
            { label: 'Text', value: 'sm' },
            { label: 'Text', value: 'md' },
            { label: 'Text', value: 'lg' },
            { label: 'Text', value: 'xl' },
          ]}
          variant='primary'
        />

        <ButtonGroup
          value={primaryIconValue}
          onChange={(e) => setPrimaryIconValue(e.target.value)}
          options={[
            {
              label: 'Text',
              value: 'pdf',
              icon: <Dataflow01 size={12} color='#7f56d9' />,
            },
            {
              label: 'Text',
              value: 'word',
              icon: <Dataflow02 size={12} color='#7f56d9' />,
            },
            {
              label: 'Text',
              value: 'excel',
              icon: <Dataflow03 size={12} color='#7f56d9' />,
            },
            {
              label: 'Download',
              value: 'download',
              icon: <Dataflow04 size={12} color='#7f56d9' />,
            },
          ]}
          variant='primary'
        />

        <ButtonGroup
          value={primaryTextValue}
          disabled
          onChange={(e) => setPrimaryTextValue(e.target.value)}
          options={[
            { label: 'Text', value: 'sm2' },
            { label: 'Text', value: 'md2' },
            { label: 'Text', value: 'lg2' },
            { label: 'Text', value: 'xl2' },
          ]}
          variant='primary'
        />
      </Flex>

      <Flex gap='1rem' wrap>
        <Button variant='primary' size={defaultSize}>
          Primary
        </Button>
        <Button variant='secondary' size={defaultSize}>
          Secondary
        </Button>
        <Button variant='tertiary' size={defaultSize}>
          Tertiary
        </Button>
        <Button variant='link' size={defaultSize}>
          Link
        </Button>
        <Button
          variant='primary'
          icon={<DownloadOutlined />}
          size={defaultSize}
        />
        <Button
          variant='primary'
          icon={<DownloadOutlined />}
          size={defaultSize}
          color='destructive'
        />
        <Button
          variant='primary'
          icon={<DownloadOutlined />}
          size={defaultSize}>
          Download
        </Button>
      </Flex>
    </Flex>
  );
}
