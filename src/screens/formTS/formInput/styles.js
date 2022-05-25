import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text_3: {
    fontSize: FONTSIZE.f_15,
    color: '#5178AA',
  },
  more: {
    width: WIDTH * 12,
    height: WIDTH * 7,
  },
  // box: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   width: 40,
  // },
  input_1: {
    width: '85%',
    color: '#5178AA',
    fontSize: FONTSIZE.f_15,
    height: WIDTH * 40,
  },
  input_2: {
    color: '#5178AA',
    borderWidth: 1,
    borderColor: '#0E448A',
    borderRadius: 5,
    marginTop: WIDTH * 7,
    fontSize: FONTSIZE.f_16,
    height: WIDTH * 40,
    width: '45%',
    paddingHorizontal: WIDTH * 5,
  },
  age: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setUp: {
    color: '#fff',
    fontSize: FONTSIZE.f_10,
    fontFamily: FONT_FAMILY.bold,
  },
  btSet: {
    marginTop: WIDTH * 8.33,
    backgroundColor: '#0E448A',
    paddingHorizontal: WIDTH * 17.14,
    paddingVertical: WIDTH * 4.67,
    borderRadius: 5,
    width: WIDTH * 88,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#0E448A',
    borderRadius: 5,
    paddingHorizontal: WIDTH * 5,
    marginTop: WIDTH * 7,
  },
  form: {
    paddingHorizontal: WIDTH * 16,
  },
});
export default styles;