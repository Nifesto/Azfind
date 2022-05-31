import {TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../../assets';
import {WIDTH_WINDOW} from '../../../base/core';
import i18n from '../../../translate/i18n';
const Item = ({title, value, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
        <Image source={Images.iconNext} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.line} />
    </>
  );
};
const ItemShowEven = (title, value) => {
  return (
    <View style={styles.itemShow}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};
const ItemShowOdd = (title, value) => {
  return (
    <View style={{...styles.itemShow, backgroundColor: '#F4F4F4'}}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};
const PropertyTab = () => {
  const [checkAll, setCheckAll] = React.useState(false);
  const [checkRetied, setCheckRetied] = React.useState(false);
  const [checkChild, setCheckChild] = React.useState(false);
  const [checkProperty, setCheckProperty] = React.useState(false);
  const [checkFlexible, setCheckFlexible] = React.useState(false);
  const [data] = React.useState([
    {a: 'VPB', b: '1.000', c: '0', d: '0', e: '0', f: '1.000'},
    {a: 'VPB', b: '1.000', c: '0', d: '0', e: '0', f: '1.000'},
    {a: 'VPB', b: '1.000', c: '0', d: '0', e: '0', f: '1.000'},
    {a: 'VPB', b: '1.000', c: '0', d: '0', e: '0', f: '1.000'},
    {a: 'VPB', b: '1.000', c: '0', d: '0', e: '0', f: '1.000'},
    {a: 'VPB', b: '1.000', c: '0', d: '0', e: '0', f: '1.000'},
    {a: 'VPB', b: '1.000', c: '0', d: '0', e: '0', f: '1.000'},
    {a: 'VPB', b: '1.000', c: '0', d: '0', e: '0', f: '1.000'},
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Item
          title={i18n.t('alls')}
          value={'600.000.000đ'}
          onPress={() => setCheckAll(!checkAll)}
        />
        {checkAll && (
          <View>
            {ItemShowEven('Giá trị tài sản ròng', '1000000')}
            {ItemShowOdd('Giá trị thị trường của CK', '1000000')}
            {ItemShowEven('Giá trị chứng khoán quyền ', '1000000')}
            {ItemShowOdd('Số dư tiền có trong tài khoản', '1000000')}
            {ItemShowEven('Tiền chở về', '1000000')}
            {ItemShowOdd('Tiền tối đa được ứng trước', '1000000')}
            {ItemShowEven('Cổ tức tiền', '1000000')}
            {ItemShowOdd('Tiền rút được', '1000000')}
            {ItemShowEven('Nợ', '1000000')}
            {ItemShowOdd('Rtt')}
            <Text style={styles.status}>TRẠNGN THÁI CHỨNG KHOÁN</Text>
            <View style={styles.viewStock}>
              <Text style={styles.labelStock}>Mã</Text>
              <Text style={styles.labelStock}>GD</Text>
              <Text style={styles.labelStock}>Chờ GD</Text>
              <Text style={styles.labelStock}>Chờ về</Text>
              <Text style={styles.labelStock}>Ký quỹ</Text>
              <Text style={styles.labelStock}>Tổng</Text>
            </View>
            <View style={styles.lineStock} />
            {data.map((item, index) => {
              return (
                <>
                  <View key={index} style={styles.viewStock}>
                    <Text style={styles.labelStock}>{item.a}</Text>
                    <Text style={styles.labelStock}>{item.b}</Text>
                    <Text style={styles.labelStock}>{item.c}</Text>
                    <Text style={styles.labelStock}>{item.d}</Text>
                    <Text style={styles.labelStock}>{item.e}</Text>
                    <Text style={styles.labelStock}>{item.f}</Text>
                  </View>
                  <View style={styles.itemSep} />
                </>
              );
            })}
          </View>
        )}
        <Item
          title={i18n.t('retirement_Assets')}
          value={'600.000.000đ'}
          onPress={() => setCheckRetied(!checkRetied)}
        />
        {checkRetied && (
          <View>
            {ItemShowEven('Giá trị tài sản ròng', '1000000')}
            {ItemShowOdd('Giá trị thị trường của CK', '1000000')}
            {ItemShowEven('Giá trị chứng khoán quyền ', '1000000')}
            {ItemShowOdd('Số dư tiền có trong tài khoản', '1000000')}
            {ItemShowEven('Tiền chở về', '1000000')}
            {ItemShowOdd('Tiền tối đa được ứng trước', '1000000')}
            {ItemShowEven('Cổ tức tiền', '1000000')}
            {ItemShowOdd('Tiền rút được', '1000000')}
            {ItemShowEven('Nợ', '1000000')}
            {ItemShowOdd('Rtt')}
            <Text style={styles.status}>TRẠNGN THÁI CHỨNG KHOÁN</Text>
            <View style={styles.viewStock}>
              <Text style={styles.labelStock}>Mã</Text>
              <Text style={styles.labelStock}>GD</Text>
              <Text style={styles.labelStock}>Chờ GD</Text>
              <Text style={styles.labelStock}>Chờ về</Text>
              <Text style={styles.labelStock}>Ký quỹ</Text>
              <Text style={styles.labelStock}>Tổng</Text>
            </View>
            <View style={styles.lineStock} />
            {data.map((item, index) => {
              return (
                <>
                  <View key={index} style={styles.viewStock}>
                    <Text style={styles.labelStock}>{item.a}</Text>
                    <Text style={styles.labelStock}>{item.b}</Text>
                    <Text style={styles.labelStock}>{item.c}</Text>
                    <Text style={styles.labelStock}>{item.d}</Text>
                    <Text style={styles.labelStock}>{item.e}</Text>
                    <Text style={styles.labelStock}>{item.f}</Text>
                  </View>
                  <View style={styles.itemSep} />
                </>
              );
            })}
          </View>
        )}
        <Item
          title={i18n.t('assetsForChildren')}
          value={'600.000.000đ'}
          onPress={() => setCheckChild(!checkChild)}
        />
        {checkChild && (
          <View>
            {ItemShowEven('Giá trị tài sản ròng', '1000000')}
            {ItemShowOdd('Giá trị thị trường của CK', '1000000')}
            {ItemShowEven('Giá trị chứng khoán quyền ', '1000000')}
            {ItemShowOdd('Số dư tiền có trong tài khoản', '1000000')}
            {ItemShowEven('Tiền chở về', '1000000')}
            {ItemShowOdd('Tiền tối đa được ứng trước', '1000000')}
            {ItemShowEven('Cổ tức tiền', '1000000')}
            {ItemShowOdd('Tiền rút được', '1000000')}
            {ItemShowEven('Nợ', '1000000')}
            {ItemShowOdd('Rtt')}
            <Text style={styles.status}>TRẠNGN THÁI CHỨNG KHOÁN</Text>
            <View style={styles.viewStock}>
              <Text style={styles.labelStock}>Mã</Text>
              <Text style={styles.labelStock}>GD</Text>
              <Text style={styles.labelStock}>Chờ GD</Text>
              <Text style={styles.labelStock}>Chờ về</Text>
              <Text style={styles.labelStock}>Ký quỹ</Text>
              <Text style={styles.labelStock}>Tổng</Text>
            </View>
            <View style={styles.lineStock} />
            {data.map((item, index) => {
              return (
                <>
                  <View key={index} style={styles.viewStock}>
                    <Text style={styles.labelStock}>{item.a}</Text>
                    <Text style={styles.labelStock}>{item.b}</Text>
                    <Text style={styles.labelStock}>{item.c}</Text>
                    <Text style={styles.labelStock}>{item.d}</Text>
                    <Text style={styles.labelStock}>{item.e}</Text>
                    <Text style={styles.labelStock}>{item.f}</Text>
                  </View>
                  <View style={styles.itemSep} />
                </>
              );
            })}
          </View>
        )}
        <Item
          title={i18n.t('SavingToBuyACarAndAHouse')}
          value={'600.000.000đ'}
          onPress={() => setCheckProperty(!checkProperty)}
        />
        {checkProperty && (
          <View>
            {ItemShowEven('Giá trị tài sản ròng', '1000000')}
            {ItemShowOdd('Giá trị thị trường của CK', '1000000')}
            {ItemShowEven('Giá trị chứng khoán quyền ', '1000000')}
            {ItemShowOdd('Số dư tiền có trong tài khoản', '1000000')}
            {ItemShowEven('Tiền chở về', '1000000')}
            {ItemShowOdd('Tiền tối đa được ứng trước', '1000000')}
            {ItemShowEven('Cổ tức tiền', '1000000')}
            {ItemShowOdd('Tiền rút được', '1000000')}
            {ItemShowEven('Nợ', '1000000')}
            {ItemShowOdd('Rtt')}
            <Text style={styles.status}>TRẠNGN THÁI CHỨNG KHOÁN</Text>
            <View style={styles.viewStock}>
              <Text style={styles.labelStock}>Mã</Text>
              <Text style={styles.labelStock}>GD</Text>
              <Text style={styles.labelStock}>Chờ GD</Text>
              <Text style={styles.labelStock}>Chờ về</Text>
              <Text style={styles.labelStock}>Ký quỹ</Text>
              <Text style={styles.labelStock}>Tổng</Text>
            </View>
            <View style={styles.lineStock} />
            {data.map((item, index) => {
              return (
                <>
                  <View key={index} style={styles.viewStock}>
                    <Text style={styles.labelStock}>{item.a}</Text>
                    <Text style={styles.labelStock}>{item.b}</Text>
                    <Text style={styles.labelStock}>{item.c}</Text>
                    <Text style={styles.labelStock}>{item.d}</Text>
                    <Text style={styles.labelStock}>{item.e}</Text>
                    <Text style={styles.labelStock}>{item.f}</Text>
                  </View>
                  <View style={styles.itemSep} />
                </>
              );
            })}
          </View>
        )}
        <Item
          title={i18n.t('flexibleInvestment')}
          value={'600.000.000đ'}
          onPress={() => setCheckFlexible(!checkFlexible)}
        />
        {checkFlexible && (
          <View>
            {ItemShowEven('Giá trị tài sản ròng', '1000000')}
            {ItemShowOdd('Giá trị thị trường của CK', '1000000')}
            {ItemShowEven('Giá trị chứng khoán quyền ', '1000000')}
            {ItemShowOdd('Số dư tiền có trong tài khoản', '1000000')}
            {ItemShowEven('Tiền chở về', '1000000')}
            {ItemShowOdd('Tiền tối đa được ứng trước', '1000000')}
            {ItemShowEven('Cổ tức tiền', '1000000')}
            {ItemShowOdd('Tiền rút được', '1000000')}
            {ItemShowEven('Nợ', '1000000')}
            {ItemShowOdd('Rtt')}
            <Text style={styles.status}>TRẠNGN THÁI CHỨNG KHOÁN</Text>
            <View style={styles.viewStock}>
              <Text style={styles.labelStock}>Mã</Text>
              <Text style={styles.labelStock}>GD</Text>
              <Text style={styles.labelStock}>Chờ GD</Text>
              <Text style={styles.labelStock}>Chờ về</Text>
              <Text style={styles.labelStock}>Ký quỹ</Text>
              <Text style={styles.labelStock}>Tổng</Text>
            </View>
            <View style={styles.lineStock} />
            {data.map((item, index) => {
              return (
                <>
                  <View key={index} style={styles.viewStock}>
                    <Text style={styles.labelStock}>{item.a}</Text>
                    <Text style={styles.labelStock}>{item.b}</Text>
                    <Text style={styles.labelStock}>{item.c}</Text>
                    <Text style={styles.labelStock}>{item.d}</Text>
                    <Text style={styles.labelStock}>{item.e}</Text>
                    <Text style={styles.labelStock}>{item.f}</Text>
                  </View>
                  <View style={styles.itemSep} />
                </>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default PropertyTab;
