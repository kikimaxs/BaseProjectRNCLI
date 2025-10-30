import * as services from '@/src/modules/home/services/index';
import { Product, ProductIdParams } from '@/src/modules/home/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

const useAttendanceCheck = () => {
  const mutation = useMutation<AxiosResponse<Product>, Error, ProductIdParams>({
    mutationFn: (params: ProductIdParams) => services.ProductId(params),
  });
  return mutation;
};

export default useAttendanceCheck;
