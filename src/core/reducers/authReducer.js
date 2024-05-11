const initialState = {
    fullName: '',
    phoneNumber: '',
    
}
  
const authReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'AUTH-DATA': 
            return {
                ...state,
                fullName: action.payload?.fullName,
                phoneNumber: action.payload?.phoneNumber,
            }

        default: 
        return state;  
    }
}
  
export default authReducer