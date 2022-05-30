import {TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../../assets';
import {WIDTH_WINDOW} from '../../../base/core';
import i18n from '../../../translate/i18n';
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
      <Item title={i18n.t('alls')} value={'600.000.000đ'} />
      <Item title={i18n.t('retirement_Assets')} value={'600.000.000đ'} />
      <Item title={i18n.t('assetsForChildren')} value={'600.000.000đ'} />
      <Item title={i18n.t('SavingToBuyACarAndAHouse')} value={'600.000.000đ'} />
      <Item title={i18n.t('flexibleInvestment')} value={'600.000.000đ'} />
    </View>
  );
};

export default PropertyTab;
