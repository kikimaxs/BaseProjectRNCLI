import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Linking } from 'react-native';
import { isReadyRef, navigationRef } from 'react-navigation-helpers';

export default function Navigation(props: any) {
  const { children } = props;
  const routeNameRef = useRef<string | undefined>(undefined);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={async () => {
        isReadyRef.current = true;
        Linking.getInitialURL().then((res) => {
          if (res !== null) {
            Linking.openURL(res);
          }
        });
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        const previousRouteName = routeNameRef.current;
        // const objRoute = {
        //   currentRouteName,
        //   previousRouteName,
        // };

        // store.dispatch(appTempActions.AppSetActivity(objRoute));
      }}
    >
      {children}
    </NavigationContainer>
  );
}
