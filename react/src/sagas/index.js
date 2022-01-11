import { all } from 'redux-saga/effects';
import { excelSaga } from './excelSaga';
export default function* rootSaga() {
  yield all([
    ...excelSaga
  ]);
}