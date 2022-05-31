import {StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: WIDTH * 16,
    width: WIDTH_WINDOW,
    justifyContent: 'space-between',
  },
  button: {
    borderBottomColor: COLOR.MAIN_P,
    alignItems: 'center',
    justifyContent: 'center',
    width: (WIDTH_WINDOW - WIDTH * 32) / 3,
    paddingVertical: WIDTH * 8,
  },
});
export default styles;
