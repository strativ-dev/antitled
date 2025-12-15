import { LabelWrapper, StyledSelect } from './styles';
import { useLanguage } from '@/hooks/useLanguage';
import { LANGUAGE_OPTIONS } from '@/lib/utils/constants';

import SwedenFlag from '@/assets/images/sweden-flag-circular.svg';
import UkFlag from '@/assets/images/uk-flag-circular.svg';

const options = [
  {
    label: (
      <LabelWrapper>
        <img src={UkFlag} alt='UK' width={16} height={16} />
        En
      </LabelWrapper>
    ),
    value: LANGUAGE_OPTIONS.en,
  },
  {
    label: (
      <LabelWrapper>
        <img src={SwedenFlag} alt='Sweden' width={16} height={16} />
        Sv
      </LabelWrapper>
    ),
    value: LANGUAGE_OPTIONS.sv,
  },
];

export const LangPicker = () => {
  const { language, handleChange } = useLanguage();

  return (
    <>
      <StyledSelect
        variant='borderless'
        value={language}
        onChange={(value) =>
          handleChange(value as keyof typeof LANGUAGE_OPTIONS)
        }
        options={options}
        popupMatchSelectWidth={false}
      />
    </>
  );
};
