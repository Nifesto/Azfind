import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
const CodeOTP = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mã xác thực OTP</Text>
      <TextInput keyboardType="number-pad" style={styles.input} autoFocus />
      <Text style={styles.text_1}>Mã OTP sẽ đổi trong 15 giây</Text>
      <TouchableOpacity style={styles.confirm}>
        <Text style={styles.txtCf}>XÁC NHẬN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CodeOTP;
