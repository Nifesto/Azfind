/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderHome from '../../component/headerHome';
import {COLOR, WIDTH_WINDOW} from '../../base/core';
import Drawer from '../../navigation/drawer';
import Favorite from './favorite';
import Stock from './stock';
const ItemHeader = ({item}) => {
  return (
    <View style={styles.viewItem}>
      <Text style={styles.nameItem}>{item.name}</Text>
      <Text style={styles.priceItem}>{item.price}</Text>
      <View style={styles.rowItem}>
        <Text style={styles.percenItem}>{item.one}</Text>
        <Text style={styles.percenItem}>{item.two}</Text>
      </View>
    </View>
  );
};
const PriceList = () => {
  const [dataHead] = React.useState([
    {
      name: 'VN INDEX',
      price: '1516.44',
      one: '+24.29',
      two: '+1.63',
    },
    {
      name: 'VN INDEX',
      price: '1516.44',
      one: '24.29',
      two: '1.63',
    },
    {
      name: 'VN INDEX',
      price: '1516.44',
      one: '24.29',
      two: '1.63',
    },
    {
      name: 'VN INDEX',
      price: '1516.44',
      one: '24.29',
      two: '1.63',
    },
  ]);
  const [visible, setVisible] = React.useState(false);
  const [choose, setChoose] = React.useState(0);
  const refScroll = React.useRef();
  const [title, setTitle] = React.useState([
    {name: 'Yêu thích'},
    {
      name: 'Cổ phiếu',
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
      <HeaderHome />
      <View style={styles.containerHeader}>
        {dataHead.map((item, index) => {
          return <ItemHeader item={item} />;
        })}
      </View>
      <View style={styles.viewLabel}>
        {title.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(item, index)}
              style={{
                ...styles.btnLabel,
                backgroundColor: index === choose ? COLOR.WHITE_P : '#EFEFEF',
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
          <Favorite />
          <Stock />
        </ScrollView>
      </View>
      <View>
        <Drawer visible={visible} close={() => setVisible(false)} />
      </View>
    </View>
  );
};

export default PriceList;
