import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { message } from 'antd';

import { authenticatedAxiosInstance, publicAxiosInstance } from './api.service';
import useErrorNotification from '@/hooks/useErrorNotification';
import { ENDPOINTS, QUERY_KEYS } from '@/services/constants';
import { useAuthStore } from '@/stores/useAuthStore';

type UseLoginMutationPayload = {
  email: string;
  password: string;
};

type UseLoginMutationResponse = {
  access_token: string;
  refresh_token: string;
};

const loginMutation = (payload: UseLoginMutationPayload) => {
  return publicAxiosInstance.post<UseLoginMutationResponse>(
    ENDPOINTS.auth.login,
    payload
  );
};

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setRefreshToken = useAuthStore((state) => state.setRefreshToken);

  return useMutation({
    mutationFn: loginMutation,
    onSuccess: (data) => {
      setAccessToken(data.data.access_token);
      setRefreshToken(data.data.refresh_token);

      message.success('Logged in successfully!');
      navigate({ to: '/' });
    },
    onError: (error: Error) => {
      message.error(error.message || 'Invalid credentials');
    },
  });
};

const myProfileQuery = () => {
  return authenticatedAxiosInstance.get(ENDPOINTS.auth.myProfile);
};

export const useMyProfileQuery = ({ isEnabled }: { isEnabled: boolean }) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.auth.myProfile],
    queryFn: () => myProfileQuery().then((res) => res.data),
    enabled: isEnabled,
  });

  useErrorNotification({
    isError: query.isError,
    errorMessage: query.error?.message,
  });

  return query;
};

export const useLogoutMutation = () => {
  return useAuthStore((state) => state.clear);
};
