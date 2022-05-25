import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
  },
});
export default styles;
