import * as services from '@/src/modules/home/services/index';
import { ProductRoot, ProductListParams } from '@/src/modules/home/types';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

const useAttendanceCheck = () => {
  const mutation = useMutation<AxiosResponse<ProductRoot>, Error, ProductListParams>({
    mutationFn: (params: ProductListParams) => services.ProductList(params),
  });
  return mutation;
};

export default useAttendanceCheck;
