import { takeEvery, put, call, select } from 'redux-saga/effects'
import { SEND_REPORT, sendReportSuccess, sendReportError } from '../actions/sendReportAction'
import httpProvider from '../../common/httpProvider'
import { REPORT_URL } from '../../common/api'

function* workerLoader() {
    const allPassengers = yield select(state => state.transitReducer.paymentPaid)
    const choiceRoute = yield select(state => state.transitReducer.choiceRoute)
    const totalPaid = yield select(state => state.transitReducer.paid)
    try {
        const { data } = yield call(httpProvider.post, REPORT_URL, {data: {
          allPassengers, 
          totalPaid, 
          dateTrip: choiceRoute[0]?.dateTrip,
          tripFrom: choiceRoute[0]?.tripFrom,
          tripTo: choiceRoute[0]?.tripTo,
          timeTrips: choiceRoute[0]?.timeTrips
        }})
  
        yield put(sendReportSuccess(data))
      } catch (error) {
        yield put(sendReportError(error))
      }
  }

export default function* watcherSendReport() {
  yield takeEvery(SEND_REPORT, workerLoader)
}
  