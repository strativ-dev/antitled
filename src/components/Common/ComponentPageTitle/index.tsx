import { Text } from '@/components/Atoms';

type Props = {
  title: string;
};

export default function ComponentPageTitle({ title }: Props) {
  return (
    <Text
      as='h1'
      margin='0 0 1rem 0'
      variant='display-md-medium'
      style={{ display: 'block' }}>
      {title}
    </Text>
  );
}
