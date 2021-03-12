import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  store: async (key, value) => {
    if(!Storage.isKeyString(key)) {
      return false;
    }

    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.log('storage store error :>> ', error);
      return false;
    }
  },

  get: async (key) => {
    if(!Storage.isKeyString(key)) {
      return;
    }

    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('storage get error :>> ', error);
      throw Error(error);
    }
  },

  multiGet: async (key) => {
    if(!Storage.isKeyString(key)) {
      return;
    }

    try {
      return await AsyncStorage.multiGet(key);
    } catch (error) {
      console.log('storage multiGet error :>> ', error);
      throw Error(error);
    }
  },

  getAllKeys: async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.log('storage getAllKeys error :>> ', error);
      throw Error(error);
    }
  },

  remove: async (key) => {
    if(!Storage.isKeyString(key)) {
      return false;
    }

    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.log('storage remove error :>> ', error);
      return false;
    }
  },

  isKeyString: (key) => {
    if (typeof key !== 'string') {
      console.log("the key it's required and must be string");
      return false;
    }

    return true;
  }
}