import { CheckDone02, Copy01 } from '@untitledui/icons';
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
      return 'text-sm';
    case 'lg':
      return 'text-md';
    default:
      return 'text-sm';
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
          size={getCopyTextSize(size)}
          weight='medium'
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
    <Input size={size} readOnly addonAfter={copyTextAfter} value={value} />
  );
};

const StyledCopyButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 6px;
`;
