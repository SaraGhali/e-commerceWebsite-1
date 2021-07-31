import React from "react";
import { getCurrencyQuery } from "../queries/queries";
import {graphql} from "react-apollo";




class CurrencyBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: " $ "
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
       
        this.setState({
            value:event.target.value
        });

    }


    displayCurrencies(){
    var data = this.props.data;
    
    if(data.loading){

        return(<option> Loading currencies</option>);
    }
    else {
        return(data.currencies.map(currency=>{
            return(
                // <p className="currency-item" key={currency}><a href="#">{currency}</a></p>
                <option value={this.state.value} onChange={this.handleChange} key={currency}>{currency}</option>

            );


        }));
    }
    }
    render(){
        return (
        // <div className="currency-box">
        <select className="currency-box">
        {this.displayCurrencies()}
        </select>
        
        
        // </div>
        )
    }
}
export default graphql(getCurrencyQuery)(CurrencyBox);