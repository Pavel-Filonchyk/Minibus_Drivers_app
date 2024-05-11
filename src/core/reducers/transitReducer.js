const initialState = {
    // выбранный рейс на определенную дату и время
    choiceRoute: [],
    
    landing: [],
    paymentPay: [],
    paymentPaid: [],
    pay: 0,
    paid: 0,
    freeSeats: 0,
    transitLinks: 'boarding',
}

const transitReducer = (state = initialState, action) => {
    switch (action.type){ 
    
        case 'SEND_ROUTE':
            return {
                ...state,
                choiceRoute: action.payload,
                freeSeats: action.payload[0]?.freeSeats,
                landing: [],
                paymentPay: [],
                paymentPaid: [],
                pay: 0,
                paid: 0,
            }
        case 'CHOICE-TRANSIT': 
            return {
                ...state,
                transitLinks: action.payload,
            }
        case 'PUT-PAYMENT': 
            console.log(action.payload)
            const phoneNumber = action.payload?.phoneNumber
            const indicator = action.payload?.indicator
            const findUser = state.choiceRoute[0]?.persons?.find(item => item.phoneNumber === phoneNumber)
            const persons = state.choiceRoute[0]?.persons.filter(user => user != findUser) 
            const newBoarding = [{
                blockId: state.choiceRoute[0]?.blockId,
                cities: state.choiceRoute[0]?.cities,
                dateTrip: state.choiceRoute[0]?.dateTrip,
                timeTrips: state.choiceRoute[0]?.timeTrips,
                tripFrom: state.choiceRoute[0]?.tripFrom,
                tripTo: state.choiceRoute[0]?.tripTo,
                persons
            }]

            if (indicator === 'оплата') {
                return {
                    ...state,
                    paymentPaid: [...state.paymentPaid, findUser],  // добавлять только уникальных юзеров
                    choiceRoute: newBoarding,
                    paid: state.paid + findUser.cost,
                    landing: [...state.landing, findUser]
                }
            }
            if (indicator === 'явка') {
                return {
                    ...state,
                    paymentPay: [...state.paymentPay, findUser],
                    choiceRoute: newBoarding,
                    pay: state.pay + findUser.cost,
                    landing: [...state.landing, findUser]
                }
            }
            if (indicator === 'неявка') {
                const changeFreeSeats = state.freeSeats + Number(findUser.numberSeats)
                return {
                    ...state,
                    choiceRoute: newBoarding,
                    freeSeats: changeFreeSeats
                }
            }
        case 'PUT-PAID': 
            const payerPhoneNumber = action.payload?.phoneNumber
            const findPayer = state.paymentPay?.find(item => item.phoneNumber === payerPhoneNumber)
            const payers = state.paymentPay?.filter(user => user != findPayer)
            return { 
                ...state,
                paymentPay: payers,
                paymentPaid: [...state.paymentPaid, findPayer],
                pay: state.pay - findPayer.cost,
                paid: state.paid + findPayer.cost
            }
        case 'DELETE-USER': 
            const userPhoneNumber = action.payload?.phoneNumber
            const findPerson = state.landing?.find(item => item.phoneNumber === userPhoneNumber)
            const users = state.landing?.filter(user => user != findPerson) 
            const choiceFreeSeats = state.freeSeats + Number(findPerson.numberSeats)
            return {
                ...state,
                landing:  users,
                freeSeats: choiceFreeSeats
            }
        default: 
        return state;  
    }
}
  
export default transitReducer