import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  FlatList, 
  SectionList, 
  Pressable,
  Alert,
} from 'react-native';
import { Http } from '../../libs/http';
import { Storage } from '../../libs/storage';
import { Colors } from '../../res/colors';
import CoinMarketItem from './CoinMarketItem';

const CoinDetailScreen = ({ route, navigation }) => {
  const { coin } = route.params;
  const key = `favorite-${coin.id}`;
  const mounted = useRef(null);

  const [markets, setMarkets] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    mounted.current = true;
    navigation.setOptions({ title: coin.symbol });

    const getMarkets = async () => {
      const markets = await Http.get(`https://api.coinlore.net/api/coin/markets/?id=${coin.id}`);
      setMarkets(markets);
    }

    const getFavorite = async () => {
      try {
        const favStr = await Storage.get(key);
        if (favStr) {
          setIsFavorite(true);
        }
      } catch (error) {
        throw Error(error);
      }
    }

    if (mounted) {
      getMarkets();
      getFavorite();
    }

    return () => {
      mounted.current = false;
    }
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

  const handleFavorite = async () => {
    if (isFavorite) {
      Alert.alert(
        'Remove favorite',
        'Are you sure',
        [
          {
            text: 'Cancel'
          },
          {
            text: 'Remove',
            onPress: async () => {
              const remove = await Storage.remove(key);
              remove && setIsFavorite(false);
            },
            style: 'destructive'
          }
        ]
      )
    }
    else {
      const stored = await Storage.store(key, coin);
      stored && setIsFavorite(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image 
            style={styles.iconImg} 
            source={{ uri: getSymbolIcon() }} />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>

        <Pressable 
          onPress={handleFavorite}
          style={[
            styles.btnFavorite, 
            isFavorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd
          ]}>
          <Text style={styles.itemText}>
            {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          </Text>
        </Pressable>
      </View>

      <SectionList 
        style={styles.section}
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

        <Text style={styles.marketTitle}>Markets</Text>
        <FlatList
          style={styles.list}
          horizontal={true}
          data={markets}
          keyExtractor={ (item) => `${item.base}-${item.name}-${item.quote}`}
          renderItem={ 
            ({item}) => <CoinMarketItem item={item}/>
          }
           />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  row: {
    flexDirection: 'row',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  section: {
    maxHeight: 220,
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16,
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
  },
  marketTitle: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  btnFavoriteAdd: {
    backgroundColor: Colors.picton,
  },
  btnFavoriteRemove: {
    backgroundColor: Colors.carmine,
  }
});

export default CoinDetailScreen;