import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH, WIDTH_WINDOW} from '../../../base/core';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:WIDTH_WINDOW,
  },
  body: {
    paddingHorizontal: WIDTH * 16,
    marginTop: WIDTH *40
    
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: WIDTH * 12,
  },
  title: {
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.BLACK_P,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH * 246,
    height: WIDTH * 34,
    borderRadius: WIDTH * 51,
    backgroundColor: '#E8E7E7',
    paddingHorizontal: WIDTH * 11,
  },
  text: {
    fontSize: FONTSIZE.f_10,
    fontFamily: FONT_FAMILY.regular,
    color: COLOR.BLACK_P,
  },
  iconDropUp: {
    width: WIDTH * 15,
    height: WIDTH * 8,
    resizeMode: 'contain',
  },
  extra: {
    alignItems: 'flex-end',
  },
  text_ex: {
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.regular,
    color: '#0E448A',
    marginBottom: WIDTH * 5,
  },
  input: {
    fontSize: FONTSIZE.f_11,
    color: COLOR.BLACK_P,
    width: WIDTH * 246,
    height: WIDTH * 34,
    borderRadius: WIDTH * 51,
    backgroundColor: '#E8E7E7',
    paddingHorizontal: WIDTH * 11,
    alignItems: 'center',
  },
  input2: {
    marginVertical: 12,
    width: WIDTH * 393,
    height: WIDTH * 90,
    borderRadius: WIDTH * 10,
    fontSize: FONTSIZE.f_11,
    color: COLOR.BLACK_P,
    backgroundColor: '#E8E7E7',
  },
  button: {
    width: WIDTH * 393,
    height: WIDTH * 42,
    backgroundColor: COLOR.MAIN_P,
    borderRadius: WIDTH * 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.WHITE_P,
  },
});

export default styles;
