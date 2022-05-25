import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';
import Images from '../../../../assets/index';
import {COLOR, WIDTH} from '../../../../base/core';
const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.welcomeImage} source={Images.imageLogo} />
    </View>
  );
};

export default Welcome;
