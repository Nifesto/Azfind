import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';

import styles from './styles';
const ModalTwoButton = ({
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
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.txtcontent}>{content}</Text>
            </View>
            <View style={styles.viewBotBtn}>
              <TouchableOpacity
                onPress={close}
                activeOpacity={0.8}
                style={[styles.btnConfirm]}>
                <Text style={styles.txtConfirm}>Xác nhận</Text>
              </TouchableOpacity>
              <View style={styles.line} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={accept}
                style={[styles.btnClose]}>
                <Text style={styles.txtConfirm}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalTwoButton;
