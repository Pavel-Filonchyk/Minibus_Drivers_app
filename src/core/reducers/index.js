import transitReducer from './transitReducer'
import getTravelsReducer from './getTravelsReducer'
import sendReportReducer from './sendReportReduser'

export const rootReducer = () => {
    return { 
        getTravelsReducer,
        transitReducer,
        sendReportReducer
    }
}