// types/product.ts
import { RootStackNavigationTypes } from '@/src/routes/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Navigation = NativeStackNavigationProp<RootStackNavigationTypes>;

export type PropTypes = {
  navigation?: Navigation;
  route?: any;
};
export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

export type ProductRoot = {
  product: Product[];
  total: number;
  skip: number;
  limit: number;
};

// Variabel request untuk daftar produk (paging/filter sederhana)
export type ProductListParams = {
  skip?: number;
  limit?: number;
  category?: string;
};

// Parameter minimal untuk mengambil detail produk berdasarkan id
export type ProductIdParams = {
  id: number;
};
