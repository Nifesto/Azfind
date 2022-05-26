import {StyleSheet} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnLabel: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: WIDTH * 14,
  },
  label: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
    color: COLOR.WHITE_P,
  },
  //
});
export default styles;
