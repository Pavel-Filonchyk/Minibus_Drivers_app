import { takeEvery, put, select } from 'redux-saga/effects'
import { BOARDING, boardingSuccess } from '../actions/transitActions'

function* workerTransitSaga({payload: id}) {
    try {
            const routesData = yield select(state => state.getRoutesReducer.routesData)
    
            yield put(boardingSuccess({id, routesData}))
        } catch (error) {
            console.log(error)
        }
    }
export default function* watcherTransitSaga() {
    yield takeEvery(BOARDING, workerTransitSaga)
}