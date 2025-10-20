import { Text } from '@/components/Atoms';

type Props = {
  title: string;
};

export default function ComponentPageTitle({ title }: Props) {
  return (
    <Text
      as='h1'
      size='display-md'
      margin='0 0 1rem 0'
      weight='medium'
      style={{ textAlign: 'center' }}>
      {title}
    </Text>
  );
}
