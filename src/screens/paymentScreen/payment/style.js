import {StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../../base/core';

const styles = StyleSheet.create({
  container: {flex: 1, width: WIDTH_WINDOW},
  body: {
    paddingHorizontal: WIDTH * 16,
    marginTop: WIDTH * 40,
  },
  title: {
    color: '#7A7A7A',
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.regular,
    marginBottom: WIDTH * 5,
  },
  choose: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: WIDTH * 10,
    borderWidth: WIDTH * 1,
    paddingVertical: WIDTH * 10,
    justifyContent: 'space-between',
    paddingLeft: WIDTH * 4,
    paddingRight: WIDTH * 16,
    marginBottom: WIDTH * 12,
  },
  btn: {
    flex: 1/3,
    alignItems:'flex-end'
  },

  iconDropdown: {
    width: WIDTH * 12,
    height: WIDTH * 7,
  },
  iconCopy: {
    width: WIDTH * 23,
    height: WIDTH * 23,
    resizeMode: 'contain',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: WIDTH * 10,
    borderWidth: WIDTH * 1,
    height: WIDTH * 45,
    justifyContent: 'space-between',
    paddingLeft: WIDTH * 4,
    paddingRight: WIDTH * 16,
    marginBottom: WIDTH * 12,
  },
  TextInput: {
    flex: 1,
  },
});
export default styles;
