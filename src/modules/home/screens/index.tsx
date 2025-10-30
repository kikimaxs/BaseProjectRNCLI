import React, { useCallback, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROUTERS, RootStackNavigationTypes } from '@/src/routes';
import { useProductList } from '@/src/modules/home/hooks';
import type { Product, ProductRoot } from '@/src/modules/home/types';
import Card from '@/src/modules/home/components/Card';

export default function HomeScreens() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationTypes>>();

  // Simpan daftar produk sebagai array Product agar mudah dirender
  const [getProductList, setGetProductList] = React.useState<Product[]>([]);
    const { mutate: productListMutation } = useProductList();

const Productlist = useCallback(() => {
  productListMutation({}, {
    onSuccess: (response: any) => {
      // Ambil array produk dari payload; kompatibel dengan 'product' atau 'products'
      const payload: ProductRoot | { products?: Product[] } = response?.data ?? {};
      const products = (payload as ProductRoot).product ?? (payload as any).products ?? [];
      setGetProductList(products);
    },
    onError: (error: Error) => {
      console.error('Error refreshing team attendance:', error);
    },
  });
}, [productListMutation]);

  React.useEffect(() => {
   Productlist();
  }, [productListMutation]);

  const renderItem = useCallback(({ item }: { item: Product }) => (
    <Card
      product={item}
      onPress={() => navigation.navigate(ROUTERS.DetailsScreens, { id: item.id })}
    />
  ), [navigation]);

  const RenderMain = useMemo(() => {
    return (
      <View className="flex-1 bg-gray-50">
        <View className="px-4 py-5">
          <Text className="text-style-heading-2 text-gray-900 mb-3">Daftar Produk</Text>
          <FlatList
            data={getProductList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View className="h-2" />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
        </View>
      </View>
    );
  }, [getProductList, renderItem]);

  return RenderMain;
}
