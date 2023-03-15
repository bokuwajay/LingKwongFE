/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import SubCarousel from './components/SubCarousel';
import ContentCard from './components/ContentCard';

import New from './New';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName="New"
        initialRouteName="Home">
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SubCarousel" component={SubCarousel} />
        <Stack.Screen name="ContentCard" component={ContentCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
