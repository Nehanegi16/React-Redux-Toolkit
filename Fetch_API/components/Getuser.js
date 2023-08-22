import React from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { getAllData } from '../Features/UserSlice'

const Getuser = () => {
    const data=useSelector((state)=>{
       return  state.app
    })
    const dispatch=useDispatch()
    if(data.loading){
        return <h1>Loading....</h1>
    } 
  return (
    <div>
        <h1>hello my users</h1>
        <button onClick={()=>dispatch(getAllData())}>Get User Data</button>
        {data.users && data.users.map((ele)=>(  
            <li key={ele.id}> {ele.login} </li>
        ))}

    </div>
  )
}

export default Getuser