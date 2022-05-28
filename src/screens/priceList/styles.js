import {StyleSheet} from 'react-native';
import {FONTSIZE, FONT_FAMILY, WIDTH, WIDTH_WINDOW} from '../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
    paddingTop:WIDTH*12
  },
  viewItem: {
    width: (WIDTH_WINDOW - WIDTH * 32 - WIDTH * 16 * 3) / 4,
    backgroundColor: '#E6E6E6',
    borderRadius: WIDTH * 7,
    paddingVertical: WIDTH * 12,
    paddingHorizontal: WIDTH * 5,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameItem: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: '#686868',
    textAlign: 'center',
  },
  priceItem: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: '#EB3027',
    textAlign: 'center',
    marginTop: WIDTH * 3,
    marginBottom: WIDTH * 6,
  },
  percenItem: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_9,
    color: '#46A32F',
  },
  viewLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 16,
    marginTop: WIDTH * 12,
    marginBottom: WIDTH * 4,
  },
  btnLabel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: WIDTH * 8,
  },
});
export default styles;
