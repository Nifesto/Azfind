import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Images from '../../assets';
import styles from './style';
const Payment = () => {
  const [check, setCheck] = React.useState(false);
  const [text, onChangeText] = React.useState('');
  const change = () => {
    setCheck(!check);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.iconBack} source={Images.iconBack} />
        <View style={styles.header_right}>
          <Image style={styles.iconBell} source={Images.iconBell} />
          <Text style={styles.number}>1</Text>
          <Image style={styles.iconMore} source={Images.iconMore} />
        </View>
      </View>
      <View style={styles.switch}>
        <TouchableOpacity onPress={check => change()}>
          {check === true ? (
            <Text
              style={{
                ...styles.payment,
                color: '#404040',
                backgroundColor: '#E8E7E7',
              }}>
              NỘP TIỀN
            </Text>
          ) : (
            <Text style={styles.payment}>NỘP TIỀN</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={check => change()}>
          {check === true ? (
            <Text style={styles.change}>CHUYỂN TIỀN</Text>
          ) : (
            <Text
              style={{
                ...styles.change,
                color: '#404040',
                backgroundColor: '#E8E7E7',
              }}>
              CHUYỂN TIỀN
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Tiểu khoản nộp tiền</Text>
        <View style={styles.choose}>
          <Text>Tích sản cho con - 045632566xxx5767</Text>
          <TouchableOpacity>
            <Image style={styles.iconDropdown} source={Images.iconDropdown} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Chọn ngân hàng thụ hưởng</Text>
        <View style={styles.choose}>
          <Text>Ngân hàng thụ hưởng</Text>
          <TouchableOpacity>
            <Image style={styles.iconDropdown} source={Images.iconDropdown} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Số tài khoản người thụ hưởng</Text>
        <View style={styles.choose}>
          <Text>121554123450145</Text>
          <TouchableOpacity>
            <Image style={styles.iconCopy} source={Images.iconCopy} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Tên đơn vị thụ hưởng</Text>
        <View style={styles.choose}>
          <Text>CTCP CHUNG KHOAN ANPHA</Text>
          <TouchableOpacity>
            <Image style={styles.iconCopy} source={Images.iconCopy} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Nội dung chuyển khoản</Text>
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
    </View>
  );
};
export default Payment;
