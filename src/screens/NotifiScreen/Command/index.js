import React from 'react';
import {View, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import Images from '../../../assets';
import styles from './style';
const Command = () => {
  const [data, setData] = React.useState([
    {
      img: Images.iconDone,
      stt: 'Khớp',
      sdt: '0356669474',
      cmd: 'mua',
      quantity: '100 CP',
      brand: 'HPG',
      price: 47.5,
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconWait,
      stt: 'Chờ gửi lên sàn',
      sdt: '0356669474',
      cmd: 'mua',
      quantity: 100,
      brand: 'HPG',
      price: 47.5,
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconDone,
      stt: 'Khớp',
      sdt: '0356669474',
      cmd: 'bán',
      quantity: 100,
      brand: 'HPG',
      price: 47.5,
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconWait,
      stt: 'Chờ gửi lên sàn',
      sdt: '0356669474',
      cmd: 'mua',
      quantity: 100,
      brand: 'HPG',
      price: 47.5,
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconWait,
      stt: 'Chờ gửi lên sàn',
      sdt: '0356669474',
      cmd: 'mua',
      quantity: 100,
      brand: 'HPG',
      price: 47.5,
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconWait,
      stt: 'Chờ gửi lên sàn',
      sdt: '0356669474',
      cmd: 'mua',
      quantity: 100,
      brand: 'HPG',
      price: 47.5,
      time: '12.45',
      date: '03/07/2002',
    },
    {
      img: Images.iconDone,
      stt: 'Khớp',
      sdt: '0356669474',
      cmd: 'bán',
      quantity: 100,
      brand: 'HPG',
      price: 47.5,
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
            <TouchableOpacity>
              {item.item.cmd === 'bán' ? (
                <Text style={{...styles.cmd, color:'red'}}> {item.cmd}</Text>
              ) : (
                <Text style={{...styles.cmd, color:'green'}}> {item.cmd}</Text>
              )}
            </TouchableOpacity>
            <Text style={styles.quantity}> {item.quantity}</Text>
            <TouchableOpacity>
              <Text style={styles.brand}> {item.brand}</Text>
            </TouchableOpacity>
            <Text style={styles.price}> {item.price}</Text>
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
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default Command;
