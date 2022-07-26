import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import Images from '../../../assets';
import i18n from 'i18n-js';
const ChangeMoney = () => {
  const [number, onChangeNumber] = React.useState('');
  const [accBank, onChangeAccBank] = React.useState('');
  const [content, onChangeContent] = React.useState('');
  const [pass, onChangePass] = React.useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.main}>
            <Text style={styles.title}>{i18n.t('transactionType')}</Text>
            <View style={styles.content}>
              <Text style={styles.text}>Chuyển tiền ra ngân hàng</Text>
              <TouchableOpacity>
                <Image style={styles.iconDropUp} source={Images.iconDropUp} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.title}>{i18n.t('fromAccount')}</Text>
            <View style={styles.content}>
              <Text style={styles.text}>Số tài khoản</Text>
              <TouchableOpacity>
                <Image style={styles.iconDropUp} source={Images.iconDropUp} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.extra}>
            <Text style={styles.text_ex}>Số tiền tối đa: 5.000.345 đ</Text>
            <Text style={styles.text_ex}>Tiền từ sức mua: 302.456.340 đ </Text>
          </View>
          <View style={styles.main}>
            <Text style={styles.title}>{i18n.t('toAccount')}</Text>
            <TextInput
              onChangeText={onChangeAccBank}
              value={accBank}
              placeholder="000164xxx"
              style={styles.input}
            />
          </View>
          <View style={styles.main}>
            <Text style={styles.title}>{i18n.t('transferAmount')}</Text>
            <TextInput
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Nhập số tiền"
              style={styles.input}
            />
          </View>
          <Text style={styles.title}>{i18n.t('content')}</Text>
          <TextInput
            onChangeText={onChangeContent}
            value={content}
            multiline={true}
            numberOfLines={4}
            style={styles.input2}
          />
          <View style={styles.main}>
            <Text style={styles.title}>{i18n.t('password')}</Text>
            <TextInput
              onChangeText={onChangePass}
              value={pass}
              placeholder="Nhập mật khẩu"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>CHUYỂN TIỀN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangeMoney;
