import React from 'react';
import './HomePage.styles.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header.Component';

const HomePage = () => (
    <div className="homepage">
        <Header />
        <p>Dummy Home Page....</p>
        <hr />
        <Link to="/shop">Go to Shop Page</Link>
        <div className="footer">
            <p>@Copyright</p>
        </div>
    </div>
);

export default HomePage;