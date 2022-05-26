import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../../assets';
const SetOder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHead}>
        <View style={styles.viewDrop}>
          <Text>Tích sản nâng cao</Text>
          <Image source={Images.iconDropUp} style={styles.iconDropUp} />
        </View>
        <Text style={styles.info}>Số tài khoản - tên chủ tài khoản</Text>
      </View>
      <View style={styles.viewInfo}>
        <View style={styles.infoCode}>
          <Text style={styles.textCode}>MÃ CK</Text>
          <Image source={Images.iconInfo} style={styles.iconInfo} />
        </View>
        <View style={styles.btnSearchCode}>
          <Image source={Images.iconSearch} style={styles.iconSearch} />
          <Text style={styles.price}>MÃ CK</Text>
        </View>
        <View style={styles.btnPriceCode}>
          <Text style={styles.price}>Giá giao dịch</Text>
        </View>
      </View>
    </View>
  );
};

export default SetOder;
