import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoinsItem = ({ name, symbol }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{symbol}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default CoinsItem;
