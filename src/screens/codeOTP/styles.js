import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  body: {
    paddingHorizontal: WIDTH * 16,
    alignItems: 'center',
  },
  logo: {
    width: WIDTH * 226,
    height: WIDTH * 76,
    resizeMode: 'contain',
    marginTop: WIDTH * 100,
    marginBottom: WIDTH * 19,
  },
  text: {
    color:COLOR.BLACK_P,
    fontSize: FONTSIZE.f_20,
  },
  text_1: {
    marginTop: WIDTH * 20,
    color:COLOR.BLACK_P,
    fontSize: FONTSIZE.f_19,
    fontFamily: FONT_FAMILY.regular
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
    padding: 0,
  },
  txtCf: {
    color: '#fff',
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.medium,
  },
  confirm: {
    backgroundColor: COLOR.MAIN_P,
    width: '100%',
    height: WIDTH * 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: WIDTH * 14,
  },
  footer:{
    marginTop: WIDTH *37,
    flexDirection: 'row',
    justifyContent:'space-between',
    width: WIDTH*393
  },
  textFooter:{
    fontSize: FONTSIZE.f_15,
    fontFamily: FONT_FAMILY.regular,
    color: COLOR.BLACK_P
  }
});
export default styles;
