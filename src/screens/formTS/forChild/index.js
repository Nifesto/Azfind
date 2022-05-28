import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from './../../../assets/index';
const ForChild = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_1}>{props.name}</Text>
      <Text style={styles.text_2}>100.000.000.000</Text>
      <Image
        source={props.visibleImage ? Images.iconDropUp : Images.iconDropdown}
        resizeMode="contain"
        style={styles.more}
      />
    </View>
  );
};

export default ForChild;
