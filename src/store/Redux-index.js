import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, isShown: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state){
      state.isShown = !state.isShown
    }
  }
})

// const counterReducer = (state = initialState , action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       isShown: state.isShown,
//     };
//   }

//   if(action.type === 'increase'){
//     return {
//       counter: state.counter + action.amount,
//       isShown: state.isShown,
//     }
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       isShown: state.isShown,
//     };
//   }

//   if(action.type === 'toggle'){
//     return{
//       counter: state.counter,
//       isShown: !state.isShown
//     }
//   }

//   return state;
// };

const initialAuthState = {autentication: false}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state){
      state.autentication = true
    },
    logout(state){
      state.autentication = false
    },
  }
})

export const counterActions = counterSlice.actions

export const authActions = authSlice.actions

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export default store;