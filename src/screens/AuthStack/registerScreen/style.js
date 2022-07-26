import {StyleSheet} from 'react-native';
import {COLOR, WIDTH, FONTSIZE, FONT_FAMILY} from '../../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: WIDTH * 44,
    paddingHorizontal: WIDTH * 16,
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
    marginRight: WIDTH * 14,
  },
  body: {paddingHorizontal: WIDTH * 16},
  input: {
    height: WIDTH * 59,
    borderWidth: WIDTH * 2,
    borderColor: '#414141',
    borderRadius: WIDTH * 49,
    paddingLeft: WIDTH * 19,
    marginVertical: WIDTH * 23,
  },
  button: {
    width: WIDTH * 393,
    height: WIDTH * 59,
    marginHorizontal: WIDTH * 18,
    backgroundColor: '#0E448A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 6,
    marginBottom: WIDTH * 15,
  },
  TextInput: {
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.bold,
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
