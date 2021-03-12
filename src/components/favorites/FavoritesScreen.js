import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Storage } from '../../libs/storage';
import { Colors } from '../../res/colors';

const FavoritesScreen = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const getFavorites = async () => {
      const keys = await Storage.getAllKeys();
      const allFavorites = await Storage.multiGet(keys);
      setFavorites(allFavorites);
    }

    getFavorites();
    
    return () => {
      
    }
  }, [])

  return (
    <View style={styles.container}>
      {
        favorites.length === 0 &&
        <Text style={styles.text}>You don't have any favorite coin yet </Text>
      }

      {
        favorites.length !== 0 &&
        <Text style={styles.text}>Ya hay</Text>
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

