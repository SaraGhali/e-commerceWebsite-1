import React from "react";
import cart from "../assets/cart.png"
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import CurrencyBox from "./CurrencyBox";
import Cart from './cart/Cart';



class Navigation extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        cart:null
    };
    
    this.handleCartHoverOver = this.handleCartHoverOver.bind(this);
    this.handleCartHoverAway = this.handleCartHoverAway.bind(this);
    
    }

    handleCartHoverOver(){
        this.setState({
            cart :<Cart
            // cartItems={cartItems}
              />
            
            
            
        });

    }
     
    handleCartHoverAway(){
        this.setState({
            cart:null
        });

    }
    render(){
        return <div className ="navigation-bar">
            
            <ul className="nav-items">
                <li className="nav-item"><a id="active" href="#">WOMEN</a></li>
                <li className="nav-item"><a href="#">MEN</a></li>
                <li className="nav-item"><a href="#">KIDS</a></li>
                <li className="action">
                <Link to="/cart">
                <img onMouseEnter={this.handleCartHoverOver} onMouseLeave={this.handleCartHoverAway} className="cart-img" src={cart} alt="cart"></img>
                </Link>
                {this.state.cart}
                
                
                </li>
                <li>
                <CurrencyBox />

                </li>
                
                
                {/* <div onMouseEnter={this.handleCurrencyHoverOver} onMouseLeave={this.handleCurrencyHoverAway} > */}
                {/* <li className="action"><a>{this.state.currency}</a></li>
                {this.state.currencyBox} */}

                {/* </div> */}
                

                {/* <li className="action"><a href="#">$</a></li> */}
                <li>
                <Link to="/category">
                <img className="logo" src={logo} alt="  "></img>

                </Link>
                </li>
            </ul>
        </div>;
    }
}
export default Navigation;