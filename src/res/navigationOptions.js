import React from 'react';
import { Image } from 'react-native';
import { Colors } from "./colors";

export const screenOptionsStyles = {
  headerStyle: {
    backgroundColor: Colors.blackpearl,
    shadowOpacity: 0,
  },
  headerTintColor: Colors.white,
};

export const tabBarOptions = {
  tintColor: Colors.gray,
  style: {
    backgroundColor: Colors.blackpearl
  }
}

export const tabScreenOptions = (icon) => {
  return {
    tabBarIcon: ({ size, color }) => (
      <Image 
        source={icon}
        style={{ tintColor: color, width: size, height: size }} />
    )
  }
};