import { all } from 'redux-saga/effects'
import watcherGetTravels from './getTravelsSaga'
import watcherSendReport from './sendReportSaga'

export default function* rootSaga() {
    yield all([
        watcherGetTravels(),
        watcherSendReport()
    ])
}