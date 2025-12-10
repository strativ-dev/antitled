import { Flex } from 'antd';

import { PIRATES } from '@/lib/dummy';
import { createInitials } from '@/lib/utils/helpers';

import { Avatar, Text } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

export default function AvatarPage() {
  return (
    <>
      <ComponentPageTitle title='Avatar Component' />
      <Flex vertical gap={32}>
        <Text variant='text-lg-medium' as='h2'>
          <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>,{' '}
          <code>xl</code>, <code>2xl</code>
        </Text>
        <Flex gap={8} align='center'>
          {PIRATES.slice(0, 5).map((pirate) => (
            <Avatar
              key={pirate.name}
              size='xs'
              src={pirate.avatar}
              alt={`Avatar XS - ${pirate.name}`}
            />
          ))}
          <Avatar
            size='2xl'
            src='/assets/dummy/images/luffyy-dp.png'
            alt='Avatar 2XL'>
            <Text variant='display-xs-semibold' color='textQuaternary500'>
              {createInitials('Monkey D. Luffy')}
            </Text>
          </Avatar>
        </Flex>
        <Flex gap={8} align='center'>
          <Avatar
            status='online'
            size='xs'
            src='/assets/dummy/images/nami-dp.webp'
            alt='Avatar XS'
          />
          <Avatar
            status='online'
            size='sm'
            src='/assets/dummy/images/nami-dp.webp'
            alt='Avatar SM'
          />
          <Avatar
            status='online'
            size='md'
            src='/assets/dummy/images/nami-dp.webp'
            alt='Avatar MD'
          />
          <Avatar
            status='online'
            size='lg'
            src='/assets/dummy/images/nami-dp.webp'
            alt='Avatar LG'
          />
          <Avatar
            status='online'
            size='xl'
            src='/assets/dummy/images/nami-dp.webp'
            alt='Avatar XL'
          />
          <Avatar
            status='online'
            size='2xl'
            src='/assets/dummy/images/namii-dp.webp'
            alt='Avatar 2XL'>
            <Text variant='display-xs-semibold' color='textQuaternary500'>
              {createInitials('Nami Cat Burglar')}
            </Text>
          </Avatar>
        </Flex>

        <Text variant='text-lg-medium' as='h2'>
          Avatar Group
          <Text style={{ display: 'block' }} variant='text-lg-medium' as='h2'>
            <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>,{' '}
            <code>xl</code>, <code>2xl</code>
          </Text>
        </Text>
        <Avatar.Group size={'xs'}>
          {PIRATES.slice(0, 8).map((pirate) => (
            <Avatar
              key={pirate.name}
              src={pirate.avatar}
              alt={`Avatar XS - ${pirate.name}`}
            />
          ))}
        </Avatar.Group>
        <Avatar.Group size={'sm'}>
          {PIRATES.slice(0, 8).map((pirate) => (
            <Avatar
              key={pirate.name}
              src={pirate.avatar}
              alt={`Avatar XS - ${pirate.name}`}
            />
          ))}
        </Avatar.Group>
        <Avatar.Group size={'md'}>
          {PIRATES.slice(0, 7).map((pirate) => (
            <Avatar
              key={pirate.name}
              size='xs'
              src={pirate.avatar}
              alt={`Avatar XS - ${pirate.name}`}
            />
          ))}
        </Avatar.Group>
        <Avatar.Group
          size={'lg'}
          max={{
            count: 5,
          }}>
          {PIRATES.map((pirate) => (
            <Avatar
              key={pirate.name}
              size='xs'
              src={pirate.avatar}
              alt={`Avatar XS - ${pirate.name}`}
            />
          ))}
        </Avatar.Group>
        <Avatar.Group
          size={'xl'}
          max={{
            count: 5,
          }}>
          {PIRATES.map((pirate) => (
            <Avatar
              key={pirate.name}
              size='xs'
              src={pirate.avatar}
              alt={`Avatar XS - ${pirate.name}`}
            />
          ))}
        </Avatar.Group>
        <Avatar.Group
          size={'2xl'}
          max={{
            count: 5,
          }}>
          {PIRATES.map((pirate) => (
            <Avatar
              key={pirate.name}
              size='xs'
              src={pirate.avatar}
              alt={`Avatar XS - ${pirate.name}`}
            />
          ))}
        </Avatar.Group>
      </Flex>
    </>
  );
}
