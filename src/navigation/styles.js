import {StyleSheet, Platform, Dimensions} from 'react-native';

import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH, WIDTH_WINDOW} from '../base/core';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
    height: WIDTH * 70,
    width: WIDTH_WINDOW,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLOR.MAIN_P,
  },
  txt: {
    color: COLOR.WHITE_P,
    fontSize: FONTSIZE.f_11,
    fontFamily: FONT_FAMILY.regular,
    marginTop: WIDTH * 4,
  },
  icon: {
    width: WIDTH * 28,
    height: WIDTH * 28,
    resizeMode: 'contain',
  },
  iconDraw: {
    width: WIDTH * 23,
    height: WIDTH * 23,
    resizeMode: 'contain',
    marginLeft: WIDTH * 8,
    tintColor: COLOR.WHITE_P,
  },
  titleDraw: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_14,
    color: COLOR.WHITE_P,
  },
  btnDraw: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-end',
  },
  containerBtnDraw: {
    borderBottomColor: COLOR.MAIN_P,
    borderBottomWidth: 2,
    paddingVertical: WIDTH * 10,
    alignItems: 'flex-end',
    paddingHorizontal: WIDTH * 16,
  },
});

export default styles;
