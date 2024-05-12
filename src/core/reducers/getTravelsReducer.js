const initialState = {
    // все рейс при запуске
    allTravels: [],
}

const getTravelsReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'GET_ALL_TRAVELS_SUCCESS':
            const list = Object.keys(action.payload).map(key => ({...action.payload[key], blockId: key}))
            return {
                ...state,
                allTravels: list
            }
        case 'GET_ALL_TRAVELS_ERROR':
        return {
            ...state,
            getError: action.payload,
        }
        
        default: 
        return state;  
    }
}

export default getTravelsReducer

