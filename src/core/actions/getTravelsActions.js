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

const getDirections = (data) => {
    return {
        type: 'GET_DIRECTIONS',
        payload: data 
    }
}
export const GET_DIRECTIONS = 'GET_DIRECTIONS'
const getDirectionsSuccess = (data) => {
    return {
        type: 'GET_DIRECTIONS_SUCCESS',
        payload: data 
    }
}

const getCosts = (data) => {
    return {
        type: 'GET_COSTS',
        payload: data 
    }
}
export const GET_COSTS = 'GET_COSTS'
const getCostsSuccess = (data) => {
    return {
        type: 'GET_COSTS_SUCCESS',
        payload: data 
    }
}

const getTravels = (data) => {
    return {
        type: 'GET_TRAVELS',
        payload: data 
    } 
}
export const GET_TRAVELS = 'GET_TRAVELS'


export {
    getAllTravels,
    getAllTravelsSuccess,
    getAllTravelsError,
    getDirections,
    getDirectionsSuccess,
    getCosts,
    getCostsSuccess,
    getTravels,
}