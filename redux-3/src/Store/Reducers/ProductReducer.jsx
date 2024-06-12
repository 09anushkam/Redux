import {createSlice} from '@reduxjs/toolkit';
// import axios from 'axios'

const initialState={
    products:[],
};

export const ProductSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        // actions
        getProducts:(state,action)=>{
            // console.log(action);
            // const response=await axios.get("https://fakestoreapi.com/products");
            // console.log(response.data);
            state.products=action.payload;
        },
        productdelete:(state,action)=>{
            // console.log(state.users,action);
            state.products.splice(action.payload,1);
        }
    },
});

export default ProductSlice.reducer;
export const {getProducts,productdelete}=ProductSlice.actions;