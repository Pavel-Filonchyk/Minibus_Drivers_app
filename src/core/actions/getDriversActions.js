export const getDrivers = (data) => {
    return {
        type: 'GET_DRIVERS',
        payload: data 
    } 
}
export const GET_DRIVERS = 'GET_DRIVERS'

export const getDriversSuccess = (data) => {
    return {
        type: 'GET_DRIVERS_SUCCESS',
        payload: data 
    } 
}
export const getDriversError = (data) => {
    return {
        type: 'GET_DRIVERS_ERROR',
        payload: data 
    } 
}