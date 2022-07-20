/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderHome from '../../component/headerHome';
import {COLOR, WIDTH_WINDOW} from '../../base/core';
import PropertyTab from './propertyTab';
import CategoryTab from './categoryTab';
import Drawer from '../../navigation/drawer';
import i18n from '../../translate/i18n';
const Property = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [choose, setChoose] = React.useState(0);
  const refScroll = React.useRef();
  const [title, setTitle] = useState([
    {name: i18n.t('assets')},
    {
      name:  i18n.t('category'),
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
      <HeaderHome
        onPressDraw={() => setVisible(true)}
        onPressUser={() => navigation.navigate('Profile')}
        onPressBell={() => navigation.navigate('Notification')}
      />
      <View style={styles.viewLabel}>
        {title.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(item, index)}
              style={{
                ...styles.btnLabel,
                backgroundColor: index === choose ? '#063167' : COLOR.MAIN_P,
              }}
              key={index}>
              <Text style={styles.label}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View> 
      <View style={styles.viewRegister}>
        <Text style={styles.txtRegis}>{i18n.t('autoRegister')}</Text>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.txtRegister}>{i18n.t('register')}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          ref={refScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={true}
          scrollEnabled={false}>
          <PropertyTab />
          <CategoryTab />
        </ScrollView>
      </View>
      <View>
        <Drawer visible={visible} close={() => setVisible(false)} />
      </View>
    </View>
  );
};

export default Property;
