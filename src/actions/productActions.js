import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_SUCCESS } from "../types";

const fetchProducts = () => async(dispatch) =>{
    
     dispatch({
         type: FETCH_PRODUCTS,
        
     });
     try{
        
         dispatch({
             type:FETCH_PRODUCTS_SUCCESS,
            //  payload:data,
         });
        
     }
     catch(error){
         dispatch({
             type: FETCH_PRODUCTS_FAIL,
             payload:error.message
         });
     }

}


export {fetchProducts};