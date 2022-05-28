import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../../base/core';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: WIDTH * 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    paddingVertical: WIDTH * 9,
    paddingHorizontal: WIDTH * 16,
    marginTop: WIDTH * 6,
    borderRadius: WIDTH * 5,
  },
  accumulation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    marginTop: WIDTH * 9,
    paddingHorizontal: WIDTH * 16,
    borderRadius: 5,
    paddingVertical: WIDTH * 9,
  },
  text_1: {
    color: '#0E448A',
    fontSize: FONTSIZE.f_15,
    fontFamily: FONT_FAMILY.bold,
    flex: 3.5,
  },
  text_2: {
    color: '#404040',
    fontSize: FONTSIZE.f_15,
    flex: 2,
    textAlign: 'right',
    paddingRight: WIDTH * 8,
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
  },
});
export default styles;
