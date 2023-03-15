const redux = require('redux')
//import produce immer
const produce = require('immer').produce

const initialState = {
    name:'trigo',
    adress:{
        street:'1 kimpolo',
        city:'Kinshasa',
        state:'CE'
    }
}

const STREET_UPDATE = "STREET_UPDATE"
const updateStreet = (street) => {
    return {
        type:STREET_UPDATE,
        payload:street
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case STREET_UPDATE:
            // return {
            //     ...state,
            //     adress:{
            //         ...state.adress,
            //         street:action.payload
            //     }
            // }

            //replace by immer package
            return produce(state, (draft)=>{
                draft.adress.street = action.payload
            })
        default:
            return state
    }
}

const store = redux.createStore(reducer)
console.log("Initial state ", store.getState())

const unsubscribe = store.subscribe(() =>
  console.log("update state ", store.getState())
)
store.dispatch(updateStreet('24 kasangulu'))
unsubscribe()