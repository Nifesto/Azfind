import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../../base/core';
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 16,
  },
  accumulation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
    height: WIDTH * 33,
    alignItems: 'center',
    marginTop: WIDTH * 9,
    paddingHorizontal: WIDTH * 4,
    borderRadius: 5,
  },
  text_1: {
    color: '#0E448A',
    fontSize: FONTSIZE.f_20,
    fontFamily: FONT_FAMILY.bold,
  },
  text_2: {
    color: '#404040',
    fontSize: FONTSIZE.f_20,
  },

  more: {
    width: WIDTH * 12,
    height: WIDTH * 7,
    tintColor: COLOR.MAIN_P,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH * 40,
  },
});
export default styles;
