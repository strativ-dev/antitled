import { CheckDone02, Copy01 } from '@untitledui/icons';
import { Space } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';

import { Input, Text } from '@/components/Atoms';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  value: string;
};

const getCopyTextSize = (size: Props['size'] = 'md') => {
  switch (size) {
    case 'sm':
    case 'md':
      return 'text-sm-medium';
    case 'lg':
      return 'text-md-medium';
    default:
      return 'text-sm-medium';
  }
};

export const InputCopyText = ({ size, value }: Props) => {
  const { t } = useTranslation();

  const [isCopied, setIsCopied] = useState(false);

  const theme = useTheme();

  const onClickCopy = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
  };

  const copyTextAfter = useMemo(() => {
    return (
      <StyledCopyButton onClick={onClickCopy}>
        {isCopied ? (
          <CheckDone02
            size={20}
            color={theme.colors.texts.textSuccessPrimary600}
          />
        ) : (
          <Copy01 size={20} color={theme.colors.foregrounds.fgQuaternary400} />
        )}
        <Text
          as='span'
          color={isCopied ? 'textSuccessPrimary600' : 'textSecondary700'}
          variant={getCopyTextSize(size)}
          style={{ cursor: 'pointer' }}>
          {isCopied ? t('common.Copied') : t('common.Copy')}
        </Text>
      </StyledCopyButton>
    );
  }, [t, size, isCopied, theme, value]);

  useEffect(() => {
    // after 3 seconds set isCopied to false
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <Space.Compact>
      <Input size={size} readOnly value={value} />
      {copyTextAfter}
    </Space.Compact>
  );
};

const StyledCopyButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors.borders.borderPrimary};
  padding-inline: 0.75rem;
  border-top-right-radius: ${({ theme }) => theme.radius.md}px;
  border-bottom-right-radius: ${({ theme }) => theme.radius.md}px;
`;
