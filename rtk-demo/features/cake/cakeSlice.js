// import creator of tranche
const createSlice = require('@reduxjs/toolkit').createSlice

// initialState
const initialState = {
    numOfCaskes:10
}
// create a tranche
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state) => {
            state.numOfCaskes--
        },
        restocked:(state,action)=>{
            state.numOfCaskes += action.payload
        }
    }
})

// export actions and reducer
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
