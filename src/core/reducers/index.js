import transitReducer from './transitReducer'
import getRoutesReducer from './getRoutesReducer'

import getTravelsReducer from './getTravelsReducer'

export const rootReducer = () => {
    return { transitReducer, getRoutesReducer,
        getTravelsReducer
    }
}