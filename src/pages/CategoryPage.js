import React from "react";
import ProductCard from '../components/ProductCard';
import Filter from "../components/Filter";
import { getProductsQuery } from "../queries/queries";
import {graphql} from "react-apollo";


class CategoryPage extends React.Component {

    constructor(props){
        super(props);
       

         this.state = {
             products:this.props.data.category.products,
                category:"",
                cartItems:[]


            };
            this.filterProducts=this.filterProducts.bind(this);
            // this.addToCart=this.addToCart.bind(this);
           
        }
        
    
        // addToCart =(product)=>{
            // const cartItems = this.state.cartItems.slice();
            // let alreadyInCart = false;
            // cartItems.forEach((item) => {
            //     if(item.name===product.name){
            //         item.count++;
            //         alreadyInCart = true;
            //     }
            //     if(!alreadyInCart){
            //         cartItems.push({...product, count = 1})
            //     }
            // });

        // }

        filterProducts = (event) => {
          var category = event.target.value;
          console.log(category);
          if(category === "All"){
              this.setState({
                  category:category,

                  products:this.state.products
              });
          }
          else{
            this.setState({
                category:category,
                products:this.state.products.filter(
                    (product) => product.category.indexOf(category) >=0
                ),

           

            });
        }
        
        };

    render(){
        return(
             <div>
                
                <div className="categoryPage">
                    <Filter
                     category={this.state.categroy}
                     filterProducts={this.filterProducts}/>
                    <ProductCard products={this.state.products}/>
                </div>

            </div>
        
       
        );
    }
}
export default graphql(getProductsQuery)(CategoryPage);