/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigation from '@/src/navigations/index';
import RootNavigator from '@/src/navigations/rootNavigator';
import { store } from '@/src/configs/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appActions } from '@/src/store/reducers/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./global.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <StatusBar />
          <Navigation>
            <AppBoot />
            <RootNavigator />
          </Navigation>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
}

function AppBoot() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.appBoot());
  }, [dispatch]);
  return null;
}

export default App;
