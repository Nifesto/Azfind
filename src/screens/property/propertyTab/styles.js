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
});
export default styles;
