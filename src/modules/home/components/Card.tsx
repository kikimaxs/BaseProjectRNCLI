import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import type { Product } from '@/src/modules/home/types';

type Props = {
  product: Product;
  onPress: () => void;
};

export default function Card({ product, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
      <View className="flex-row items-center">
        {!!product.thumbnail && (
          <Image source={{ uri: product.thumbnail }} className="w-20 h-20 rounded-lg mr-4" />
        )}
        <View className="flex-1">
          <Text className="text-base font-semibold text-gray-900" numberOfLines={2}>{product.title}</Text>
          <Text className="text-sm text-gray-700 mt-1">Rp{product.price}</Text>
          <Text className="text-xs text-gray-500 mt-1">{product.brand} • {product.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}