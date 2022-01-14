import AsyncStorage from "@react-native-async-storage/async-storage";

interface DeviceStorageService {
  saveItem: Function;
  getItem: Function;
  removeItem: Function;
}

const service: DeviceStorageService = {
  saveItem: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  getItem: async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
};

export default service;
