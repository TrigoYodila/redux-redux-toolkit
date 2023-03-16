// import configureStore
const configureStore = require('@reduxjs/toolkit').configureStore

const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')

// create a store
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer
    }
})

// export store
module.exports = store