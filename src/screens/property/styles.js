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
  viewRegister: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WIDTH * 14,
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 16,
  },
  txtRegis: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_12,
    color: '#404040',
    marginRight: WIDTH * 16,
  },
  btnRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.MAIN_P,
    paddingVertical: WIDTH * 8,
    paddingHorizontal: WIDTH * 12,
    borderRadius: WIDTH * 6,
  },
  txtRegister: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_10,
    color: COLOR.WHITE_P,
  },
});
export default styles;
