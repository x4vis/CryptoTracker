import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Storage } from '../../libs/storage';
import { Colors } from '../../res/colors';
import CoinsItem from '../coins/CoinsItem';

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const allKeys = await Storage.getAllKeys();
      const keys = allKeys.filter(key => key.includes('favorite-'));
      const favs = await Storage.multiGet(keys);
      const allFavorites = favs.map((fav) => JSON.parse(fav[1]));
      setFavorites(allFavorites);
    }
    getFavorites();

    navigation.addListener('focus', getFavorites);

    return () => {
      navigation.removeListener('focus', getFavorites);
    }
  }, []);

  const handlePress = (coin) => {
    navigation.navigate('CoinDetail', { coin });
  };

  return (
    <View style={styles.container}>
      {
        favorites.length === 0 &&
        <Text style={styles.text}>You don't have any favorite coin yet </Text>
      }

      {
        favorites.length > 0 &&
        <FlatList
          data={favorites}
          keyExtractor={ (item) => item.id}
          renderItem={ ({item: coin}) =>
            <CoinsItem 
              coin={coin}
              onPress={() => handlePress(coin)} />
          } />
      }
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.charade,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default FavoritesScreen;

