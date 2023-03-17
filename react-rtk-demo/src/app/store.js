// import configureStore
import { configureStore } from '@reduxjs/toolkit'

import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";


// create a store
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
    // add middleware logger in list of default middleware
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

// export store
export default store