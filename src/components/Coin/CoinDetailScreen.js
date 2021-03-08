import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const CoinDetailScreen = ({ coin }) => {

  useEffect(() => {
    console.log('coin :>> ', coin);
  }, [])

  return (
    <View>
      <Text>CoinDetailScreen</Text>
    </View>
  )
}

export default CoinDetailScreen;