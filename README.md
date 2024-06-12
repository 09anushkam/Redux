# Redux  

1. `npm install @reduxjs/toolkit react-redux` - install redux toolkit  
2. Create Store dir and Store.jsx inside of that folder  
Store.jsx -  

            import { configureStore } from '@reduxjs/toolkit'
            export const store = configureStore({
            reducer: {},
            })

4. Wrap the App component by Provider and Apply store in main.jsx -  

            import { store } from './Store/Store'
            import { Provider } from 'react-redux'
            <Provider store={store}>
            <App />
            </Provider>, 

6. Create Reducer dir inside of Store dir and counterSlice.jsx inside Reducer  
counterSlice.jsx -  


            <!-- 1. import createSlice -->
   
            import { createSlice } from '@reduxjs/toolkit'  


            <!-- 2. Creating initialState -->
   
            const initialState = {
            value: 0,
            }


            <!-- 3. Creating slice -->
   
            export const counterSlice = createSlice({
              name: 'counter',
              initialState,
              reducers: {
                increment: (state) => {
                  state.value += 1
                },
                decrement: (state) => {
                  state.value -= 1
                },
                incrementByAmount: (state, action) => {
                  console.log(action)
                  state.value += action.payload
                },
              },
            });


            <!-- 4. exporting actions -->
   
            export const { increment, decrement, incrementByAmount } = counterSlice.actions;  


            <!-- Async action code -->
   
            export const incrementAsync = (amount) => (dispatch) => {
            setTimeout(() => {
            dispatch(incrementByAmount(amount));
            }, 1000);
         }


            <!-- 5. exporting slice -->
   
            export default counterSlice.reducer;
   

8. Updating Store.jsx by importing and using reducer  -  

            import { configureStore } from '@reduxjs/toolkit'
            import counterReducer from './Reducers/counterSlice'

            export const store = configureStore({
            reducer: {
            counter: counterReducer,
            },
            });

10. Useselector() is used to access the data and useDispatch() is used to dispatch the actions  
App.jsx -  

            import React from 'react'
            import { useDispatch, useSelector } from 'react-redux'
            import { decrement, increment, incrementAsync, incrementByAmount } from './Store/Reducers/counterSlice'

            const App = () => {
              const {value}=useSelector(state=>state.counter);
              const dispatch=useDispatch();

              return (
                <div className='m-auto container mt-5 bg-red-100 p-10'>
                  <h1 className='mb-5 text-center font-bold text-3xl text-red-900'>
                    Counter:{value}
                  </h1>
                  <div className='text-center'>
                    <button onClick={()=>dispatch(increment())} className='rounded border-red-900 text-red-900 bg-transparent border-2 px-5 py-2'>
                      Increment
                    </button>
                    <button onClick={()=>dispatch(decrement())} className='mx-5 rounded border-red-900 text-red-900 bg-transparent border-2 px-5 py-2'>
                      Decrement
                    </button>
                    <button  
                    // onClick={()=>dispatch(incrementByAmount(5))}
                    onClick={()=>dispatch(incrementAsync(5))}
                     className='rounded border-red-900 text-red-900 bg-transparent border-2 px-5 py-2'>
                      Increment by 5
                    </button>
                  </div>
                </div>
                )
              }

            export default App;

11. Wrapping of App by Provider,BrowserRouter when u have to use redux and routing both  

        <Provider store={store}>  
          <BrowserRouter>
            <App />  
          </BrowserRouter>
        </Provider>,

redux-1 : redux docs wala example  
redux-2 : users ka example  
redux-3 : async example using api  


<!-- Steps of redux toolkit -->
<!-- boiler plate -->
<!-- managing reducers,actions -->
<!-- useSelector -->
<!-- Async Actions -->
<!-- Combining multiple reducers -->

<!-- tool : redux devtool extension   -->
