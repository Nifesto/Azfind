/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import {COLOR, HEIGHT_WINDOW, WIDTH, WIDTH_WINDOW} from '../base/core';
import Images from '../assets';
const {width, height} = Dimensions.get('screen');
const Button = props => {
  return (
    <View style={styles.btnDraw}>
      <Text style={styles.titleDraw}>{props.title}</Text>
      <Image source={props.src} style={styles.iconDraw} />
    </View>
  );
};
const Drawer = props => {
  return (
    <Modal
      hideModalContentWhileAnimating
      useNativeDriver
      // coverScreen
      isVisible={props.visible}
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      onBackdropPress={() => props.close()}
      onBackButtonPress={() => props.close()}
      backdropColor={COLOR.NONE}
      statusBarTranslucent
      backdropOpacity={1}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#063167',
          width: WIDTH * 263,
          top: WIDTH * 70,
          bottom: WIDTH * 48,
          position: 'absolute',
          right: -WIDTH * 25,
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomColor: COLOR.MAIN_P,
              paddingVertical: WIDTH * 10,
              borderBottomWidth: 2,
              paddingHorizontal: WIDTH * 14,
            }}>
            <TouchableOpacity onPress={() => props.close()}>
              <Image
                source={Images.iconClose}
                style={{...styles.iconDraw, tintColor: null}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Button title={'Cài đặt Smart OTP'} src={Images.iconSmartOtp} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerBtnDraw}>
            <TouchableOpacity>
              <Button title={'Ưu đãi'} src={Images.iconDiscount} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerBtnDraw}>
            <TouchableOpacity>
              <Button title={'Liên hệ'} src={Images.iconPhone} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerBtnDraw}>
            <TouchableOpacity>
              <Button title={'Phản hồi'} src={Images.iconMessage} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerBtnDraw}>
            <TouchableOpacity>
              <Button title={'Hướng dẫn'} src={Images.iconPlay} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Drawer;
