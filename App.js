import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation';
import {store} from './src/redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYN} from './src/base/core';
import {changeLanguage} from './src/redux/reducer/reducerLanguage';
import i18n from './src/translate/i18n';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  SplashScreen.hide();
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'light-content'}
        />
        <AppNavigation />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
