/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';
import Payment from './payment';
import ChangeMoney from './changeMoney';
import styles from './style';
import Images from '../../assets';

const PaymentSreen = () => {
  const refScroll = React.useRef(null);
  const [choose, setChoose] = React.useState(0);
  const [title, setTitle] = React.useState([
    {
      name: 'NỘP TIỀN',
      choose: true,
    },
    {
      name: 'CHUYỂN TIỀN',
      choose: false,
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
    <View style={{flex: 1, backgroundColor: COLOR.WHITE_P}}>
      <View style={styles.header}>
        <Image style={styles.iconBack} source={Images.iconBack} />
        <View style={styles.header_right}>
          <Image style={styles.iconBell} source={Images.iconBell} />
          <Text style={styles.number}>1</Text>
          <Image style={styles.iconMore} source={Images.iconMore} />
        </View>
      </View>
      <View
        style={styles.body}>
        <View style={styles.switch}>
          {title.map((item, index) => {
            return (
              <View key={index}>
                {index === choose && index === 0 ? (
                  <TouchableOpacity
                    onPress={() => onPress(item, index)}
                    style={{
                      ...styles.btn,
                      backgroundColor: index === choose ? '#45B9A4' : null,
                    }}>
                    <Text
                      style={{
                        color: index === choose ? COLOR.MAIN_P : COLOR.MAIN_P,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    key={index}
                    onPress={() => onPress(item, index)}
                    style={{
                      ...styles.btn,
                      backgroundColor: index === choose ? '#ED5B54' : null,
                    }}>
                    <Text
                      style={{
                        color: index === choose ? COLOR.MAIN_P : COLOR.MAIN_P,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          ref={refScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={true}
          scrollEnabled={false}>
          <Payment />
          <ChangeMoney />
        </ScrollView>
      </View>
    </View>
  );
};

export default PaymentSreen;
