import React from 'react'
import { getProducts,productdelete } from '../Store/Reducers/ProductReducer'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { asyncgetproducts } from '../Store/Actions/ProductAction'
import ProductReducer from '../Store/Reducers/ProductReducer'


const Products = () => {
  const {products}=useSelector((state)=>state.ProductReducer);
  const dispatch=useDispatch();

  useEffect(()=>{
    // dispatch(getProducts());
    dispatch(asyncgetproducts());
  },[]);

  const DeleteHandler=(index)=>{
    // console.log(index);
    dispatch(productdelete(index));
    // productdelete(index); // not gonna work , reason don't know
  }

  return (
    <div className='m-auto container p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>Product List</h1>
      <ul>
        { products && products.map((product,index)=>{
        return (
        <li key={index}>
          <h1>
            {product.title}{" "} 
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

export default Products