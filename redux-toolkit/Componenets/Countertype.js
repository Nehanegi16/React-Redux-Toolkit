import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../CounterSlice'

const Counter = () => {
       const count=useSelector((state)=>state.counter)
       const dispatch=useDispatch()
  return (
    <div>

        <h1>Counter</h1>
        <div>count:{count}</div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    
    </div>
  )
}

export default Counter