import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_ALL_TRAVELS, getAllTravelsSuccess, getAllTravelsError } from '../actions/getTravelsActions'
import httpProvider from '../../common/httpProvider'
import { TRAVELS_URL } from '../../common/api'

function* workerLoader() {
    try {
        const { data } = yield call(httpProvider.get, TRAVELS_URL)
  
        yield put(getAllTravelsSuccess(data))
      } catch (error) {
        yield put(getAllTravelsError(error))
      }
  }

export default function* watcherGetTravels() {
  yield takeEvery(GET_ALL_TRAVELS, workerLoader)
}
  