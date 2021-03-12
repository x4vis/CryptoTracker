import React, { useEffect, useState } from 'react'; 
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Http } from '../../libs/http';
import { Colors } from '../../res/colors';
import CoinSearch from './CoinSearch';
import CoinsItem from './CoinsItem';

const CoinsScreen = ({ navigation }) => {

  const [coins, setCoins] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePress = (coin) => {
    navigation.navigate('CoinDetail', { coin });
  }

  const handleSearch = (query) => {
    const coinsFiltered = coins.filter(coin => {
      return coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase());
    });
    setCoins(coinsFiltered);
  }

  useEffect(() => {
    setLoading(true);

    const getCoins = async () => {
      const { data: coins } = await Http.get('https://api.coinlore.net/api/tickers/');
      setCoins(coins);
      setAllCoins(coins);
      setLoading(false);
    };

    getCoins();
  }, [])

  return (
    <View style={styles.container}>
      <CoinSearch onChange={handleSearch}/>
      {
        loading && 
        <ActivityIndicator 
          color="#fff" 
          size="large"/>
      }

      {
        !loading &&
        <FlatList 
          data={coins}
          keyExtractor={ (item) => item.id}
          renderItem={ ({item: coin}) => 
            <CoinsItem coin={coin} 
                        onPress={() => handlePress(coin)}/>
          } />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.charade
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