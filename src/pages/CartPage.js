import React from "react";
import CartPageItem from "../components/cart/CartPageItem";


class CartPage extends React.Component {
    render(){
        const {cartItems} = this.props;
        return <div className="cart-page">

        <h1 className="cart-page-title">cart</h1>
        {cartItems.length ===0 ? <div> Cart is Empty</div>:
        <div className="cart-page-items">
       
       <CartPageItem />
       </div>
       
         }
        
        </div>
    }
}
export default CartPage;