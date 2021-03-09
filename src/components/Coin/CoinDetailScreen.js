import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SectionList } from 'react-native';
import { Http } from '../../libs/http';
import { Colors } from '../../res/colors';

const CoinDetailScreen = ({ route, navigation }) => {
  const { coin } = route.params;
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: coin.symbol });

    const getMarkets = async () => {
      const markets = await Http.API.get(`https://api.coinlore.net/api/coin/markets/?id=${coin.id}`);
      setMarkets(markets);
    }

    getMarkets();
  }, [])

  const getSymbolIcon = () => {
    const nameId = coin.nameid;

    if (nameId) {
      return `https://c1.coinlore.com/img/25x25/${nameId}.png`;
    }
  };

  const getSections = () => {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      }
    ];

    return sections;
  }

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image 
          style={styles.iconImg} 
          source={{ uri: getSymbolIcon() }} />
        <Text style={styles.titleText}>{coin.name}</Text>
      </View>

      <SectionList 
        sections={getSections()}
        keyExtractor={ (item) => item }
        renderItem={ 
        ({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>
              {item}
            </Text>
          </View>
        )}
        renderSectionHeader={ 
        ({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>
              {section.title}
            </Text>
          </View>
        )} />
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
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: Colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default CoinDetailScreen;