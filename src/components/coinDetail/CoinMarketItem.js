import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {formatNumber, formatNumberType} from '../../libs/formatNumber';
import {Colors} from '../../res/colors';

const {USA: currency} = formatNumberType.currency;
const {USA: locale} = formatNumberType.locale;

const CoinMarketItem = ({item}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>
        {formatNumber({currency, locale}).format(item.price_usd)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: Colors.zircon,
    borderWidth: 1,
    padding: 16,
    marginRight: 8,
    alignItems: 'center',
  },
  nameText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  priceText: {
    color: Colors.white,
  }
});

export default CoinMarketItem;

