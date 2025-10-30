import React from 'react';
import { Platform, UIManager } from 'react-native';
import { Navigator, ROUTERS, Screen } from '../routes';

import HomeScreens from '@/src/modules/home/screens';
import DetailsScreens from '@/src/modules/details/screens';



if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function RootNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
        autoHideHomeIndicator: true,
      }}
      initialRouteName={ROUTERS.HomeScreens}
    >
      {/* start region screen App */}
         <Screen name={ROUTERS.HomeScreens} component={HomeScreens} />
         <Screen name={ROUTERS.DetailsScreens} component={DetailsScreens} />
      {/* end region screen App */}
    </Navigator>
  );
}

export default React.memo(RootNavigator);
