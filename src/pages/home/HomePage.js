import React from 'react';
import './HomePage.styles.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header.Component';
import {connect} from 'react-redux';

const HomePage = ({count}) => (
    <div className="homepage">
        <Header count={count}/>
        <p>Dummy Home Page....</p>
        <hr />
        <Link to="/shop">Go to Shop Page</Link>
        <div className="footer">
            <p>@Copyright</p>
        </div>
    </div>
);

const mapStateToProps = state => ({
    count: state.itemsReducer.count
});

export default connect(mapStateToProps,null)(HomePage);