import React from "react";
import product from '../../assets/product.png';

 
class CartItem extends React.Component {
    

    render(){
        return (
        // <div className='cart-items'>

            <div className="cart-item">
             <img className="item-img" alt="item img" src={product}></img>
             <div className="box increase">+</div>
            <p className="item-name">Appollo Running short</p>
            <p className="items-quantity">2</p>

            <p className="item-price">$50.00</p>
            <div className="sizes" >
            <div className="box small">S</div>
            <div className="box medium">M</div>
            <div className="box decrease">-</div>

            </div>  

             </div>
        // </div>
        );
    }
}
export default CartItem;



