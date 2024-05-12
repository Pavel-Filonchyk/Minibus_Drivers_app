const initialState = {
    sendReport: [],
    sendReportSuccess: null,
    sendReportError: null
}

const sendReportReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'SEND_REPORT_SUCCESS':
            console.log(action.payload)
            return {
                ...state,
                sendReportSuccess: 'OK'
            }
        case 'SEND_REPORT_ERROR':
            console.log(action.payload)
            return {
                ...state,
                    sendReportError: 'ERROR'
                }
        
        default: 
        return state;  
    }
}

export default sendReportReducer