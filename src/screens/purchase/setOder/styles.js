import {StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH_WINDOW,
  },
  iconDropUp: {
    width: WIDTH * 12,
    height: WIDTH * 7,
    resizeMode: 'contain',
  },
  viewDrop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.9,
    backgroundColor: '#E8E7E7',
    paddingHorizontal: WIDTH * 8,
    paddingVertical: WIDTH * 8,
    borderRadius: WIDTH * 51,
  },
  info: {
    flex: 1,
    textAlign: 'right',
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
    color: COLOR.BLACK_P,
  },
  viewHead: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 16,
    marginTop: WIDTH * 10,
    marginBottom: WIDTH * 14,
  },
  viewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 16,
  },
  infoCode: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.8,
  },
  btnSearchCode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E8E7E7',
    paddingVertical: WIDTH * 6,
    borderRadius: WIDTH * 51,
    paddingHorizontal: WIDTH * 16,
    marginRight: WIDTH * 24,
    flex: 0.8,
  },
  btnPriceCode: {
    backgroundColor: '#E8E7E7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: WIDTH * 6,
    borderRadius: WIDTH * 51,
    flex: 1,
  },
  iconInfo: {
    width: WIDTH * 12,
    height: WIDTH * 12,
    resizeMode: 'contain',
    marginLeft: WIDTH * 4,
  },
  iconSearch: {
    width: WIDTH * 16,
    height: WIDTH * 16,
    resizeMode: 'contain',
  },
  price: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: '#737373',
  },
  textCode: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: '#404040',
  },
});
export default styles;
