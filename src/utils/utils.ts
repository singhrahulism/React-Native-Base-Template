import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

export async function setStorageData(key: string, data: any) {
    try
    {
        await AsyncStorage.setItem(key, data);
        console.log('Data set to local storage success.')
    }
    catch(err)
    {
        console.log(`Data set to local storage failure! Error: ${JSON.stringify(err)}`)
    }
}

export async function getStorageData(key: string) {
    try
    {
        const value = await AsyncStorage.getItem(key);
        console.log('Data retrieve success.')
        if (value == null)  return null
        return value
    }
    catch(err)
    {
        console.log(`Data retrieve failure! Error: ${JSON.stringify(err)}`)
    }
}

export async function removeStorageData(key: string) {
    if (key)
        await AsyncStorage.removeItem(key);
}

export function isEmpty(val: any): boolean {
    let isValEmpty = true;
    if (!_.isNil(val) && _.trim(String(val)).length > 0) {
      isValEmpty = false;
    }
    return isValEmpty;
}
