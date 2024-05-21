export const sendCodeData = (data) => {
    return {
        type: 'SEND_CODE_DATA',
        payload: data 
    } 
}
export const SEND_CODE_DATA = 'SEND_CODE_DATA'
export const sendCodeDataSuccess = (data) => {
    return {
        type: 'SEND_CODE_DATA_SUCCESS',
        payload: data 
    } 
}
export const sendCodeDataError = (data) => {
    return {
        type: 'SEND_CODE_DATA_ERROR',
        payload: data 
    } 
}
export const resetErrorCode = (data) => {
    return {
        type: 'RESET_ERROR_CODE',
        payload: data 
    } 
}