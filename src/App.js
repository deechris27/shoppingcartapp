import React from 'react';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CartPage from './pages/cart/CartPage';
import {Switch, Route} from 'react-router-dom';


const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/cart' component={CartPage} />
            </Switch>
        </div>
    )
};



export default App;
