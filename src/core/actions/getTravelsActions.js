const getAllTravels = (data) => {
    return {
        type: 'GET_ALL_TRAVELS',
        payload: data 
    } 
}
export const GET_ALL_TRAVELS = 'GET_ALL_TRAVELS'
const getAllTravelsSuccess = (data) => {
    return {
        type: 'GET_ALL_TRAVELS_SUCCESS',
        payload: data 
    } 
}
const getAllTravelsError = (data) => {
    return {
        type: 'GET_ALL_TRAVELS_ERROR',
        payload: data 
    } 
}

export {
    getAllTravels,
    getAllTravelsSuccess,
    getAllTravelsError,
}