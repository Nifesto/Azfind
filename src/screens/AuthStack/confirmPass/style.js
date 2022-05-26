import {View, StyleSheet} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: WIDTH * 44,
    paddingHorizontal: WIDTH * 18,
  },
  title: {
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.MAIN_P,
  },
  iconBack: {
    width: WIDTH * 23,
    height: WIDTH * 23,
    resizeMode: 'contain',
    marginRight: WIDTH * 14,
  },
  logo: {
    width: WIDTH * 226,
    height: WIDTH * 76,
    marginTop: WIDTH * 97,
    marginLeft: WIDTH * 110,
    marginBottom: WIDTH *63
  },
  body: {paddingHorizontal: WIDTH * 18},
  input: {
    width: WIDTH * 388,
    height: WIDTH * 45,
    borderWidth: WIDTH * 2,
    borderRadius: WIDTH * 49,
    paddingLeft: WIDTH * 19,
    marginBottom: WIDTH *9
  },
  button: {
    width: WIDTH * 393,
    height: WIDTH * 47,
    backgroundColor: '#0E448A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 6,
    marginBottom: WIDTH * 14,
    marginTop: WIDTH *55
  },
  TextInput: {
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.WHITE_P,
  },
  more: {
    flexDirection: 'row',
  },
  Text: {
    fontSize: FONTSIZE.f_15,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular,
  },
});

export default styles;
