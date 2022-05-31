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
    width: WIDTH_WINDOW,
    paddingBottom: WIDTH * 75,
  },
  icon: {
    width: WIDTH * 13,
    height: WIDTH * 13,
    resizeMode: 'contain',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: WIDTH * 16,
    paddingVertical: WIDTH * 8,
  },
  line: {
    height: 4,
    backgroundColor: COLOR.WHITE_P,
  },
  title: {
    color: COLOR.MAIN_P,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_12,
  },
  value: {
    color: '#404040',
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    flex: 1,
    textAlign: 'right',
    paddingRight: WIDTH * 14,
  },
  itemShow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
    backgroundColor: COLOR.WHITE_P,
    alignItems: 'center',
    paddingVertical: WIDTH * 8,
  },
  viewStock: {
    flexDirection: 'row',
    paddingHorizontal: WIDTH * 16,
    backgroundColor: COLOR.WHITE_P,
    paddingVertical: WIDTH * 8,
  },
  labelStock: {
    width: (WIDTH_WINDOW - WIDTH * 32) / 6,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: '#404040',
  },
  status: {
    color: COLOR.MAIN_P,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_12,
    marginLeft: WIDTH * 20,
    marginVertical: WIDTH * 9,
  },
  lineStock: {
    height: 4,
    backgroundColor: '#F4F4F4',
  },
  itemSep: {
    height: 2,
    backgroundColor: '#F4F4F4',
  },
});
export default styles;
