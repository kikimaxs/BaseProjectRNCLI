import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
    prefix penamaan pake nama module contoh => NamaModulesNamaScreen = AppLogin
*/
enum ROUTERS {

  HomeScreens = 'HomeScreens',
  DetailsScreens = 'DetailsScreens',
}

export type RouteParams = {
  title?: string;
  id?: number;
};


export type RootStackNavigationTypes = {

  [ROUTERS.HomeScreens]: RouteParams | undefined;
  [ROUTERS.DetailsScreens]: RouteParams | undefined;

};

const Stack = createNativeStackNavigator<RootStackNavigationTypes>();
const { Navigator } = Stack;
const { Screen } = Stack;

export { NavigationContainer, Navigator, ROUTERS, Screen, Stack };

