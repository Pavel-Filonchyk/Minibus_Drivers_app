import { takeEvery, put, call, select } from 'redux-saga/effects'
import { SEND_REPORT, sendReportSuccess, sendReportError } from '../actions/sendReportAction'
import httpProvider from '../../common/httpProvider'
import { REPORT_URL } from '../../common/api'

function* workerLoader() {
    const allPassengers = yield select(state => state.transitReducer.paymentPaid)
    const totalPaid = yield select(state => state.transitReducer.paid)
    try {
        const { data } = yield call(httpProvider.post, REPORT_URL, {data: {allPassengers, totalPaid}})
  
        yield put(sendReportSuccess(data))
      } catch (error) {
        yield put(sendReportError(error))
      }
  }

export default function* watcherSendReport() {
  yield takeEvery(SEND_REPORT, workerLoader)
}
  