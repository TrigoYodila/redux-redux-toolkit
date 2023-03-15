//imprt redux
const { default: axios } = require('axios')
const redux = require('redux')
//create a middleware
const applyMiddleware = redux.applyMiddleware
//create thunkMiddleware
const thunkMiddleware = require('redux-thunk').default

const createStore = redux.createStore

//initial state
const initialState = {
    loading:true,
    users:[],
    error:''
}

//constantes actions
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED"
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"

//actions
const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type:FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailed = (error) => {
    return {
        type:FETCH_USERS_FAILED,
        payload:error,
    }
}

//reducer
const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILED:
            return {
                loading:false,
                users:[],
                error:action.payload
            }
    }
}


//create async actions creators
const fetchUsers = () => {
    return function (dispatch){
        dispatch(fetchUsersRequested())
        //fetch data asynchronous
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            //get user id
            const users = response.data.map((user)=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch((error)=>{
            dispatch(fetchUsersFailed(error.message))
        })
    }
}

//create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchUsers())