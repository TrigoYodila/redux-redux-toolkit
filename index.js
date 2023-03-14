//import redux
const redux = require('redux')

//create store
const createStore = redux.createStore
//creater of actions
const bindActionsCreators = redux.bindActionCreators

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

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

//initial state
const initialState = {
  numOfCakes: 10,
  anotherProperty:0,
};

//previousState + action => new state

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,   //copie previousState
        numOfCakes: state.numOfCakes - 1, //update a property
      }
    case CAKE_RESTOCKED:
        return {
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        }
    default :
      return state
  }
};

//create store
const store = createStore(reducer)

//expose state with getState method and save that initialstate in console
console.log('Initial state ', store.getState())

//configure a listener for store
//save the state in console after each update 
const unsubscribe = store.subscribe(() =>
  console.log("update state ", store.getState())
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
const actions = bindActionsCreators({orderCake, restockedCake}, store.dispatch)
//call actions
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockedCake(3)

//unsubscribe in all update in store
unsubscribe()

