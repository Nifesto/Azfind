import {StyleSheet, Text, View} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  icon: {
    width: WIDTH * 74,
    height: WIDTH * 74,
    resizeMode: 'contain',
    borderRadius: WIDTH * 74,
  },
  txt: {
    fontSize: FONTSIZE.f_16,
    fontFamily: FONT_FAMILY.bold,
    color: '#404040',
    marginLeft: WIDTH * 8,
    textTransform: 'uppercase',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 16,
    paddingVertical: WIDTH * 6,
  },
  line: {
    height: 2,
    backgroundColor: COLOR.WHITE_P,
  },
  btn: {
    flex: 1,
  },
});
export default styles;
