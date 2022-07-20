/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Images from '../../../assets';
import {WIDTH} from '../../../base/core';
import i18n from '../../../translate/i18n';
const Item = ({title, src, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Image source={src} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.line} />
    </>
  );
};
const RenderItem = ({item, index}) => {
  return (
    <View>
      <View style={styles.viewHeadItem}>
        <View style={{...styles.row, flex: 1, alignItems: 'flex-end'}}>
          <Text style={styles.nameStock}>{item.name}</Text>
          <Text style={styles.currentStock}>{item.currentMoney}</Text>
        </View>
        <View style={{flex: 1}} />
        <View style={{...styles.row, flex: 1, justifyContent: 'center'}}>
          <Text style={styles.allMoneyStock}>{item.moneyAll}</Text>
          <Text style={styles.allMoneyStock}> (-15%) </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.row,
          justifyContent: 'space-between',
          paddingHorizontal: WIDTH * 16,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.value}>{i18n.t('price')}</Text>
          <Text style={styles.value}>{item.currentMoney}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.value}>{i18n.t('total')}</Text>
          <Text style={styles.value}>{item.all}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.value}>{i18n.t('traded')}</Text>
          <Text style={styles.value}>{item.purchase}</Text>
        </View>
      </View>
      <View style={styles.lineItem} />
    </View>
  );
};
const CategoryTab = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [checkRetire, setCheckRetire] = useState(false);
  const [checkChild, setCheckChild] = useState(false);
  const [checkProperty, setCheckProperty] = useState(false);
  const [checkFlexible, setCheckFlexible] = useState(false);
  const [dataAll] = React.useState([
    {
      name: 'Hpg',
      currentMoney: '47.25',
      moneyAll: '14,512,900',
      moneyStart: '46.25',
      all: '500',
      purchase: '500',
    },
    {
      name: 'FPT',
      currentMoney: '115.00',
      moneyAll: '4,512,900',
      moneyStart: '98.56',
      all: '300',
      purchase: '300',
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Item
          title={i18n.t('alls')}
          src={checkAll ? Images.iconDropUp : Images.iconDropdown}
          onPress={() => setCheckAll(!checkAll)}
        />
        {checkAll && (
          <View style={{backgroundColor: '#FFFFFF'}}>
            <Text style={styles.nameItem}>NGUYỄN VĂN A - 0394xxx9332 </Text>
            <View style={styles.viewMoney}>
              <Text style={styles.txtAll}>{i18n.t('totalAssets')}</Text>
              <Text style={styles.txtMoneyAll}> 19.025.800</Text>
            </View>
            {dataAll.map((item, index) => {
              return <RenderItem item={item} index={index} key={index} />;
            })}
          </View>
        )}
        <Item
          title={i18n.t('retirement_Assets')}
          src={checkRetire ? Images.iconDropUp : Images.iconDropdown}
          onPress={() => setCheckRetire(!checkRetire)}
        />
        {checkRetire && (
          <View style={{backgroundColor: '#FFFFFF'}}>
            <Text style={styles.nameItem}>NGUYỄN VĂN A - 0394xxx9332 </Text>
            <View style={styles.viewMoney}>
            <Text style={styles.txtAll}>{i18n.t('totalAssets')}</Text>
              <Text style={styles.txtMoneyAll}> 19.025.800</Text>
            </View>
            {dataAll.map((item, index) => {
              return <RenderItem item={item} index={index} key={index} />;
            })}
          </View>
        )}
        <Item
          title={i18n.t('assetsForChildren')}
          src={checkChild ? Images.iconDropUp : Images.iconDropdown}
          onPress={() => setCheckChild(!checkChild)}
        />
        {checkChild && (
          <View style={{backgroundColor: '#FFFFFF'}}>
            <Text style={styles.nameItem}>NGUYỄN VĂN A - 0394xxx9332 </Text>
            <View style={styles.viewMoney}>
            <Text style={styles.txtAll}>{i18n.t('totalAssets')}</Text>
              <Text style={styles.txtMoneyAll}> 19.025.800</Text>
            </View>
            {dataAll.map((item, index) => {
              return <RenderItem item={item} index={index} key={index} />;
            })}
          </View>
        )}
        <Item
          title={i18n.t('SavingToBuyACarAndAHouse')}
          src={checkProperty ? Images.iconDropUp : Images.iconDropdown}
          onPress={() => setCheckProperty(!checkProperty)}
        />
        {checkProperty && (
          <View style={{backgroundColor: '#FFFFFF'}}>
            <Text style={styles.nameItem}>NGUYỄN VĂN A - 0394xxx9332 </Text>
            <View style={styles.viewMoney}>
            <Text style={styles.txtAll}>{i18n.t('totalAssets')}</Text>
              <Text style={styles.txtMoneyAll}> 19.025.800</Text>
            </View>
            {dataAll.map((item, index) => {
              return <RenderItem item={item} index={index} key={index} />;
            })}
          </View>
        )}
        <Item
          title={i18n.t('flexibleInvestment')}
          src={checkFlexible ? Images.iconDropUp : Images.iconDropdown}
          onPress={() => setCheckFlexible(!checkFlexible)}
        />
        {checkFlexible && (
          <View style={{backgroundColor: '#FFFFFF'}}>
            <Text style={styles.nameItem}>NGUYỄN VĂN A - 0394xxx9332 </Text>
            <View style={styles.viewMoney}>
            <Text style={styles.txtAll}>{i18n.t('totalAssets')}</Text>
              <Text style={styles.txtMoneyAll}> 19.025.800</Text>
            </View>
            {dataAll.map((item, index) => {
              return <RenderItem item={item} index={index} key={index} />;
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CategoryTab;
