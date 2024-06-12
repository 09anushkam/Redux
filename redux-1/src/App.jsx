import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, incrementByAmount } from './Store/Reducers/counterSlice'
import { decrement, increment, incrementAsync} from './Store/Reducers/counterSlice'


const App = () => {
  const {value}=useSelector(state=>state.counter)
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

export default App