import {StyleSheet} from 'react-native';
import {FONTSIZE, COLOR, WIDTH, FONT_FAMILY} from '../../../base/core';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  stt: {
    color: COLOR.BLACK_P,
    fontSize: FONTSIZE.f_12,
    fontFamily:FONT_FAMILY.bold
  },
  flt: {
    paddingHorizontal: WIDTH * 16,
    flexDirection: 'row',
    paddingVertical: WIDTH * 5,
    marginBottom: WIDTH * 3,
    backgroundColor: '#F1F1F1',
  },
  img: {
    width: WIDTH * 33,
    height: WIDTH * 33,
    resizeMode: 'contain',
    marginRight: WIDTH * 8,
    marginTop: WIDTH * 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sdt: {
    color: COLOR.BLACK_P,
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.regular
  },
  money: {
    color: 'red',
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.regular
  },
  title: {
    color: COLOR.BLACK_P,
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.regular
  },
  times: {
    flexDirection: 'row',
  },
  time: {
    color: COLOR.BLACK_P,
    fontSize: FONTSIZE.f_10,
    fontFamily: FONT_FAMILY.regular,
    marginRight:WIDTH*8,
  },
  date: {
    color: COLOR.BLACK_P,
    fontSize: FONTSIZE.f_10,
    fontFamily: FONT_FAMILY.regular
  },
});

export default styles;
