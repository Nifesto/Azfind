import React from 'react';
import {Image, Text, TouchableOpacity, View, Modal} from 'react-native';
import Images from '../../assets';

import styles from './styles';
const ModalRegisterSuccess = ({
  isShow,
  content,
  title,
  accept,
  close,
  accessLanguage,
}) => {
  return (
    <View>
      <Modal
        renderToHardwareTextureAndroid
        transparent
        statusBarTranslucent
        visible={isShow}>
        <View style={styles.containerAlert}>
          <View style={styles.content}>
            <View style={styles.viewTopContent}>
              <Image source={Images.iconAlert} style={styles.icon} />
              <Text style={styles.title}>Thông báo</Text>
              <Text style={styles.txtcontent}>
                Quý khách đã đăng ký mở khóa thành công. Vui lòng kiểm tra thông
                tin chi tiết tài khoản tại Email đã đăng ký
              </Text>
            </View>
            <View style={styles.viewBotBtn}>
              <TouchableOpacity
                onPress={close}
                activeOpacity={0.8}
                style={[styles.btnConfirm]}>
                <Text style={styles.txtConfirm}>Đồng ý</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalRegisterSuccess;
