import React from "react";

import Navigation from "../components/Navigation";


class MainLayout extends React.Component {
    render(){
        return(
           
           
             <div>
             <Navigation />
                <div className="mainLayout">
                {this.props.children}

                </div>
        </div>
        
       
        );
    }
}
export default MainLayout;