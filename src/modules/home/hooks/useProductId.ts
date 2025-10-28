import * as services from '@/src/modules/home/services/index';
import { Product } from '@/src/modules/home/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

const useAttendanceCheck = () => {
  const mutation = useMutation<AxiosResponse<Product>, Error, Product>({
    mutationFn: (params: Product) => services.ProductId(params),
  });
  return mutation;
};

export default useAttendanceCheck;
