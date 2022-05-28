import {StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: WIDTH * 43,
    alignItems: 'center',
    paddingHorizontal: WIDTH * 16,
  },
  icon: {
    width: WIDTH * 23,
    height: WIDTH * 23,
    resizeMode: 'contain',
    tintColor: COLOR.MAIN_P,
    marginRight: WIDTH*9
  },
  title: {
    color: COLOR.MAIN_P,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_18,
  },
});
export default styles;
