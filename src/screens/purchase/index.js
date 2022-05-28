/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderHome from '../../component/headerHome';
import {COLOR, WIDTH_WINDOW} from '../../base/core';
import Drawer from '../../navigation/drawer';
import ListOrder from './listOrder';
import SetOder from './setOder';
const Purchase = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [choose, setChoose] = React.useState(0);
  const refScroll = React.useRef();
  const [title, setTitle] = useState([
    {name: 'Đặt lệnh'},
    {
      name: 'Sổ lệnh',
    },
  ]);
  const onPress = (item, index) => {
    setChoose(index);
    refScroll?.current?.scrollTo({
      x: WIDTH_WINDOW * index,
      y: 0,
      animate: true,
    });
  };
  return (
    <View style={styles.container}>
      <HeaderHome
        onPressDraw={() => setVisible(true)}
        onPressUser={() => navigation.navigate('Profile')}
        onPressBell={() => navigation.navigate('Notification')}
      />
      <View style={styles.viewLabel}>
        {title.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(item, index)}
              style={{
                ...styles.btnLabel,
                backgroundColor: index === choose ? '#063167' : COLOR.MAIN_P,
              }}
              key={index}>
              <Text style={styles.label}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          ref={refScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={true}
          scrollEnabled={false}>
          <SetOder />
          <ListOrder />
        </ScrollView>
      </View>
      <View>
        <Drawer visible={visible} close={() => setVisible(false)} />
      </View>
     
    </View>
  );
};

export default Purchase;
