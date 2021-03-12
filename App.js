import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CoinsStack from './src/components/coins/CoinsStack';
import Bank from './src/assets/bank.png';
import { tabBarOptions, tabScreenOptions } from './src/res/navigationOptions';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Tabs.Navigator tabBarOptions={tabBarOptions}>
        <Tabs.Screen 
          name='Coins' 
          component={CoinsStack}
          options={tabScreenOptions(Bank)} />
      </Tabs.Navigator>

    </NavigationContainer>
  );
};

export default App;
