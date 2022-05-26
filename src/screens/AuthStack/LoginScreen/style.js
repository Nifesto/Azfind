import {StyleSheet} from 'react-native';
import {FONTSIZE, COLOR, WIDTH, FONT_FAMILY} from '../../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: WIDTH * 43,
    marginLeft: WIDTH * 16,
    marginBottom: WIDTH * 205,
  },
  title: {
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.bold,
    color: '#0E448A',
  },
  iconBack: {
    width: WIDTH * 23,
    height: WIDTH * 23,
    resizeMode: 'contain',
    marginRight: WIDTH * 9,
  },
  body: {
    paddingHorizontal: WIDTH * 16,
  },
  input: {
    color: COLOR.BLACK_P,
    width: WIDTH * 393,
    height: WIDTH * 59,
    borderWidth: WIDTH * 2,
    // marginHorizontal: WIDTH * 16,
    borderRadius: WIDTH * 49,
    paddingHorizontal: WIDTH * 19,
    marginBottom: WIDTH * 23,
  },
  iconEye: {
    width: WIDTH * 30,
    height: WIDTH * 21,
  },
  iconCheck: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    resizeMode: 'contain',
    borderRadius: WIDTH * 2,
    marginRight: WIDTH * 8,
  },
  Remember: {
    flexDirection: 'row',
    // marginLeft: WIDTH * 16,
    marginBottom: WIDTH * 17,
  },
  TextRemember: {
    color: '#404040',
  },
  Sign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: WIDTH * 32,
  },
  button: {
    width: WIDTH * 310,
    height: WIDTH * 47,

    backgroundColor: '#0E448A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 6,
  },
  iconFace: {
    width: WIDTH * 47,
    height: WIDTH * 46,
    marginRight: WIDTH * 9,
  },
  TextInput: {
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.regular,
    color: '#FFF',
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Text: {
    fontSize: FONTSIZE.f_15,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.regular,
  },
});
export default styles;
