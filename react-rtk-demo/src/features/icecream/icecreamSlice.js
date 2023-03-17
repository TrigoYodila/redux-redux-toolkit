import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

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
        builder.addCase(cakeOrdered, (state)=>{
            state.numOficeCream --
        })
    }
})

 export default icecreamSlice.reducer
export const {ordered, restocked } = icecreamSlice.actions