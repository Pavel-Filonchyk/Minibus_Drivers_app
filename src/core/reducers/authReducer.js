const initialState = {
    sendCode: '',
    phoneNumber: '',
    getCode: null,
    errorCode: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'SEND_CODE_DATA':
            return {
                ...state,
                sendCode: action.payload.code,
                phoneNumber: action.payload.phoneNumber
            }
        case 'SEND_CODE_DATA_SUCCESS':
            return {
                ...state,
                getCode: true
            }
        case 'SEND_CODE_DATA_ERROR':
            console.log(action.payload)
            return {
                ...state,
                errorCode: true
            }
        case 'RESET_ERROR_CODE':
            return {
                ...state,
                errorCode: null,
                getCode: null
            }
        default: 
        return state;  
    }
}

export default authReducer