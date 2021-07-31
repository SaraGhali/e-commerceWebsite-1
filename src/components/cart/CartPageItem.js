import React from "react";
import product from '../../assets/product.png';

 
class CartPageItem extends React.Component {
    

    render(){
        return (

            <div className="cart-page-item">
             <img className="item-img" alt="item img" src={product}></img>
             <div className="increase">+</div>
             <p className="item-brand">Appollo</p>

            <p className="item-name">Running short</p>
            <p className="items-quantity">2</p>

            <p className="item-price">$50.00</p>
            <div className="decrease">-</div>

            <div className="sizes" >
            <div className="box small">S</div>
            <div className="box medium">M</div>

            </div>  


             </div>
        );
    }
}
export default CartPageItem;



