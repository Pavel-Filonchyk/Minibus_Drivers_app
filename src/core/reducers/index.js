import transitReducer from './transitReducer'
import getTravelsReducer from './getTravelsReducer'
import sendReportReducer from './sendReportReduser'
import getDriversReducer from './getDriversReducer'
import authReducer from './authReducer'

export const rootReducer = () => {
    return { 
        getTravelsReducer,
        transitReducer,
        sendReportReducer,
        getDriversReducer,
        authReducer
    }
}