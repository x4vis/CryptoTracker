import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptionsStyles } from '../../res/navigationOptions';

const Stack = createStackNavigator();

function FavoritesStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionsStyles}>
      
    </Stack.Navigator>
  )
};

export default FavoritesStack
