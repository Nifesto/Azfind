import {StyleSheet} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.MAIN_P,
    height: WIDTH * 90,
    paddingTop: WIDTH * 20,
    // paddingBottom: WIDTH * 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
  },
  icon: {
    width: WIDTH * 26,
    height: WIDTH * 26,
    resizeMode: 'contain',
    tintColor: COLOR.WHITE_P,
  },
  title: {
    color: COLOR.WHITE_P,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
  },
});
export default styles;
