import React from "react";
import CartItem from "./CartItem";


 
class Cart extends React.Component {
    

    render(){
        const {cartItems} = this.props;
        return <div className="cart-box"> 
        { cartItems.length === 0 ? <div>Cart is empty</div> :
         <div>
            <p className="cart-title">My Bag, <span>{cartItems.length} items</span></p>
            <div className="cart-items">
            <CartItem />
           
            </div>
            <p className="total">Total</p>
            <p className="total-price">$500.00</p>
            <div className="buttoms">
            <button className="view-bag"> VIEW BAG</button>
            <button className="check-out">CHECK OUT</button>
</div>
        </div>}   

           

            
            </div>
            
       ;
    }
}
export default Cart;