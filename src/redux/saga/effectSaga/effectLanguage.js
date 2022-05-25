import AsyncStorage from '@react-native-async-storage/async-storage';
import {takeLatest} from 'redux-saga/effects';
import {ASYN} from '../../../base/core';

function* changeLanguage(action) {
  try {
    yield AsyncStorage.setItem(ASYN.LANGUAGE, action.payload);
  } catch (error) {
    console.log(error.message);
  }
}

export function* ChangeLanguage() {
  yield takeLatest('language/changeLanguage', changeLanguage);
}
