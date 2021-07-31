import React from "react";
import carticon from "../assets/carticon.png";
// import { connect } from "react-redux";
// import {fetchProducts} from "../actions/productActions";

class ProductCard extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            carticon:null
        };
        this.showCartIcon = this.showCartIcon.bind(this);
        this.hideCartIcon = this.hideCartIcon.bind(this);
    }

    showCartIcon(){
        this.setState({
            carticon:
                <img
                //  onClick={() => this.props.addToCart(product)}

                  className="cart-icon" alt="" src={carticon}></img>
            

        });
    }

    hideCartIcon(){
        this.setState({
            carticon: null
        });
    }
    
    // componentDidMount(){
    //     this.props.fetchProducts();
    // }
    
    displayProducts(){
        return(
            this.props.products.map((product)=>{
               let instock = (product.inStock)? "":"OUT OF STOCK";
            
               return(
        
                        <div onMouseEnter={this.showCartIcon} onMouseLeave={this.hideCartIcon} className="product-card">
                                   
                            <div className="card-img-container">
                            <a href={`/product/${product.name}`}>
                            <img className="product-card-img" alt=" " key={product.gallery[1]} src={product.gallery[0]}></img> 
                            <p className="out-of-stock">{instock}</p> 
                            {this.state.carticon}
                            </a> </div>            
                         <p className="product-card-name" key={product.description}>{product.name}</p>

                            <p className="product-card-price" key={product.prices[1].amount}>$ {product.prices[0].amount}</p>   
                     </div>
                    
                   
                        );
                    })); 
               
}     
render(){ 
   
  return(
        <div>
        
        <div className="product-cards" >
        {!this.props.products?
         <div>
            Loading...
        </div> :
       this.displayProducts()
        }
            
            
        </div>
        </div>
        );
    }
}
// /export default connect((state) => ({products: state.products}),{
//     fetchProducts,
// })(ProductCard);
 
export default ProductCard;