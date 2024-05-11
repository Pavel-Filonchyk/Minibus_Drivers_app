const initialState = {
    // все рейс при запуске
    allTravels: [],
    // выбранные юзером дата и направление
    dataTravels: {},
    // рейсы на выбранную дату и направление
    travels: [],
    getError: false,
    // города и стоимости при запуске
    cities: [],
    costs: [],

    // выбранный рейс на определенную дату и время
    choiceRoute: []
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
        case 'GET_TRAVELS':
            const selectFrom = action.payload?.selectFrom
            const selectTo = action.payload?.selectTo
            const date = action.payload?.date
           
            const findDateRoutes = state.allTravels?.filter(item => item.dateTrip === date)
            
            let collectRoutes = []
            for (let item of findDateRoutes) {
                const findRoutes = () => {
                    const findStartCity = item?.cities?.find(elem => elem?.city === selectFrom)
                    const findIndexFrom = item?.cities?.indexOf(findStartCity)
                    const findFinishCity = item?.cities?.find(elem => elem?.city === selectTo)
                    const findIndexTo = item?.cities?.indexOf(findFinishCity)
                    if(findIndexTo > findIndexFrom){
                        return item.blockId
                    }else{
                        return null
                    }
                } // если не показывает, то пропадает cities при удалении
                if(findRoutes() !== null){
                    const findRoute = state.allTravels?.filter(item => item.blockId === findRoutes())
                    collectRoutes.push(findRoute[0])
                }
            }  
            return {
                ...state,
                dataTravels: action.payload,
                travels: collectRoutes,
            }
        case 'GET_DIRECTIONS_SUCCESS':
            const cities = Object.keys(action.payload).map(key => ({...action.payload[key], blockId: key}))
            return {
                ...state,
                cities
            }
            
        case 'GET_COSTS_SUCCESS':
            const costs = Object.keys(action.payload).map(key => ({...action.payload[key], blockId: key}))
            return {
                ...state,
                costs
            }
            
        
        default: 
        return state;  
    }
}

export default getTravelsReducer

