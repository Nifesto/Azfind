import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './style';
import Images from '../../../assets';
import {WIDTH, COLOR} from '../../../base/core';
const Login = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');
  const [check, setCheck] = React.useState(true);
  const [pass, setPass] = React.useState('');
  const Remember = () => {
    setCheck(!check);
  };
  const [eye, setEye] = React.useState(true);
  const Showpass = () => {
    setEye(!eye);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent/>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.iconBack} source={Images.iconBack} />
        </TouchableOpacity>
        <Text style={styles.title}>ĐĂNG NHẬP</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.logo}>
          <Image style={styles.iconLogo} source={Images.iconLogo} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Số điện thoại"
          keyboardType="numeric"
          placeholderTextColor="#777777"
        />
        <View
          style={{
            ...styles.input,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={{color: '#222'}}
            onChangeText={pass => setPass()}
            value={pass}
            placeholder="Mật khẩu"
            placeholderTextColor="#777777"
            secureTextEntry={eye}
          />
          <TouchableOpacity onPress={eye => Showpass()}>
            <Image style={styles.iconEye} source={Images.iconEye} />
          </TouchableOpacity>
        </View>
        <View style={styles.Remember}>
          <TouchableOpacity onPress={check => Remember()}>
            {check == false ? (
              <Image style={styles.iconCheck} source={Images.iconCheck} />
            ) : (
              <Image style={styles.iconCheck} source={Images.iconChecked} />
            )}
          </TouchableOpacity>
          <Text style={styles.TextRemember}>Nhớ mật khẩu</Text>
        </View>
        <View style={styles.Sign}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TabScreen')}
            style={styles.button}>
            <Text style={styles.TextInput}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.iconFace} source={Images.iconFaceID} />
          </TouchableOpacity>
        </View>
        <View style={styles.more}>
          <Text style={styles.Text}>Đã chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{...styles.Text, color: '#EF7749'}}>Đăng kí ngay</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
            <Text style={{...styles.Text, marginLeft: WIDTH * 14}}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
