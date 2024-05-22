import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_DRIVERS, getDriversSuccess, getDriversError } from '../actions/getDriversActions'
import httpProvider from '../../common/httpProvider'
import { DRIVERS_URL } from '../../common/api'

function* workerLoader() {
    try {
        const { data } = yield call(httpProvider.get, DRIVERS_URL)
    
        yield put(getDriversSuccess(data))
      } catch (error) {
        yield put(getDriversError(error))
      }
  }

export default function* watcherGetDrivers() {
  yield takeEvery(GET_DRIVERS, workerLoader)
}
  