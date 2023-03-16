// import store
const store = require('./app/store')

// import actions
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

console.log('Initial State ', store.getState())
// abonnement
const unsubscribe = store.subscribe(()=>{
    console.log('Update State ', store.getState())

})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(2))

unsubscribe()