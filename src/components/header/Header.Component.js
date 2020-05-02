
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/star.svg';
import ShoppingCart from '../../assets/shopping-cart.svg';
import SearchPic from '../../assets/search.svg';
import Search from '../search/Search.Component';
import './Header.styles.scss';

//const Logo = () => <img src={star} alt=""/>

const Header = ({count}) => {

    const [display, setDisplay] = useState(false);

    const showSearch = () => {
        setDisplay(!display);
    };
   
    return <div className="search-wrapper">
        <Link to="/" className="home-icon"><Logo /></Link>
        <div className="top-menu-control">
            {display ? <Search /> : ""}
            <i className="fas fa-search fa-1x search-icon" onClick={showSearch} aria-hidden="true" />
            <SearchPic className="search-icon" onClick={showSearch}/>
                <Link to='/cart'><ShoppingCart /></Link>
             <span className="cart-value">{count}</span>
        </div>
    </div>
}

export default Header;