import {StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    width: WIDTH_WINDOW,
    height: WIDTH * 92,
    backgroundColor: COLOR.MAIN_P,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 16,
    paddingTop: WIDTH * 49,
  },
  iconBack: {
    width: WIDTH * 32,
    height: WIDTH * 32,
    resizeMode: 'contain',
    tintColor: COLOR.WHITE_P,
  },
  iconSearch: {
    width: WIDTH * 23,
    height: WIDTH * 23,
    resizeMode: 'contain',
    tintColor: COLOR.WHITE_P,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH * 293,
    height: WIDTH * 38,
    borderRadius: WIDTH * 24,
    backgroundColor: '#063167',
    paddingHorizontal: WIDTH * 14,
    marginLeft: WIDTH * 12,
  },
  input: {
    fontSize: FONTSIZE.f_21,
    padding: 0,
    marginLeft: WIDTH * 71,
    fontFamily: FONT_FAMILY.regular,
  },
  Stocks_name: {
    width: WIDTH * 137,
    height: WIDTH * 50,
    paddingTop: WIDTH * 5,
    marginHorizontal: WIDTH * 16,
    fontSize: FONTSIZE.f_24,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.BLACK_P,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: WIDTH * 3,
  },
  top_left: {
    flex: 2,
    backgroundColor: COLOR.WHITE_P,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: WIDTH *17
  },
  textValue: {
    fontSize: FONTSIZE.f_35,
    fontFamily: FONT_FAMILY.bold,
    color: '#46A32F',
  },
  iconUp: {
    width: WIDTH * 9,
    height: WIDTH * 7,
    resizeMode: 'contain',
  },

  top_main: {
    flex: 1.5,
  },
  Change: {
    backgroundColor: COLOR.WHITE_P,
    marginLeft: WIDTH * 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: WIDTH *9.2
  },
  textChange: {
    fontSize: FONTSIZE.f_15,
    fontFamily: FONT_FAMILY.regular,
  },
  top_right: {
    flex: 2,
  },
  right: {
    backgroundColor: COLOR.WHITE_P,
    marginLeft: WIDTH * 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: WIDTH *11.4
  },
  textTop_right: {
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.bold,
  },
  body_top: {
    flexDirection: 'row',
    marginHorizontal: WIDTH * 16,
  },
  main: {
    flex: 1,
  },
  title: {
    paddingVertical: WIDTH * 10,
    backgroundColor: COLOR.WHITE_P,
    marginBottom: WIDTH * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    paddingVertical: WIDTH * 20,
    backgroundColor: COLOR.WHITE_P,
    marginBottom: WIDTH * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body_bottom: {
    flexDirection: 'row',
    marginHorizontal: WIDTH * 16,
    backgroundColor: COLOR.WHITE_P,
    justifyContent: 'space-around',
    borderRadius: WIDTH * 10,
    paddingVertical: WIDTH * 12,
  },
  purchase: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.regular,
    color: '#404040',
  },
  footer: {
    flexDirection: 'row',
    marginTop: WIDTH * 3,
  
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: WIDTH * 12,
  },
  footer_left: {
    flex: 2,
    marginRight: WIDTH * 3,
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 16,
    paddingVertical: WIDTH *8
  },
  footer_right: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 15,
    paddingVertical: WIDTH *8
  },
});

export default styles;
