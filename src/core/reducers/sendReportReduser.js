const initialState = {
    sendReport: [],
    sendReportSuccess: null,
}

const sendReportReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'SEND_REPORT_SUCCESS':
            return {
                ...state,
                sendReportSuccess: 'OK'
            }
        case 'SEND_REPORT_ERROR':
            return {
                ...state,
                sendReportSuccess: 'ERROR'
            }
        case 'CLOSE_REPORT_SUCCESS':
            return {
                ...state,
                sendReportSuccess: null
            }
        
        default: 
        return state;  
    }
}

export default sendReportReducer