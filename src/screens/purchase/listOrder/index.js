/* eslint-disable react-native/no-inline-styles */
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import OrderCondition from './orderCondition';
import OrderNomal from './orderNomal';
import {COLOR, WIDTH_WINDOW} from '../../../base/core';
const ListOrder = () => {
  const [choose, setChoose] = React.useState(0);
  const refScroll = React.useRef();
  const [title] = React.useState([
    {name: 'Lệnh thường'},
    {
      name: 'Lệnh điều kiện',
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
      <View style={{flex: 1}}>
        <View style={styles.viewLabel}>
          {title.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onPress(item, index)}
                style={{
                  ...styles.btnLabel,
                  backgroundColor: index === choose ? '#F1F1F1' : COLOR.WHITE_P,
                  borderBottomColor: index === choose ? '#0E448A' : COLOR.NONE,
                  borderBottomWidth: index === choose ? 2 : 0,
                }}
                key={index}>
                <Text
                  style={{
                    ...styles.label,
                    color: index === choose ? COLOR.MAIN_P : '#404040',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <ScrollView
          ref={refScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={true}
          scrollEnabled={false}>
          <OrderNomal />
          <OrderCondition />
        </ScrollView>
      </View>
    </View>
  );
};

export default ListOrder;
