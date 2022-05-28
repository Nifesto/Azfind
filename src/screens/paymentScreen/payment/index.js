import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import Images from '../../../assets';
import {FONT_FAMILY} from '../../../base/core';
const Payment = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.title}>Tiểu khoản nộp tiền</Text>
          <View style={styles.choose}>
            <Text numberOfLines={1}>Tích sản cho con - 045632566xxx5767</Text>
            <TouchableOpacity>
              <Image style={styles.iconDropdown} source={Images.iconDropdown} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Chọn ngân hàng thụ hưởng</Text>
          <View style={styles.choose}>
            <Text numberOfLines={1}>Ngân hàng thụ hưởng</Text>
            <TouchableOpacity>
              <Image style={styles.iconDropdown} source={Images.iconDropdown} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...styles.title,
              fontFamily: FONT_FAMILY.bold,
              color: '#0E448A',
            }}>
            SỐ TÀI KHOẢN HƯỞNG THỤ
          </Text>
          <View style={styles.choose}>
            <Text numberOfLines={1}>121554123450145</Text>
            <TouchableOpacity>
              <Image style={styles.iconCopy} source={Images.iconCopy} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...styles.title,
              fontFamily: FONT_FAMILY.bold,
              color: '#0E448A',
            }}>
            TÊN ĐƠN VỊ HƯỞNG THỤ
          </Text>
          <View style={styles.choose}>
            <Text numberOfLines={1}>CTCP CHUNG KHOAN ANPHA</Text>

            <TouchableOpacity style={styles.btn}>
              <Image style={styles.iconCopy} source={Images.iconCopy} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...styles.title,
              fontFamily: FONT_FAMILY.bold,
              color: '#0E448A',
            }}>
            NỘI DUNG CHUYỂN KHOẢN
          </Text>
          <View style={styles.input}>
            <TextInput
              style={styles.TextInput}
              onChangeText={onChangeText}
              value={text}
              placeholder="nội dung"
            />
            <TouchableOpacity>
              <Image style={styles.iconCopy} source={Images.iconCopy} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Payment;
