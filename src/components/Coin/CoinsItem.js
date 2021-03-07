import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { formatNumber } from '../../libs/formatNumber';
import { Colors } from '../../res/colors';

const CoinsItem = ({ coin }) => {

  const getImgArrow = () => {
    if(coin.percent_change_1h > 0) {
      return require('../../assets/arrow_up.png');
    }
    else {
      return require('../../assets/arrow_down.png');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{coin.symbol}</Text>
        <Text style={styles.nameText}>{coin.name}</Text>
        <Text style={styles.priceText}>
          {formatNumber('USD', 'en-US').format(coin.price_usd)}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.percentText}>{`${coin.percent_change_1h} %`}</Text>
        <Image style={styles.imgIcon} source={getImgArrow()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: .8,
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
  },
  symbolText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 16,
  },
  nameText: {
    fontSize: 14,
    color: Colors.white,
    marginRight: 16,
  },
  percentText: {
    color: Colors.white,
    marginRight: 8,
  },
  priceText: {
    color: Colors.white,
    fontSize: 14,
  },
  imgIcon: {
    width: 22,
    height: 22,
  }
})

export default CoinsItem;
