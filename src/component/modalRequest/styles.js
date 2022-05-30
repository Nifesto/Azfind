import {StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';
const styles = StyleSheet.create({
  //alert
  containerAlert: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: WIDTH_WINDOW - WIDTH * 88,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 22,
    backgroundColor: COLOR.WHITE_P,
    zIndex: 9990,
    paddingTop: WIDTH * 25,
    paddingBottom: WIDTH * 5,
  },
  viewBotBtn: {
    alignItems: 'center',
  },
  viewBotBtnSm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnConfirm: {
    backgroundColor: COLOR.MAIN_P,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WIDTH * 35,
    height: WIDTH * 25,
    borderRadius: WIDTH * 6,
    marginBottom: WIDTH * 10,
    width: WIDTH * 121,
  },
  btnClose: {
    backgroundColor: COLOR.WHITE_P,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WIDTH * 35,
    height: WIDTH * 25,
    borderRadius: WIDTH * 6,
    marginBottom: WIDTH * 21,
    borderWidth: 2,
    borderColor: COLOR.MAIN_P,
    width: WIDTH * 121,
  },
  viewTopContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: WIDTH * 21,
    borderTopRightRadius: WIDTH * 21,
  },
  txtConfirm: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: COLOR.WHITE_P,
  },
  txtClose: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: COLOR.MAIN_P,
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_12,
    color: COLOR.BLACK_P,
    textAlign: 'center',
    marginTop: WIDTH * 9,
    marginBottom: WIDTH * 3,
  },
  txtcontent: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: COLOR.BLACK_P,
    marginBottom: WIDTH * 13,
    textAlign: 'center',
    marginHorizontal: WIDTH * 16,
  },
  icon: {
    width: WIDTH * 32,
    height: WIDTH * 32,
    resizeMode: 'contain',
  },
});
export default styles;
