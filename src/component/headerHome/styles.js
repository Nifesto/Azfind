import {StyleSheet} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.MAIN_P,
    height: WIDTH * 90,
    paddingTop: WIDTH * 20,
    // paddingBottom: WIDTH * 13,
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
  iconRight: {
    width: WIDTH * 24,
    height: WIDTH * 24,
    resizeMode: 'contain',
    tintColor: COLOR.WHITE_P,
  },
  viewRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    paddingLeft: WIDTH * 16,
  },
  viewNumber: {
    position: 'absolute',
    backgroundColor: COLOR.MAIN_S,
    right: -WIDTH*2,
    top: -WIDTH*2,
    width: WIDTH * 14,
    height: WIDTH * 14,
    borderRadius: WIDTH * 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: COLOR.WHITE_P,
    fontSize: FONTSIZE.f_9,
    fontFamily: FONT_FAMILY.regular,
  },
});
export default styles;
