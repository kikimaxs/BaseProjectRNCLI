import AsyncStorage from '@react-native-async-storage/async-storage';

export const PERSIST = {
  networkConfig: {
    key: 'network',
    storage: AsyncStorage,
  },
  appConfig: {
    key: 'app',
    storage: AsyncStorage,
  },
  authConfig: {
    key: 'auth',
    storage: AsyncStorage,
  },
  homeConfig: {
    key: 'home',
    storage: AsyncStorage,
  },
};
