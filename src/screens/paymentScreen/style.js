import {StyleSheet, Platform, StatusBar} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLOR.MAIN_P,
    height: WIDTH * 92,
    paddingTop: Platform.OS === 'ios' ? WIDTH * 30 : StatusBar.currentHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
  },
  header_right: {
    flexDirection: 'row',
  },
  iconBell: {
    width: WIDTH * 24,
    height: WIDTH * 24,
    resizeMode: 'contain',
  },
  iconBack: {
    width: WIDTH * 27,
    height: WIDTH * 27,
    tintColor: '#FFF',
  },
  iconMore: {
    width: WIDTH * 24,
    height: WIDTH * 24,
    tintColor: '#FFF',
    marginLeft: WIDTH * 23,
  },
  number: {
    backgroundColor: '#EF7749',
    width: WIDTH * 17,
    height: WIDTH * 17,
    color: '#fff',
    paddingLeft: WIDTH * 5,
    fontSize: 10,
    borderRadius: 20,
    position: 'absolute',
    right: 40,
    top: -3.5,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: WIDTH * 16,
    width: WIDTH_WINDOW,
    justifyContent: 'space-between',
  },
  switch: {
    marginTop: WIDTH * 20,
    marginBottom: WIDTH * 4,
    flexDirection: 'row',
    width: WIDTH * 296,
    height: WIDTH * 31,
    backgroundColor: '#E8E7E7',
    borderRadius: WIDTH * 27,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: WIDTH * 66,
  },
  btn: {
    color: '#fff',
    fontSize: FONTSIZE.f_12,
    fontFamily: FONT_FAMILY.bold,
    width: WIDTH * 148,
    height: WIDTH * 31,
    borderRadius: WIDTH * 27,
    alignItems: 'center',
    paddingVertical: WIDTH * 7,
  },
});
export default styles;
