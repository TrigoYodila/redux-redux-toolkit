const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOficeCream : 20
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state) => {
            state.numOficeCream --
        },
        restocked:(state,action)=>{
            state.numOficeCream += action.payload
        }
    },
    // first approche

    // extraReducers:{
    //     ['cake/ordered']:(state) => {
    //         state.numOficeCream --
    //     }
    // }

    // second approche
    extraReducers:(builder) => {
        builder.addCase(cakeActions.ordered, (state)=>{
            state.numOficeCream --
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions