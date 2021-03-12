import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabBarOptions, tabScreenOptions } from './src/res/navigationOptions';

import CoinsStack from './src/components/coins/CoinsStack';
import FavoritesStack from './src/components/favorites/FavoritesStack';

import Bank from './src/assets/bank.png';
import Star from './src/assets/star.png';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Tabs.Navigator tabBarOptions={tabBarOptions}>
        <Tabs.Screen 
          name='Coins' 
          component={CoinsStack}
          options={tabScreenOptions(Bank)} />
        
        <Tabs.Screen 
          name='Favorites'
          component={FavoritesStack}
          options={tabScreenOptions(Star)} />
      </Tabs.Navigator>

    </NavigationContainer>
  );
};

export default App;
