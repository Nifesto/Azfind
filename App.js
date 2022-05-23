import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <AppNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
