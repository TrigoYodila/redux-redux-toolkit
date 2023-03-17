// import creator of tranche
import { createSlice } from '@reduxjs/toolkit'

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
export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
