import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROUTERS, RootStackNavigationTypes } from '@/src/routes';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/src/configs/store';
import { appActions } from '@/src/store/reducers/app';
import { useProductList } from '@/src/modules/home/hooks';
import type { Product, ProductRoot } from '@/src/modules/home/types';

export default function HomeScreens() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationTypes>>();
  const dispatch = useDispatch();
  const { loading, booted, error } = useSelector((state: RootState) => state.app);

  // Simpan daftar produk sebagai array Product agar mudah dirender
  const [getProductList, setGetProductList] = React.useState<Product[]>([]);
    const { mutate: productListMutation } = useProductList();

  React.useEffect(() => {
    productListMutation({}, {
      onSuccess: (response: any) => {
        // Ambil array produk dari payload; kompatibel dengan 'product' atau 'products'
        const payload: ProductRoot | { products?: Product[] } = response?.data ?? {};
        const products = (payload as ProductRoot).product ?? (payload as any).products ?? [];
        setGetProductList(products);
        // Hindari log state yang belum ter-update, log langsung dari response
        console.log('Product list fetched:', products);
      },
      onError: (error: Error) => {
        console.error('Error refreshing team attendance:', error);
      },
    });
  }, [productListMutation]);

  const onGoToSecond = () => {
    navigation?.navigate(ROUTERS.SecondsScreens, { title: 'Second Screen' });
  };

  const onBootApp = () => {
    dispatch(appActions.appBoot());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.subtitle}>
          Konten utama ditampilkan dengan layout yang jelas dan rapi.
        </Text>

        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>Status Aplikasi</Text>
          <Text style={styles.statusText}>Loading: {String(loading)}</Text>
          <Text style={styles.statusText}>Booted: {String(booted)}</Text>
          {error ? <Text style={[styles.statusText, { color: '#DC2626' }]}>Error: {error}</Text> : null}
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Memicu boot aplikasi via Saga"
            activeOpacity={0.7}
            onPress={onBootApp}
            style={[styles.primaryButton, { backgroundColor: '#059669', marginTop: 12 }]}
          >
            <Text style={styles.primaryButtonText}>Boot App (Saga)</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Navigasi ke Second Screen"
          activeOpacity={0.7}
          onPress={onGoToSecond}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>Pergi ke Second Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBox: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    minWidth: 220,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});