import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from '../coinDetail/CoinDetailScreen';
import { screenOptionsStyles } from '../../res/navigationOptions';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionsStyles}>
      <Stack.Screen name="Coins" component={CoinsScreen}/>
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen}/>
    </Stack.Navigator>
  )
}

export default CoinsStack
