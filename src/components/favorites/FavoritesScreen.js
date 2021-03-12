import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../res/colors';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have any favorite coin yet </Text>
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

