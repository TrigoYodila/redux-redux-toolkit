// import creator of tranche
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// create a type
type InitialState = {
    numOfCakes : number,
}

const initialState : InitialState = {
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
        restocked:(state,action:PayloadAction<number>)=>{
            state.numOfCakes += action.payload;
        }
    }
})

// export actions and reducer
export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
