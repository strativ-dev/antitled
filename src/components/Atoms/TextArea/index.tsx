import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import styled from 'styled-components';

const { TextArea: AntdTextArea } = Input;

type Props = Omit<TextAreaProps, 'size'> & {
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: 'small',
  md: 'middle',
  lg: 'large',
} as const;

const getSizeProp = (size?: Props['size']): TextAreaProps['size'] => {
  if (!size) return undefined;
  if (size in sizeMap) return sizeMap[size as keyof typeof sizeMap];
  return size as TextAreaProps['size'];
};

export const TextArea = ({ size, rows = 4, ...props }: Props) => {
  return (
    <>
      <StyledTextArea rows={rows} size={getSizeProp(size)} {...props} />
    </>
  );
};

//Further customization can be added here
const StyledTextArea = styled(AntdTextArea)``;
