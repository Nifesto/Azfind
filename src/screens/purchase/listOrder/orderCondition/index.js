/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {COLOR, WIDTH, WIDTH_WINDOW} from '../../../../base/core';
import Images from '../../../../assets';
import styles from './styles';
import i18n from '../../../../translate/i18n';
const OrderCondition = () => {
  const [data] = React.useState([
    {
      name: 'FPT',
      price: '114.20',
      PriceUp: '115.00',
      klUp: 10000,
      klDown: 100,
      change: '2.000.000',
      percent: '1,77%',
      type: 'up',
      choose: true,
    },
    {
      name: 'FPTc',
      price: '114.20',
      PriceUp: '115.00',
      klUp: 10000,
      klDown: 10000,
      change: '2.000.000',
      percent: '1,77%',
      type: 'down',
      choose: false,
    },
  ]);
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: index % 2 === 0 ? '#F4F4F4' : COLOR.WHITE_P,
          justifyContent: 'flex-start',
          paddingVertical: WIDTH * 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
            height: '100%',
          }}>
          <Image
            source={item.choose ? Images.iconCheckCircle : null}
            style={{...styles.iconDropdown, marginHorizontal: WIDTH * 8}}
          />
          <Text>{item.name}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{paddingLeft: WIDTH * 12}}>{item.price}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={
                item.type === 'up' ? Images.iconArrowUp : Images.iconArrowDown
              }
              style={styles.iconDropdown}
            />
            <Text>{item.PriceUp}</Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>{item.klUp}</Text>
          <Text>{item.klDown}</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text>{item.change}</Text>
          <Text>{item.percent}</Text>
        </View>
        <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
          <Image source={Images.iconDelete} style={styles.iconDelete} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text>{i18n.t('account')}</Text>
        <View style={styles.row}>
          <Text>Tích sản cho con - 0155453xxx</Text>
          <Image source={Images.iconDropdown} style={styles.iconDropdown} />
        </View>
      </View>
      <View style={styles.viewCancel}>
        <TouchableOpacity style={styles.BtnCancel}>
          <Text>{i18n.t('cancels')}</Text>
        </TouchableOpacity>
        <View style={{flex: 1}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          backgroundColor: COLOR.WHITE_P,
        }}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text>{i18n.t('codeCK')}</Text>
          <Image
            source={Images.iconDropdown}
            style={{...styles.iconDropdown, tintColor: '#272727'}}
          />
        </View>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            height: '100%',
          }}>
          {i18n.t('prices')}
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            height: '100%',
          }}>
        {i18n.t('mass')}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Image source={Images.iconArrowLeft} style={styles.iconArrow} />
          <Text>+</Text>
          <Text>/</Text>
          <Text>-</Text>
          <Image source={Images.iconArrowRight} style={styles.iconArrow} />
        </View>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            height: '100%',
          }}>
          {i18n.t('cancel')}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default OrderCondition;
