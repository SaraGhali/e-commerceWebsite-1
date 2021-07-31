import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_SUCCESS } from "../types";

const productsReducer = (
    state = { loading:true , products:[] }, action)=>{
    switch(action.type){
        case FETCH_PRODUCTS :
            return { loading:true};
        case FETCH_PRODUCTS_SUCCESS :
            return {loading:false, products:action.payload} ;
        case FETCH_PRODUCTS_FAIL:
            return { loading:false, error:action.payload };       
        default:
            return state;
        

    }

};

export {productsReducer}; 