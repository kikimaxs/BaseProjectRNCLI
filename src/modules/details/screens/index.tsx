import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { ROUTERS, RootStackNavigationTypes } from '@/src/routes';
import type { Product } from '@/src/modules/home/types';
import useProductId from '@/src/modules/home/hooks/useProductId';

export default function DetailsScreens() {
  const route = useRoute<RouteProp<RootStackNavigationTypes, typeof ROUTERS.DetailsScreens>>();
  const params: any = route?.params ?? {};
  const productId: number | undefined = params?.id;

  const [product, setProduct] = React.useState<Product | null>(null);
  const { mutate: fetchProduct, isPending, error } = useProductId();

  React.useEffect(() => {
    if (productId && Number.isFinite(productId)) {
      fetchProduct(
        { id: productId },
        {
          onSuccess: (response: any) => {
            const p: Product | undefined = response?.data;
            if (p) setProduct(p);
          },
          onError: (e: Error) => {
            console.error('Failed to fetch product detail:', e);
          },
        },
      );
    }
  }, [productId, fetchProduct]);

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 py-5">
        <Text className="text-style-heading-2 text-gray-900 mb-3">Detail Produk</Text>

        {!productId && (
          <View className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <Text className="text-yellow-800">
              Tidak ada parameter <Text className="font-semibold">id</Text> pada route. Navigasi ke layar ini dengan
              `{"{"}"id": number{"}"}` untuk menampilkan detail produk.
            </Text>
          </View>
        )}

        {isPending && (
          <Text className="text-gray-600">Memuat data produk…</Text>
        )}

        {error && (
          <Text className="text-red-600">Gagal memuat data produk.</Text>
        )}

        {product && (
          <View className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <View className="flex-row">
              {!!product.thumbnail && (
                <Image
                  className="w-28 h-28 rounded-lg mr-4"
                  source={{ uri: product.thumbnail }}
                />
              )}
              <View className="flex-1">
                <Text className="text-xl font-semibold text-gray-900" numberOfLines={2}>
                  {product.title}
                </Text>
                <Text className="text-base text-gray-800 mt-1">Rp{product.price}</Text>
                <Text className="text-sm text-gray-600 mt-1">Brand: {product.brand}</Text>
                <Text className="text-sm text-gray-600">Kategori: {product.category}</Text>
                <Text className="text-sm text-gray-600">Stok: {product.stock}</Text>
                <Text className="text-sm text-gray-600">Rating: {product.rating}</Text>
              </View>
            </View>

            <Text className="text-sm text-gray-700 mt-4">{product.description}</Text>

            {!!product.images?.length && (
              <View className="mt-4">
                <Text className="text-sm font-semibold text-gray-800 mb-2">Gambar lainnya</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {product.images.map((uri, idx) => (
                    <Image key={idx} className="w-24 h-24 rounded-lg mr-2" source={{ uri }} />
                  ))}
                </ScrollView>
              </View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}