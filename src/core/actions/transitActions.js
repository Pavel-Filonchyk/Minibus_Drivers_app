const boarding = (id) => {
    return {
        type: 'BOARDING',
        payload: id 
    } 
}

export const BOARDING = 'BOARDING'

const boardingSuccess = (data) => {
    return {
        type: 'BOARDING-SUCCESS',
        payload: data 
    } 
}

const choiceTransit = (id) => {
    return {
        type: 'CHOICE-TRANSIT',
        payload: id 
    } 
}

const putPayment = (data) => {
    return {
        type: 'PUT-PAYMENT',
        payload: data
    } 
}
const putPaid = (data) => {
    return {
        type: 'PUT-PAID',
        payload: data
    } 
}
const deleteUser = (data) => {
    return {
        type: 'DELETE-USER',
        payload: data
    } 
}

export const sendRoute = (data) => {
    return {
        type: 'SEND_ROUTE',
        payload: data 
    } 
}

export {
    boarding,
    boardingSuccess,
    choiceTransit,
    putPayment,
    putPaid,
    deleteUser
}