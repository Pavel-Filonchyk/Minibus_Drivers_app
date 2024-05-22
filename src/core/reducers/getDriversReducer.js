const initialState = {
    driversData: [],
}

const getDriversReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'GET_DRIVERS_SUCCESS':
            const list = Object.keys(action.payload).map(key => ({...action.payload[key], blockId: key}))
            return {
                ...state,
                driversData: list,
            }
           
        default: 
        return state;  
    }
}
    
export default getDriversReducer