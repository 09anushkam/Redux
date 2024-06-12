import React from 'react'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { userdelete } from '../Store/Reducers/UserReducer';

const Users = () => {

  const {users}=useSelector((state)=>state.UserReducer);
  const dispatch = useDispatch();

  const DeleteHandler=(index)=>{
    // console.log(index);
    dispatch(userdelete(index));
    // userdelete(index); // not gonna work , reason don't know
  }

  return (
    <div className='m-auto container p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>User List</h1>
      <ul>
        {users.map((user,index)=>{
        return (
        <li key={index}>
          <h1>
            {user.name}{" "} 
            <span 
            onClick={()=>DeleteHandler(index)} 
            // onClick={()=>dispatch(DeleteHandler(index))} // not gonna work , reason don't know
            className='text-red-600 font-black cursor-pointer'>X</span>
          </h1> 
        </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Users