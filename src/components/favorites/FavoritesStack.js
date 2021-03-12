import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptionsStyles } from '../../res/navigationOptions';
import FavoritesScreen from './FavoritesScreen';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionsStyles}>
      <Stack.Screen name='Favorites' component={FavoritesScreen} />
    </Stack.Navigator>
  )
};

export default FavoritesStack;
