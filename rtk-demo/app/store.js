// import configureStore
const configureStore = require('@reduxjs/toolkit').configureStore

// import fetchUsers by Async thunk

// const { getDefaultMiddleware } = require('@reduxjs/toolkit')
// import middleware logger
// const reduxLogger = require('redux-logger')

// create a logger
// const logger = reduxLogger.createLogger()

const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')

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
module.exports = store