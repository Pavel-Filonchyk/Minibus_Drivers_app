import transitReducer from './transitReducer'
import getTravelsReducer from './getTravelsReducer'
import sendReportReducer from './sendReportReduser'
import authReducer from './authReducer'

export const rootReducer = () => {
    return { 
        getTravelsReducer,
        transitReducer,
        sendReportReducer,
        authReducer
    }
}