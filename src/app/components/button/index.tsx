import { HomeOutlined } from '@ant-design/icons';
import { Flex } from 'antd';

import { Button } from '@/components/Atoms';

export default function Buttons() {
  return (
    <>
      <h2>Buttons</h2>
      <Flex vertical gap='large'>
        <Flex gap='small' wrap align='center'>
          <Button size='sm'>SM</Button>
          <Button size='md'>MD</Button>
          <Button size='lg'>LG</Button>
          <Button size='xl'>XL</Button>
        </Flex>

        {/* Primary */}
        <h4 style={{ margin: 0 }}>Primary (Default Button)</h4>
        <Flex gap='small' wrap align='center'>
          <Button variant='primary' size='sm'>
            Primary
          </Button>
          <Button variant='primary' size='md' loading>
            Primary
          </Button>
          <Button variant='primary' size='lg'>
            Primary
          </Button>
          <Button variant='primary' size='xl'>
            Primary
          </Button>
          <Button variant='primary' size='xl' disabled>
            Primary Disabled
          </Button>
          <Button variant='primary' size='xl' icon={<HomeOutlined />}>
            Primary
          </Button>
          <Button variant='primary' size='xl' icon={<HomeOutlined />} />
        </Flex>
        {/* Secondary */}
        <h4 style={{ margin: 0 }}>Secondary</h4>
        <Flex gap='small' wrap align='center'>
          <Button variant='secondary' size='sm'>
            Secondary
          </Button>
          <Button variant='secondary' size='md' loading>
            Secondary
          </Button>
          <Button variant='secondary' size='lg'>
            Secondary
          </Button>
          <Button variant='secondary' size='xl'>
            Secondary
          </Button>
          <Button variant='secondary' size='xl' disabled>
            Secondary
          </Button>
          <Button variant='secondary' size='xl' icon={<HomeOutlined />}>
            Secondary
          </Button>
          <Button variant='secondary' size='xl' icon={<HomeOutlined />} />
        </Flex>
        {/* Tertiary */}
        <h4 style={{ margin: 0 }}>Tertiary</h4>
        <Flex gap='small' wrap align='center'>
          <Button variant='tertiary' size='sm'>
            Tertiary
          </Button>
          <Button variant='tertiary' size='md' loading>
            Tertiary
          </Button>
          <Button variant='tertiary' size='lg'>
            Tertiary
          </Button>
          <Button variant='tertiary' size='xl'>
            Tertiary
          </Button>
          <Button variant='tertiary' size='xl' disabled>
            Tertiary
          </Button>
          <Button variant='tertiary' size='xl' icon={<HomeOutlined />}>
            Tertiary
          </Button>
          <Button variant='tertiary' size='xl' icon={<HomeOutlined />} />
        </Flex>
        {/* Link */}
        <h4 style={{ margin: 0 }}>Link</h4>
        <Flex gap='small' wrap align='center'>
          <Button variant='link' size='sm'>
            Link
          </Button>
          <Button variant='link' size='md' loading>
            Link Loading
          </Button>
          <Button variant='link' size='lg'>
            Link
          </Button>
          <Button variant='link' size='xl'>
            Link
          </Button>
          <Button variant='link' size='xl' disabled>
            Link Disabled
          </Button>
          <Button variant='link' size='xl' icon={<HomeOutlined />}>
            Link
          </Button>
          <Button variant='link' size='xl' icon={<HomeOutlined />} />
        </Flex>

        <h4 style={{ margin: 0 }}>Link Gray</h4>
        <Flex gap='small' wrap align='center'>
          <Button variant='link' size='sm' color='gray'>
            Link
          </Button>
          <Button variant='link' size='md' color='gray' loading>
            Link Loading
          </Button>
          <Button variant='link' size='lg' color='gray'>
            Link
          </Button>
          <Button variant='link' size='xl' color='gray'>
            Link
          </Button>
          <Button variant='link' size='xl' color='gray' disabled>
            Link Disabled
          </Button>
          <Button variant='link' size='xl' icon={<HomeOutlined />} color='gray'>
            Link
          </Button>
          <Button
            variant='link'
            size='xl'
            icon={<HomeOutlined />}
            color='default'
          />
        </Flex>

        {/* Primary color destructive */}
        <h4 style={{ margin: 0 }}>Primary destructive</h4>
        <Flex gap='small' wrap align='center'>
          <Button variant='primary' size='sm' color='destructive'>
            primary
          </Button>
          <Button variant='primary' size='md' color='destructive'>
            primary
          </Button>
          <Button variant='primary' size='md' color='destructive' loading>
            primary
          </Button>
          <Button variant='primary' size='lg' color='destructive'>
            primary
          </Button>
          <Button variant='primary' size='xl' color='destructive'>
            primary
          </Button>
          <Button variant='primary' size='xl' color='destructive' disabled>
            primary destructive disabled
          </Button>
          <Button
            variant='primary'
            size='xl'
            color='destructive'
            icon={<HomeOutlined />}>
            primary
          </Button>
          <Button
            variant='primary'
            size='xl'
            color='destructive'
            icon={<HomeOutlined />}
          />
        </Flex>
        {/* Secondary */}
        <h4 style={{ margin: 0 }}>Secondary destructive</h4>
        <Flex gap='small' wrap align='center'>
          <Button variant='secondary' size='sm' color='destructive'>
            Secondary
          </Button>
          <Button variant='secondary' size='md' color='destructive'>
            Secondary
          </Button>
          <Button variant='secondary' size='lg' color='destructive'>
            Secondary
          </Button>
          <Button variant='secondary' size='xl' color='destructive'>
            Secondary
          </Button>
          <Button
            variant='secondary'
            size='xl'
            icon={<HomeOutlined />}
            color='destructive'>
            Secondary
          </Button>
          <Button
            variant='secondary'
            size='xl'
            icon={<HomeOutlined />}
            color='destructive'
          />
        </Flex>
        {/* Tertiary */}
        <h4 style={{ margin: 0 }}>Tertiary destructive</h4>
        <Flex gap='small' wrap align='center'>
          <Button variant='tertiary' size='sm' color='destructive'>
            Tertiary
          </Button>
          <Button variant='tertiary' size='md' color='destructive'>
            Tertiary
          </Button>
          <Button variant='tertiary' size='md' color='destructive'>
            Tertiary
          </Button>
          <Button variant='tertiary' size='lg' color='destructive'>
            Tertiary
          </Button>
          <Button variant='tertiary' size='xl' color='destructive'>
            Tertiary
          </Button>
          <Button variant='tertiary' size='xl' color='destructive'>
            Tertiary
          </Button>
          <Button
            variant='tertiary'
            size='xl'
            icon={<HomeOutlined />}
            color='destructive'>
            Tertiary
          </Button>
          <Button
            variant='tertiary'
            size='xl'
            icon={<HomeOutlined />}
            color='destructive'
          />
        </Flex>
        {/* Link */}
        <h4 style={{ margin: 0 }}>Link destructive</h4>
        <Flex gap='small' wrap align='center'>
          <Button variant='link' size='sm' color='destructive'>
            Link
          </Button>
          <Button variant='link' size='md' color='destructive'>
            Link
          </Button>
          <Button variant='link' size='lg' color='destructive'>
            Link
          </Button>
          <Button variant='link' size='xl' color='destructive'>
            Link
          </Button>
          <Button
            variant='link'
            size='xl'
            icon={<HomeOutlined />}
            color='destructive'>
            Link
          </Button>
          <Button
            variant='link'
            size='xl'
            icon={<HomeOutlined />}
            color='destructive'
          />
        </Flex>
      </Flex>
    </>
  );
}
