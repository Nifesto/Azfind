import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../../base/core';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF', width: WIDTH_WINDOW},
  stt: {
    color: COLOR.BLACK_P,
  },
  flt: {
    paddingHorizontal: WIDTH * 16,
    flexDirection: 'row',
    paddingVertical: WIDTH * 5,
    marginBottom: WIDTH * 3,
    backgroundColor: '#F1F1F1',
  },
  times: {
    flexDirection: 'row',
  },
  img: {
    width: WIDTH * 33,
    height: WIDTH * 33,
    resizeMode: 'contain',
    marginRight: WIDTH * 10,
    marginTop: WIDTH * 10,
  },
  title: {
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.BLACK_P,
    width: WIDTH * 338,
  },
  time: {
    fontSize: FONTSIZE.f_10,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular,
    marginRight: WIDTH * 8,
  },
  date: {
    fontSize: FONTSIZE.f_10,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular,
  },
});

export default styles;
