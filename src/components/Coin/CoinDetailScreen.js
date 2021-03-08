import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../res/colors';

const CoinDetailScreen = ({ route, navigation }) => {
  const { coin } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: coin.symbol })
  }, [])

  const getSymbolIcon = () => {
    const nameId = coin.nameid;

    if (nameId) {
      return `https://c1.coinlore.com/img/25x25/${nameId}.png`;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image style={styles.iconImg} source={{ uri: getSymbolIcon() }}/>
        <Text style={styles.titleText}>{coin.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
  },
  iconImg: {
    width: 25,
    height: 25,
  },
  titleText: {
    marginLeft: 10,
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default CoinDetailScreen;