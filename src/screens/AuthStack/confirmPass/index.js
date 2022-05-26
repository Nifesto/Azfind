import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import Images from '../../../assets';
import styles from './style';
const ConfirmPass = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [retext, onChangeRetext] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image style={styles.iconBack} source={Images.iconBack} />
        </TouchableOpacity>
        <Text style={styles.title}>XÁC THỰC MẬT KHẨU</Text>
      </View>
      <Image style={styles.logo} source={Images.logo} />
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Mật khẩu mới"
          keyboardType="numeric"
          placeholderTextColor="#777777"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeRetext}
          value={retext}
          placeholder="Nhập lại mật khẩu"
          keyboardType="numeric"
          placeholderTextColor="#777777"
        />
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.button}>
          <Text style={styles.TextInput}>TẠO LẠI MẬT KHẨU</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmPass;
