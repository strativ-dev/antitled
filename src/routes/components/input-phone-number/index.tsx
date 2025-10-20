import { createFileRoute } from '@tanstack/react-router';

import InputPhoneNumberPage from '@/app/components/input-phone-number';

export const Route = createFileRoute('/components/input-phone-number/')({
  component: InputPhoneNumberPage,
});
