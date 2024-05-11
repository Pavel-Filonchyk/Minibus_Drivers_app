import { all } from 'redux-saga/effects'
import workerTransitSaga from './transitSaga'
import watcherGetTravels from './getTravelsSaga'

export default function* rootSaga() {
    yield all([
        workerTransitSaga(),
        watcherGetTravels(),
    ])
}