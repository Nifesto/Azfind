import {StyleSheet, Platform, StatusBar} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.MAIN_P,
    height: WIDTH * 92,
    paddingTop: Platform.OS === 'ios' ? WIDTH * 30 : StatusBar.currentHeight,

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 16,
  },
  icon: {
    width: WIDTH * 23,
    height: WIDTH * 23,
    resizeMode: 'contain',
    tintColor: COLOR.MAIN_P,
    marginRight: WIDTH * 9,
  },
  title: {
    color: COLOR.MAIN_P,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_18,
  },
});
export default styles;
