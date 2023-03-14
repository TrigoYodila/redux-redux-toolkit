const CAKE_ORDERED = "CAKE_ORDERED";

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
