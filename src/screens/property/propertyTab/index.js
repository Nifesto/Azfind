import {TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../../assets';
import {WIDTH_WINDOW} from '../../../base/core';
const Item = ({title, value, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
        <Image source={Images.iconNext} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.line} />
    </>
  );
};
const PropertyTab = () => {
  const [choose, setChoose] = React.useState(0);
  const refScroll = React.useRef();
  return (
    <View style={styles.container}>
      <Item title={'TỔNG TÀI SẢN'} value={'600.000.000đ'} />
      <Item title={'TÍCH SẢN CHO HƯU TRÍ'} value={'600.000.000đ'} />
      <Item title={'TÍCH SẢN CHO CON'} value={'600.000.000đ'} />
      <Item title={'TÍCH SẢN MUA NHÀ/OTO'} value={'600.000.000đ'} />
      <Item title={'ĐẦU TƯ NĂNG ĐỘNG'} value={'600.000.000đ'} />
    </View>
  );
};

export default PropertyTab;
