import {StyleSheet} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';
const styles = StyleSheet.create({
  //alert
  containerAlert: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: WIDTH * 270,
    minHeight: WIDTH * 147,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 22,
    backgroundColor: COLOR.WHITE_P,
    zIndex: 9990,
  },
  viewBotBtn: {
    flexDirection: 'row',
  },
  viewBotBtnSm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnConfirm: {
    backgroundColor: '#45B9A4',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderBottomLeftRadius: WIDTH * 22,
  },
  btnClose: {
    backgroundColor: '#ED5B54',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: WIDTH * 15,
    borderBottomRightRadius: WIDTH * 22,
  },
  viewTopContent: {
    flex: 1,
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
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_12,
    color: COLOR.BLACK_P,
    textAlign: 'center',
  },
  txtcontent: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
    color: COLOR.BLACK_P,
    marginTop: WIDTH * 6,
    textAlign: 'center',
  },
});
export default styles;
