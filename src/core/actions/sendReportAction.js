export const sendReport = (data) => {
    return {
        type: 'SEND_REPORT',
        payload: data 
    } 
}
export const SEND_REPORT = 'SEND_REPORT'

export const sendReportSuccess = (data) => {
    return {
        type: 'SEND_REPORT_SUCCESS',
        payload: data 
    } 
}
export const sendReportError = (data) => {
    return {
        type: 'SEND_REPORT_ERROR',
        payload: data 
    } 
}

export const closeReportSuccess = (data) => {
    return {
        type: 'CLOSE_REPORT_SUCCESS',
        payload: data 
    } 
}