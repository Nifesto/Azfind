import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import Images from '../../../assets';
import styles from './style';
const ForgetPass = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconBack} source={Images.iconBack} />
        </TouchableOpacity>
        <Text style={styles.title}>QUÊN MẬT KHẨU</Text>
      </View>
      <Image style={styles.logo} source={Images.logo} />
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Số điện thoại đăng ký"
          keyboardType="numeric"
          placeholderTextColor="#777777"
        />
        <TouchableOpacity onPress={()=>navigation.navigate('ConfirmPass')} style={styles.button}>
          <Text style={styles.TextInput}>TẠO LẠI MẬT KHẨU</Text>
        </TouchableOpacity>
        <View style={styles.more}>
          <Text style={styles.Text}>Đã chưa tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{...styles.Text, color: '#EF7749'}}> Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgetPass;
