import axios from 'axios'
// import createSlice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// initialState 
const initialState = {
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
    // define reducers
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending,(state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            state.loading = false,
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer