import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderOTP from './../../component/headerOTP/index';
import Images from '../../assets/index';
const CodeOTP = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderOTP title="XÁC THỰC OTP" btnLeft={() => navigation.goBack()} />
      <View style={styles.body}>
        <Image style={styles.logo} source={Images.iconLogo} />
        <Text style={styles.text}>Mã xác thực OTP</Text>
        <TextInput keyboardType="number-pad" style={styles.input} autoFocus />
        <Text style={styles.text_1}>Mã OTP sẽ đổi trong 15 giây</Text>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.textFooter}>Gửi lại OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.textFooter}>Đổi số điện thoại</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.confirm}
          onPress={() => {
            navigation.navigate('Success');
          }}>
          <Text style={styles.txtCf}>XÁC NHẬN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CodeOTP;
