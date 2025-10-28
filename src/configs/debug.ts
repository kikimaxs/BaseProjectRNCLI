import { LogBox, Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'BaseProjectRN',
}).useReactNative();

if (__DEV__) {
  LogBox.ignoreLogs([
    'Require cycle:',
    'new NativeEventEmitter',
    'SerializableStateInvariantMiddleware',
    'rendered size is not usable',
    'onInstallConversionFailure',
    'ImmutableStateInvariantMiddleware',
    'Non-serializable values were found in the navigation state',
    'VirtualizedLists should never be nested',
    'source.uri',
    'AxiosError',
    'ViewPropTypes',
    'No native splash screen registered for given view controller.',
    'Cannot set prop ',
    'Possible Unhandled Promise Rejection (id: 0):',
    'componentWillMount has been renamed, and is not recommended for use.  See https://reactjs.org/link/unsafe-component-lifecycles for details.',
    'Encountered two children with the same key,',
  ]);
  
  // Konfigurasi host untuk React Native CLI (tanpa Expo):
  // - Android emulator: gunakan 10.0.2.2 untuk mencapai localhost mesin pengembang
  // - iOS simulator & perangkat iOS: localhost
  // Jika perangkat Android fisik dipakai, pastikan adb reverse: `adb reverse tcp:9090 tcp:9090`
  const host = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  console.log('Reactotron connecting to host (CLI):', host);
  Reactotron.configure({ host, name: 'BaseProjectRN' }).useReactNative().connect();
}

export default reactotron;
