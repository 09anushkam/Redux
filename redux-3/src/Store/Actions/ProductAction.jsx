import axios from "axios";
import { getProducts } from "../Reducers/ProductReducer";

// higher order function (function returning a function)
export const asyncgetproducts=()=>async(dispatch,getState)=>{
    try{
        const response=await axios.get("https://fakestoreapi.com/products");
        // here we have data of products that is sync data
        // console.log(response.data);
        dispatch(getProducts(response.data)); //dispatch
    }catch(error){
        console.log(error);
    }
}

// function a(){
//     return function(){};
// }

// ()=>()=>{}