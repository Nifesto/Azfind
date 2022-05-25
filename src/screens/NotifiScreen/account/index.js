import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import Images from '../../../assets';
import {WIDTH_WINDOW} from '../../../base/core'
const Account = () => {
  const [data, setData] = React.useState([
    {
      img: Images.iconMoney,
      stt: 'BIẾN ĐỘNG SỐ DƯ',
      sdt: '0356669474',
      money: '+500.000.000',
      title: 'chuyển tiền đối ứng',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconMoney,
      stt: 'BIẾN ĐỘNG SỐ DƯ',
      sdt: '0356669474',
      money: '+500.000.000',
      title: 'chuyển tiền đối ứng',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconMoney,
      stt: 'BIẾN ĐỘNG SỐ DƯ',
      sdt: '0356669474',
      money: '-7.000.000',
      title: 'chuyển tiền đối ứng',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconMoney,
      stt: 'BIẾN ĐỘNG SỐ DƯ',
      sdt: '0356669474',
      money: '+500.000.000',
      title: 'chuyển tiền đối ứng',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconMoney,
      stt: 'BIẾN ĐỘNG SỐ DƯ',
      sdt: '0356669474',
      money: '+500.000.000',
      title: 'chuyển tiền đối ứng',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconDone,
      stt: 'ĐĂNG KÍ THÀNH CÔNG',
      sdt: '0356669474',
      title: 'Quý khách đã đăng kí thành công OTP',
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconDone,
      stt: 'ĐĂNG KÍ THÀNH CÔNG',
      sdt: '0356669474',

      title: 'Quý khách đã mở tài khoản thành công',
      time: '12.45',
      date: '03/07/2002',
    },
  ]);
  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.flt}>
        <Image style={styles.img} source={item.img} />
        <View>
          <Text style={styles.stt}>{item.stt}</Text>
          <View style={styles.content}>
            <Text style={styles.sdt}>{item.sdt}</Text>
            <Text style={{...styles.money}}> {item.money}</Text>
            <Text style={styles.title}> {item.title}</Text>
          </View>
          <View style={styles.times}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex:1,width:WIDTH_WINDOW}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default Account;
