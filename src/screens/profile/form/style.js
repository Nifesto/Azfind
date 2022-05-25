import {StyleSheet} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../../base/core';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: WIDTH * 12,
  },
  img: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    resizeMode: 'contain',
  },

  text: {
    fontSize: FONTSIZE.f_15,
    color: '#222',
    marginLeft: WIDTH * 14,
  },
});
export default styles;
