import {Image, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../assets';
import Header from '../../component/header';
import Drawer from '../../navigation/drawer';
const PlanProperty = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <Header title={'KẾ HOẠCH TÍCH SẢN'} btnRight={() => setVisible(true)} />

      <View>
        <Drawer visible={visible} close={() => setVisible(false)} />
      </View>
    </View>
  );
};

export default PlanProperty;
