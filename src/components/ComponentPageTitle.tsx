import { Text } from '@/components/Atoms';

type Props = {
  title: string;
};

export default function ComponentPageTitle({ title }: Props) {
  return (
    <Text
      as='h2'
      size='display-md'
      margin='0 0 1rem 0'
      style={{ textAlign: 'center' }}>
      {title}
    </Text>
  );
}
