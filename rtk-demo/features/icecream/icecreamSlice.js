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
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions