//import redux
const redux = require('redux')

//create store
const createStore = redux.createStore

const CAKE_ORDERED = "CAKE_ORDERED"

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
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
      };
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
store.dispatch(orderCake()) // or dispatch with creater of action
// store.dispatch({
//     type:CAKE_ORDERED,
//     quantity:1
// })
store.dispatch(orderCake())
store.dispatch(orderCake())

//unsubscribe in all update in store
unsubscribe()

