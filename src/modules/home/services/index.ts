import {
  ProductRoot,
  Product,
  ProductListParams,
} from '@/src/modules/home/types';
import { getData, postData } from '@/src/utils/httpsclient';

export function ProductList(params: ProductListParams) {
  return getData<ProductRoot>('/products', params).then(response => {
    return response;
  });
}
export function ProductId(params: Product) {
  return getData<Product>(`/products/${params.id}`, params).then(response => {
    return response;
  });
}
