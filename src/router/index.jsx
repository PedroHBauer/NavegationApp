import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/home';
import Unipar from '../screen/Unipar';
import TelaFinal from '../screen/telaFinal';
import ViewData from '../screen/ViewData';
import YourData from '../screen/YourData';

const Stack = createNativeStackNavigator();

export default function MyRotes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Unipar'>
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name='Unipar' component={Unipar} />
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name='Home' component={HomeScreen} />
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name='YourData' component={YourData} />
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name='ViewData' component={ViewData} />
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name='UltimaTela' component={TelaFinal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}