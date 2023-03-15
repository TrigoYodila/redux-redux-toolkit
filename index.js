//import redux
const redux = require('redux')
const reduxLogger = require('redux-logger')

//create store
const createStore = redux.createStore
//creater of actions
const bindActionsCreators = redux.bindActionCreators
//create a combine reducers
const combineReducers = redux.combineReducers
//create a logger
const logger = reduxLogger.createLogger()
//create a middleware
const applyMiddleware = redux.applyMiddleware

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockedCake(qty=1){
    return {
        type : CAKE_RESTOCKED,
        payload:qty
    }
}

function orderIceCream(qty=1){
    return {
        type:ICECREAM_ORDERED,
        payload:qty
    }
}

function restockedIceCream(qty=1){
    return {
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}

//initial state
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams:20,
// };

//separate initial state and reducers
const initialCakeState = {
    numOfCakes:10
}

const initialIceCreamState = {
    numOfIceCreams:20
}

//previousState + action => new state

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case CAKE_ORDERED:
        return {
          ...state, //copie previousState
          numOfCakes: state.numOfCakes - 1, //update a property
        };
      case CAKE_RESTOCKED:
        return {
          ...state,
          numOfCakes: state.numOfCakes + action.payload,
        };
      default:
        return state;
    }
}

const iceCreamreducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

//combine reducers
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamreducer
})


//create store
// const store = createStore(reducer)
const store = createStore(rootReducer, applyMiddleware(logger))

//expose state with getState method and save that initialstate in console
console.log('Initial state ', store.getState())

//configure a listener for store
//save the state in console after each update 
const unsubscribe = store.subscribe(() => {}
  // console.log("update state ", store.getState())

);

//repartition of state
// send action in reducer
//store.dispatch(orderCake()) // or dispatch with creater of action
// store.dispatch({
//     type:CAKE_ORDERED,
//     quantity:1
// })

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockedCake(3))

//used bindActionscreators
const actions = bindActionsCreators({orderCake, restockedCake, orderIceCream, restockedIceCream}, store.dispatch)
//call actions
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockedCake(3)

actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream(3)

//unsubscribe in all update in store
unsubscribe()

