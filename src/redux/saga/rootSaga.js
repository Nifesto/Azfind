import {all} from 'redux-saga/effects';
import {ChangeLanguage} from './effectSaga/effectLanguage';

export default function* rootSaga() {
  yield all([ChangeLanguage()]);
}
