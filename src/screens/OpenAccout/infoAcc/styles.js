import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../../base/core';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: WIDTH * 13,
    marginHorizontal: WIDTH * 16,
  },

  title: {
    color: '#8A8A8A',
    fontSize: FONTSIZE.f_14,
  },
  input_1: {
    paddingHorizontal: 10,
    color: 'rgba(29, 29, 29, 0.51)',
    fontSize: 15,
    width: WIDTH * 224,
    height: WIDTH * 36,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'rgba(29, 29, 29, 0.24)',
  },
});
export default styles;
