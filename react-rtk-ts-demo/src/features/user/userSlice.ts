import axios from 'axios'
// import createSlice
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type User = {
    id:number,
    name:string
}

type InitialState = {
    loading:boolean,
    users:User[],
    error:string,
}
// initialState 
const initialState:InitialState = {
    loading:false,
    users:[],
    error:''
}

// get an async request with AsyncThunk

// generate pending, fulfilled and rehected actions types
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
   return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.data)
})

// create a slice
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    // define reducers
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending,(state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action:PayloadAction<User[]>) => {
            state.loading = false,
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message || 'Something went wrong'
        })
    }
})

export default userSlice.reducer