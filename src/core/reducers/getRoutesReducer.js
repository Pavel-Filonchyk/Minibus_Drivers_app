import { routes1 } from '../../constants/index'
import { routes2 } from '../../constants/index'

const initialState = {
    routesData:  []
}
  
const getRoutesReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'GET-ROUTES': 
            if (action.payload === '28.05.2024') {
                const routesClone1 = JSON.parse(JSON.stringify(routes1))
                return {
                    ...state,
                    routesData: routesClone1
                }
            }
            if (action.payload === '30.05.2024') {
                const routesClone2 = JSON.parse(JSON.stringify(routes2))
                return {
                    ...state,
                    routesData: routesClone2
                }
            }

        default: 
        return state;  
    }
}
  
export default getRoutesReducer