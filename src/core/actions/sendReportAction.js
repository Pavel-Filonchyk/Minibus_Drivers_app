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