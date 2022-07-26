/* eslint-disable prettier/prettier */
import {Dimensions, Platform, StatusBar} from 'react-native';
var screenWidth = Math.round(Dimensions.get('window').width);
var screenHeight = Math.round(Dimensions.get('window').height);
var minScreenValue = Math.min(screenWidth, screenHeight);
const WIDTH_WINDOW = Dimensions.get('window').width;
const HEIGHT_WINDOW = Dimensions.get('window').height;
const HEIGHT = Dimensions.get('window').height / 100;
const WIDTH = WIDTH_WINDOW / 428;

var scale = 1;
if (Platform.OS === 'ios') {
  scale = 1;
} else if (minScreenValue <= 600) {
  scale = 1;
} else if (minScreenValue <= 900) {
  scale = 1.5;
} else if (minScreenValue <= 1200) {
  scale = 2;
}

const COLOR = {
  NONE: 'transparent',
  MAIN_P: '#0E448A',
  MAIN_S: '#EF7749',
  BLACK_P: '#000000',
  BLACK_S: '#080808',
  BLACK_T: '#272727',
  WHITE_P: '#FFFFFF',
  GRAY_P: '#C3C9D0',
  SUCCESS: '#66BD50',
  WARNING: '#EBBC46',
  ERROR: '#DE4841',
};

const FONTSIZE = {
  f_70: 70 * scale,
  f_40: 40 * scale,
  f_35: 35 * scale,
  f_28: 28 * scale,
  f_34: 34 * scale,
  f_24: 24 * scale,
  f_21: 21 * scale,
  f_20: 20 * scale,
  f_19: 19 * scale,
  f_18: 18 * scale,
  f_16: 16 * scale,
  f_15: 15 * scale,
  f_14: 14 * scale,
  f_13: 13 * scale,
  f_12: 12 * scale,
  f_11: 11 * scale,
  f_10: 10 * scale,
  f_9: 9 * scale,
  f_8: 8 * scale,
  f_6: 6 * scale,
};

export const makeid = length => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const FONT_FAMILY = {
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
};

const ASYN = {
  SAVE_DATA_USER: 'SAVE_DATA_USER',
  FCM_TOKEN: 'FCM_TOKEN',
  USERNAME: 'USERNAME',
  PASSWORD: 'PASSWORD',
  TOKEN: 'TOKEN',
  LANGUAGE:'LANGUAGE'
};

export {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH_WINDOW,
  HEIGHT_WINDOW,
  WIDTH,
  HEIGHT,
  ASYN,
};
