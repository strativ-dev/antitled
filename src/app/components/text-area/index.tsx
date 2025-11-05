import { TextArea } from '@/components/Atoms';
import ComponentPageTitle from '@/components/Common/ComponentPageTitle';

const TextAreaPage = () => {
  return (
    <>
      <ComponentPageTitle title='Text Area' />
      <TextArea placeholder='Enter your text here...' size='md' />
    </>
  );
};

export default TextAreaPage;
