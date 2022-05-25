import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';
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
    marginTop: WIDTH * 57,
    color: '#000',
    fontSize: FONTSIZE.f_18,
  },
  text_1: {
    marginTop: WIDTH * 20,
    color: '#000',
    fontSize: FONTSIZE.f_18,
  },
  input: {
    letterSpacing: 10,
    paddingHorizontal: WIDTH * 54,
    marginTop: WIDTH * 20,
    backgroundColor: '#fff',
    width: WIDTH * 267,
    height: WIDTH * 56,
    fontSize: FONTSIZE.f_34,
    color: '#000',
    fontWeight: '600',
    borderRadius: 5,
  },
  txtCf: {
    color: '#fff',
    fontSize: FONTSIZE.f_20,
    fontFamily: FONT_FAMILY.medium,
  },
  confirm: {
    backgroundColor: COLOR.MAIN_P,
    width: '100%',
    height: WIDTH * 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: WIDTH * 337,
  },
});
export default styles;
