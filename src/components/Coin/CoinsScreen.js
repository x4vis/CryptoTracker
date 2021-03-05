import React, { useEffect, useState } from 'react'; 
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Http } from '../../libs/http';

const CoinsScreen = ({ navigation }) => {

  const [coins, setCoins] = useState([]);

  const handlePress = () => {
    navigation.navigate('CoinDetail');
  }

  useEffect(() => {
    const getData = async () => {
      const { data: coins } = await Http.API.get('https://api.coinlore.net/api/tickers/');
      setCoins(coins);
    };

    getData();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList data={coins}
                renderItem={ ({item: coin})=> 
                  <Text>{coin.name}</Text>
                }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  }
})

export default CoinsScreen;