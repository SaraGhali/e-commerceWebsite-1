import React from "react";
import { Route,Switch } from "react-router-dom";
import './App.scss';

//  Layouts
import MainLayout from "./layouts/MainLayout";
//  Pages
// import Navigation from "./components/Navigation";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";



class App extends React.Component {
    render(){
        return <div className="app">
        
            <Switch>
            <Route path="/category" render={() => (
                <MainLayout>
                    <CategoryPage />
                </MainLayout>
            )} />

            <Route path="/product:name" render={()=>(
                <MainLayout>
                    <ProductPage />
                </MainLayout>
            )} />

            <Route path="/cart" render={()=>(
                <MainLayout>
                    <CartPage />
                </MainLayout>
            )} />

            </Switch>
            

            
        

        </div>;
    }
}
export default App;