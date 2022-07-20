/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../component/header';
import {COLOR, HEIGHT, WIDTH, WIDTH_WINDOW} from '../../base/core';
import Command from './Command';
import Account from './account';
import News from './News';
import styles from './styles';
import i18n from '../../translate/i18n';
const Notification = ({navigation}) => {
  const refScroll = React.useRef(null);
  const [choose, setChoose] = React.useState(0);
  const [title, setTitle] = React.useState([
    {
      name: i18n.t('command'),
      choose: true,
    },
    {
      name:  i18n.t('account'),
      choose: false,
    },
    {
      name:  i18n.t('news'),
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
      <Header title={i18n.t('notification')} btnLeft={() => navigation.goBack()} />
      <View style={styles.header}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {title.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onPress(item, index)}
                style={{
                  ...styles.button,
                  borderBottomWidth: index === choose ? 1 : 0,
                }}>
                <Text
                  style={{
                    color: index === choose ? COLOR.MAIN_P : COLOR.MAIN_P,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          ref={refScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={true}
          scrollEnabled={false}>
          <Command />
          <Account />
          <News />
        </ScrollView>
      </View>
    </View>
  );
};

export default Notification;
