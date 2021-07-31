import React from "react";
import {graphql} from "react-apollo";
import { getCategoryQuery } from "../queries/queries";

class Filter extends React.Component {

    displayCategory(){
        var data = this.props.data;
        
    if(data.loading){
        return(<option> Loading Products</option>);
    }
    else{
       
        const results =  data.category.products.reduce((acc,d) =>{
            const found = acc.find(a => a.category === d.category);
            if(!found){
                acc.push({category:d.category})
            }
            else{

            }
            return acc;
        },[]);


        return( results.map(result=>{
          

        return(
            
            <option>{result.category}</option>
        );
        }));
    }
   
    }
    render(){
        return <div>
       
               
           <select value={this.props.category} onChange={this.props.filterProducts} className="filter-category">
           <option value="All">All</option>
           {this.displayCategory()}
           </select> 
            
            
        </div>;
    }
}
export default graphql(getCategoryQuery)(Filter);