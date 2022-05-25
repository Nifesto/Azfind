import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Images from './../../assets';
import HeaderOTP from '../../component/headerOTP';
const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderOTP btnLeft={() => navigation.goBack()} />
      <View style={styles.contain}>
        <Image
          source={Images.iconSuccess}
          resizeMode="contain"
          style={styles.tich}
        />
        <Text style={styles.text}>Xác thực thành công</Text>
        <Image
          source={Images.iconCompeleted}
          resizeMode="contain"
          style={styles.success}
        />
        <TouchableOpacity style={styles.confirm}>
          <Text style={styles.txtCf}>XÁC NHẬN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Success;
