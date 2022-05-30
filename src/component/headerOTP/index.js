import {TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './style';
import Images from '../../assets';
const HeaderOTP = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.btnLeft}>
        <Image source={Images.iconBack} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <View />
    </View>
  );
};

export default HeaderOTP;
