// import creator of tranche
import { createSlice } from '@reduxjs/toolkit'

// initialState
const initialState = {
    numOfCakes:10
}
// create a tranche
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state) => {
            state.numOfCakes--;
        },
        restocked:(state,action)=>{
            state.numOfCakes += action.payload;
        }
    }
})

// export actions and reducer
export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
