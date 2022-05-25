import {StyleSheet, Dimensions} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  contain: {
    paddingHorizontal: WIDTH * 19,
    alignItems: 'center',
  },
  logo: {
    height: WIDTH * 49,
    width: WIDTH * 145,
    marginTop: WIDTH * 60,
  },
  input_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH * 85,
    height: WIDTH * 85,
    backgroundColor: COLOR.WHITE_P,
    marginTop: WIDTH * 27,
  },
  number: {
    backgroundColor: COLOR.WHITE_P,
    width: WIDTH * 87.75,
    height: WIDTH * 65.33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: WIDTH * 27.22,
    marginLeft: WIDTH * 25.86,
  },
  keyboard: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    paddingRight: WIDTH * 40,
  },
  so: {
    fontSize: FONTSIZE.f_34,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.medium,
  },
  x: {
    width: WIDTH * 25.42,
    height: WIDTH * 25.42,
    margin: WIDTH * 10,
  },
  so_1: {
    fontSize: FONTSIZE.f_70,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.medium,
  },
  txtCf: {
    color: '#fff',
    fontSize: FONTSIZE.f_20,
    fontFamily: FONT_FAMILY.medium,
  },
  confirm: {
    backgroundColor: COLOR.MAIN_P,
    width: '100%',
    height: WIDTH * 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: WIDTH * 30,
  },
});
export default styles;
