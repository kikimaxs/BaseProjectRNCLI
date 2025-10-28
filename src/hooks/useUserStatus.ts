import { useMemo } from 'react';
import { useAppSelector } from './useStore';

export const useUserStatus = () => {
  const { userData, isLogin } = useAppSelector((state: any) => state.auth);

  return useMemo(() => ({
    isLogin,
    userData,
  }), [isLogin, userData]);
};
