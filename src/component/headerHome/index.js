import {TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../assets';
const HeaderHome = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPressUser}>
        <Image source={Images.iconUser} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.viewRight}>
        <TouchableOpacity style={styles.btn}>
          <Image source={Images.iconSearch} style={styles.iconRight} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={props.onPressBell}>
          <Image source={Images.iconBell} style={styles.iconRight} />
          <View style={styles.viewNumber}>
            <Text style={styles.number}>99</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={props.onPressDraw}>
          <Image source={Images.iconDraw} style={styles.iconRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;
