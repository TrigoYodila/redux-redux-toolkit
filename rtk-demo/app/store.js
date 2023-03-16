// import configureStore
const configureStore = require('@reduxjs/toolkit').configureStore

// const { getDefaultMiddleware } = require('@reduxjs/toolkit')
// import middleware logger
// const reduxLogger = require('redux-logger')

// create a logger
// const logger = reduxLogger.createLogger()

const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')

// create a store
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer
    },
    // add middleware logger in list of default middleware
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

// export store
module.exports = store