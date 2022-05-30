import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width / 100;
const windowHeight = Dimensions.get('window').height / 100;
const {width, height} = Dimensions.get('window');
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: COLOR.MAIN_P,
    height: WIDTH * 90,
    paddingTop: WIDTH * 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
  },
  icon_header: {
    width: WIDTH * 28,
    height: WIDTH * 28,
    tintColor: '#FFF',
  },
  iconMore: {
    width: WIDTH * 22,
    height: WIDTH * 22,
  },
  title: {
    width: WIDTH * 428,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: WIDTH * 6,
  },
  name: {
    color:COLOR.BLACK_P,
    fontSize: FONTSIZE.f_19,
    fontFamily: FONT_FAMILY.regular
  },
  title_OTP: {
    fontSize: FONTSIZE.f_16,
    color: '#222',
  },
  OTP: {
    fontSize: FONTSIZE.f_16,
    color: '#222',
    fontWeight: '700',
  },
  information: {
    backgroundColor: '#F1F1F1',
  },
  form: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    marginBottom: WIDTH * 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
  },
  infor: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 16,
    justifyContent: 'space-between',
    paddingVertical: WIDTH * 7,
    marginBottom: WIDTH * 2,
  },
  iconDropUp: {
    flex:1,
    width: WIDTH * 15,
    height: WIDTH * 9,
    resizeMode: 'contain',
  },
  iconDropUp_sm: {
    resizeMode: 'contain',
    width: WIDTH * 9,
    height: WIDTH * 5,
    marginLeft: WIDTH * 23,
  },
  content: {
    fontSize: FONTSIZE.f_12,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular
  },
  text: {
    fontSize: FONTSIZE.f_12,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular
  },
  text1: {
    fontSize: FONTSIZE.f_12,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular
  },
  language: {
    fontSize: FONTSIZE.f_11,
    fontFamily: FONT_FAMILY.regular,
    color: COLOR.BLACK_P,
    flex: 1,
  },
  icon_language: {
    width: WIDTH * 24,
    height: WIDTH * 24,
    resizeMode: 'contain',
  },
  icon_languages: {
    width: WIDTH * 28,
    height: WIDTH * 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnShow: {
    paddingVertical: WIDTH * 12,
    paddingLeft: WIDTH * 12,
  },
  show: {
    flexDirection: 'row',
    paddingHorizontal: WIDTH * 16,
    alignItems: 'center',
    paddingBottom: WIDTH * 11,
    paddingTop: WIDTH * 11,
  },
  acc_extra: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    padding: WIDTH * 7,
    borderRadius: WIDTH * 5,
  },
  // touch:{
  //   width: WIDTH *20,
  //   height: WIDTH *20,
  //   backgroundColor:'red',
  // }
});

export default styles;
