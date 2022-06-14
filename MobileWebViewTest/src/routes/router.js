import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../components/splash/SplashScreen';
import WebViewScreen from '../components/webview/WebView';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{title: 'Splash', headerShown: false}}
      />
      <Stack.Screen name="WebView" component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
