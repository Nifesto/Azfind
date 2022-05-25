import {StyleSheet, Dimensions} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  contain: {
    paddingHorizontal: WIDTH * 19,
    alignItems: 'center',
  },
  text: {
    color: COLOR.MAIN_P,
    fontSize: FONTSIZE.f_40,
  },
  tich: {
    width: WIDTH * 62,
    height: WIDTH * 62,
    marginTop: WIDTH * 96,
  },
  success: {
    width: WIDTH * 272,
    height: WIDTH * 161,
    marginTop: WIDTH * 22,
  },
  confirm: {
    marginTop: WIDTH * 148,
    backgroundColor: '#0E448A',
    width: '100%',
    height: WIDTH * 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txtCf: {
    color: COLOR.WHITE_P,
    fontSize: FONTSIZE.f_20,
    fontFamily: FONT_FAMILY.medium,
  },
});
export default styles;
