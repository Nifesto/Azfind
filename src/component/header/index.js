import {TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../assets';
const HeaderHome = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.btnLeft}>
        <Image source={Images.iconBack} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={props.btnRight}>
        <Image source={Images.iconDraw} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderHome;
