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
  viewLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnLabel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: WIDTH * 8,
  },
  label: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
    color: '#404040',
  },
});
export default styles;
