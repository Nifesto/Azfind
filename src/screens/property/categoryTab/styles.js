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
    paddingBottom:WIDTH*75
  },
  icon: {
    width: WIDTH * 13,
    height: WIDTH * 13,
    resizeMode: 'contain',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: WIDTH * 16,
    paddingVertical: WIDTH * 8,
    justifyContent: 'space-between',
  },
  line: {
    height: 4,
    backgroundColor: COLOR.WHITE_P,
  },
  title: {
    color: COLOR.MAIN_P,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineItem: {
    height: 3,
    backgroundColor: '#F1F1F1',
    marginTop: WIDTH * 5,
  },
  nameItem: {
    marginLeft: WIDTH * 30,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_12,
    color: '#404040',
    marginTop: WIDTH * 8,
    marginBottom: WIDTH * 4,
  },
  txtAll: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: '#404040',
  },
  txtMoneyAll: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: '#FFB600',
  },
  viewMoney: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 16,
    marginBottom: WIDTH * 6,
  },
  viewHeadItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
  },
  nameStock: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
    color: '#404040',
    marginRight: WIDTH * 4,
  },
  currentStock: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_10,
    color: '#46A32F',
  },
  allMoneyStock: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
    color: '#46A32F',
  },
  value: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_10,
    color: '#404040',
  },
});
export default styles;
