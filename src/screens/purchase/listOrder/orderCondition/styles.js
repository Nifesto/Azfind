import {StyleSheet} from 'react-native';
import {COLOR, WIDTH, WIDTH_WINDOW} from '../../../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH_WINDOW,
    paddingBottom: WIDTH * 75,
  },
  iconDropdown: {
    width: WIDTH * 12,
    height: WIDTH * 12,
    resizeMode: 'contain',
  },
  iconArrow: {
    width: WIDTH * 8,
    height: WIDTH * 8,
    resizeMode: 'contain',
  },
  iconDelete: {
    width: WIDTH * 18,
    height: WIDTH * 18,
    resizeMode: 'contain',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 16,
    paddingVertical: WIDTH * 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 10,
    paddingVertical: WIDTH * 4,
    borderRadius: WIDTH * 51,
    marginLeft: WIDTH * 12,
    flex: 1,
  },
  viewCancel: {
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 16,
    flexDirection: 'row',
  },
  BtnCancel: {
    borderWidth: WIDTH * 1,
    borderColor: COLOR.MAIN_P,
    paddingHorizontal: WIDTH * 27,
    paddingVertical: WIDTH * 6,
    marginBottom: WIDTH * 20,
    borderRadius: WIDTH * 6,
  },
});
export default styles;
