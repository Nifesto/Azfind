import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from 'react-native';
import Images from '../../assets';

import styles from './styles';
const ModalRequets = ({
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
              <Text style={styles.title}>Đổi mật khẩu</Text>
            </View>
            <View style={styles.containerInput}>
              <TextInput placeholder="Mật khẩu cũ" style={styles.input} />
              <TextInput placeholder="Mật khẩu" style={styles.input} />
              <TextInput placeholder="Nhập lại mật khẩu" style={styles.input} />
            </View>
            <View style={styles.viewBotBtn}>
              <TouchableOpacity
                onPress={close}
                activeOpacity={0.8}
                style={[styles.btnConfirm]}>
                <Text style={styles.txtConfirm}>Xác thực</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={close}
                activeOpacity={0.8}
                style={[styles.btnClose]}>
                <Text style={styles.txtClose}>Huỷ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalRequets;
