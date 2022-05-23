import {Image, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../assets';
import HeaderHome from '../../component/header';
import Drawer from '../../navigation/drawer';
const Chat = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <HeaderHome title={'AZFIN CHAT'} btnRight={() => setVisible(true)} />
      <View style={styles.item}>
        <Image source={Images.iconCircle} style={styles.icon} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Tư vấn tích sản cổ phiếu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.item}>
        <Image source={Images.iconCircle} style={styles.icon} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Tư vấn các khóa học của Azfin</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.item}>
        <Image source={Images.iconCircle} style={styles.icon} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>
            Tư vấn tái cấu trúc dành cho doanh nghiệp
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Drawer visible={visible} close={() => setVisible(false)} />
      </View>
    </View>
  );
};

export default Chat;
