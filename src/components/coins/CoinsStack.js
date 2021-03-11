import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from '../coinDetail/CoinDetailScreen';
import { Colors } from '../../res/colors';

const Stack = createStackNavigator();

const screenOptionStyles = {
  headerStyle: {
    backgroundColor: Colors.blackpearl,
    shadowOpacity: 0,
  },
  headerTintColor: Colors.white,
}

const CoinsStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyles}>
      <Stack.Screen name="Coins" component={CoinsScreen}/>
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen}/>
    </Stack.Navigator>
  )
}

export default CoinsStack
