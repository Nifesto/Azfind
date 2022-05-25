import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import Images from '../../../../assets/index';
import {COLOR, WIDTH} from '../../../../base/core';
const Register = () => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.iconBack} source={Images.iconBack} />
        </TouchableOpacity>
        <Text style={styles.title}>ĐĂNG KÍ</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="nhập số điện thoại"
          keyboardType="numeric"
          placeholderTextColor="#777777"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.TextInput}>TẠO TÀI KHOẢN</Text>
      </TouchableOpacity>
      <View style={styles.more}>
        <Text style={styles.Text}>Đã có tài khoản?</Text>
        <TouchableOpacity>
          <Text style={{...styles.Text, color: '#EF7749'}}> Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
