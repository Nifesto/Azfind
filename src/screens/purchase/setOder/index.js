/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../../assets';
import {COLOR, WIDTH} from '../../../base/core';
import i18n from '../../../translate/i18n'
const SetOder = () => {
  const [data] = React.useState([
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
    {
      one: '100',
      two: '115.60',
      three: '115.65',
      four: '16.00',
    },
  ]);
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          ...styles.containerLabelItem,
          backgroundColor: index % 2 === 0 ? COLOR.WHITE_P : '#F1F1F1',
        }}>
        <Text style={styles.label}>{item.one}</Text>
        <Text style={styles.label}>{item.two}</Text>
        <Text style={styles.label}>{item.three}</Text>
        <Text style={styles.label}>{item.four}</Text>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <>
        <View style={styles.viewHead}>
          <View style={styles.viewDrop}>
            <Text>Tích sản nâng cao</Text>
            <Image source={Images.iconDropUp} style={styles.iconDropUp} />
          </View>
          <Text style={styles.info}>Số tài khoản - tên chủ tài khoản</Text>
        </View>
        <View style={styles.viewInfo}>
          <View style={styles.infoCode}>
            <Text style={styles.textCode}>{i18n.t('codeCK')}</Text>
            <Image source={Images.iconInfo} style={styles.iconInfo} />
          </View>
          <View style={styles.btnSearchCode}>
            <Image source={Images.iconSearch} style={styles.iconSearch} />
            <Text style={styles.price}>{i18n.t('codeCK')}</Text>
          </View>
          <View style={styles.btnPriceCode}>
            <Text style={styles.price}>{i18n.t('transactionPrices')}</Text>
          </View>
        </View>
        <View style={styles.containerInfoPrice}>
          <View style={styles.viewInfoPriceFirst}>
            <View style={styles.viewFloor}>
              <Text style={{...styles.txtPrice, color: '#EB27ED'}}>{i18n.t('ceiling')}</Text>
            </View>
            <View style={styles.viewFloor}>
              <Text style={{...styles.txtPrice, color: '#EB27ED'}}>50.5</Text>
            </View>
          </View>
          <View style={styles.viewInfoPriceFirst}>
            <View style={styles.viewFloor}>
              <Text style={{...styles.txtPrice, color: '#2BE4EE'}}>{i18n.t('floor')}</Text>
            </View>
            <View style={styles.viewFloor}>
              <Text style={{...styles.txtPrice, color: '#2BE4EE'}}>50.5</Text>
            </View>
          </View>
          <View style={styles.viewInfoPriceFirst}>
            <View style={styles.viewFloor}>
              <Text style={{...styles.txtPrice, color: '#FFD900'}}>TC</Text>
            </View>
            <View style={styles.viewFloor}>
              <Text style={{...styles.txtPrice, color: '#FFD900'}}>50.5</Text>
            </View>
          </View>
          <View style={{...styles.viewInfoPriceSecond, marginRight: WIDTH * 8}}>
            <View style={styles.viewFloor}>
              <Text style={{...styles.txtPrice, color: '#5A5959'}}>
           {i18n.t('recommendedPurchasePrice')}
              </Text>
            </View>
            <View style={styles.priceBuy}>
              <Text style={{...styles.txtPrice, color: '#EB3027'}}>50.5</Text>
              <Text style={{...styles.txtPrice, color: '#EB3027'}}>50.5</Text>
            </View>
          </View>
          <View style={styles.viewInfoPriceSecond}>
            <View style={styles.viewFloor}>
              <Text style={{...styles.txtPrice, color: '#5A5959'}}>
              {i18n.t('recommendedSellingPrice')}
              </Text>
            </View>
            <View style={styles.priceBuy}>
              <Text style={{...styles.txtPrice, color: '#46A32F'}}>50.5</Text>
              <Text style={{...styles.txtPrice, color: '#46A32F'}}>50.5</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerPurchase}>
          <View style={{...styles.viewDecrement, marginRight: WIDTH * 31}}>
            <TouchableOpacity style={styles.btnPlus}>
              <Image source={Images.iconIncre} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.plus}>{i18n.t('prices')}</Text>
            <TouchableOpacity style={styles.btnPlus}>
              <Image source={Images.iconDecre} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={{...styles.viewDecrement, marginLeft: WIDTH * 31}}>
            <TouchableOpacity style={styles.btnPlus}>
              <Image source={Images.iconIncre} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.plus}>KL</Text>
            <TouchableOpacity style={styles.btnPlus}>
              <Image source={Images.iconDecre} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerlimit}>
          <View style={{...styles.viewLimit, marginRight: WIDTH * 31}}>
            <Text>{i18n.t('buyMax')}:</Text>
            <Text>00</Text>
          </View>
          <View style={{...styles.viewLimit, marginLeft: WIDTH * 31}}>
            <Text>{i18n.t('sellMax')}: </Text>
            <Text>00</Text>
          </View>
        </View>
        <View style={styles.containerAllMoney}>
          <View style={styles.line} />
          <View style={styles.sumAll}>
            <Text>Tổng giá trị</Text>
            <View style={styles.viewSumMoney}>
              <Text>62.000.000</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.contaierOrder}>
            <View style={styles.viewOrder}>
              <Text style={styles.txtOrder}>Lệnh thường</Text>
            </View>
            <View style={styles.viewOrder}>
              <Text style={styles.txtOrder}>Lệnh 24/7</Text>
            </View>
            <View style={styles.viewOrder}>
              <Text style={styles.txtOrder}>Lệnh GTD</Text>
            </View>
            <View style={styles.viewOrder}>
              <Text style={styles.txtOrder}>Lệnh stop limit</Text>
            </View>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.containerLabel}>
          <Text style={styles.label}>KL mua</Text>
          <Text style={styles.label}>Giá mua</Text>
          <Text style={styles.label}>Giá bán</Text>
          <Text style={styles.label}>KL bán</Text>
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
        />
      </View>
      <View style={styles.foot}>
        <TouchableOpacity
          style={{
            ...styles.btnPurchase,
            backgroundColor: '#45B9A4',
            marginRight: 13,
          }}>
          <Text>Mua</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.btnPurchase,
            backgroundColor: '#ED5B54',
            marginLeft: 13,
          }}>
          <Text>Bán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetOder;
