import {StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    width: WIDTH_WINDOW,
  },
  stt: {
    color: '#222',
  },
  flt: {
    paddingHorizontal: WIDTH * 16,
    flexDirection: 'row',
    paddingVertical: WIDTH * 5,
    marginBottom: WIDTH * 3,
    backgroundColor: '#F1F1F1',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  times: {
    flexDirection: 'row',
  },
  img: {
    width: WIDTH * 33,
    height: WIDTH * 33,
    resizeMode: 'contain',
    marginRight: WIDTH * 8,
    marginTop: WIDTH * 10,
  },
  stt: {
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.BLACK_P,
  },
  sdt: {
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
  },
  cmd: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
    color: COLOR.BLACK_P
  },
  quantity: {
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
  },
  brand: {
    color: COLOR.MAIN_P,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
  },
  price: {
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
  },
  time: {
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_10,
  },
  date: {
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_10,
    marginLeft: WIDTH * 20,
  },
});

export default styles;
