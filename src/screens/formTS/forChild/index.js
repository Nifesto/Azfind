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
      <View style={styles.accumulation}>
        <Text style={styles.text_1}>{props.name}</Text>
        <View style={styles.box}>
          <Text style={styles.text_2}>0đ</Text>
          <Image
            source={Images.iconDropdown}
            resizeMode="contain"
            style={styles.more}
          />
        </View>
      </View>
    </View>
  );
};

export default ForChild;
