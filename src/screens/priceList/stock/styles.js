import {StyleSheet, Text, View} from 'react-native';
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
  head: {
    backgroundColor: COLOR.WHITE_P,
    paddingTop: WIDTH * 11,
  },
  btnSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    marginHorizontal: WIDTH * 16,
    paddingHorizontal: WIDTH * 14,
    paddingVertical: WIDTH * 7,
    borderRadius: WIDTH * 51,
  },
  iconSearch: {
    width: WIDTH * 23,
    height: WIDTH * 23,
    resizeMode: 'contain',
  },
  txtSearch: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: '#737373',
    textAlign: 'center',
    flex: 1,
  },
  //
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
    paddingVertical: WIDTH * 9,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'red',
  },
  iconHeart: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    resizeMode: 'contain',
    marginLeft: WIDTH * 10,
  },
  viewItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barTopInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE_P,
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
    height: WIDTH * 55,
  },
  viewIconDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
    backgroundColor: COLOR.WHITE_P,
    paddingBottom: WIDTH * 8,
    marginTop: -WIDTH * 4,
  },
  txtBar: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: COLOR.BLACK_P,
    textAlign: 'center',
    lineHeight: WIDTH * 22,
  },
  title: {
    color: COLOR.MAIN_P,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_14,
    textAlign: 'center',
    marginVertical: WIDTH * 8,
  },
  triangle: {
    width: WIDTH * 14,
    height: WIDTH * 14,
    resizeMode: 'contain',
  },
  triangleDown: {
    width: WIDTH * 14,
    height: WIDTH * 14,
    resizeMode: 'contain',
    flex: 1,
  },
  titleInfo: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_13,
    color: COLOR.BLACK_T,
    textAlign: 'center',
  },
  barInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    height: '100%',
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default styles;
