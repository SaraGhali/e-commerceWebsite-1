import React from "react";
import { getProductsQuery } from "../queries/queries";
import { graphql } from 'react-apollo';

class ProductPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            product:this.props.data.category.products.find((x) => x.name === this.props.match.params.name)

        }
        
    }
    render(){
        return(
             <div className="productPage">
        
                {!this.state.product ? 
        
        <div> Product Is Not Found </div> :
             <div>
         <div className="imgs-view">

                    <img src={this.state.product.gallery[0]} alt=" img " className="img-view"></img>
                    <img src={this.state.product.gallery[1]} alt=" img " className="img-view"></img>
                    <img src={this.state.product.gallery[2]} alt=" img " className="img-view"></img>
                    <img src={this.state.product.gallery[3]} alt=" img " className="img-view"></img>
                    <img src={this.state.product.gallery[4]} alt=" img " className="img-view"></img>
        </div>

        <div className="product-container">
        <img className="productV-img" src={this.state.product.gallery[0]} alt=" product img"></img>
        <div className="product-description">
        <p className="product-brand">Apollo</p>
        <p className="product-name">{this.state.product.name}</p>
        <p className="product-size">{this.state.product.attributes.name}:</p>
        <div className="product-sizes">
        <div className="size-box">XS</div>
        <div className="size-box">S</div>
        <div className="size-box">M</div>
        <div className="size-box">L</div>
        </div>
        <p className="product-price">PRICE:</p>
        <p className="product-prices">${this.state.product.prices[0].amount}</p>
        <button className="add-to-cart">ADD TO CART</button>
        <p className="product-info">{this.state.product.description}</p>

        </div>


        
        </div>
        </div>
        }
        </div>);
    }
}
export default graphql(getProductsQuery)(ProductPage) ;
