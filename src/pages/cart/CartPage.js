import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './CartPage.styles.scss';
import { connect } from 'react-redux';
import Header from '../../components/header/Header.Component';



const Cart = ({ cartCount, cartItems, increaseCount, decreaseCount, removeItem }) => {

    let discount = 0;
    let actual = 0;

    let itemCount1;

    cartItems.forEach((i, idx) => {
        itemCount1 = cartItems.reduce(function(acc, item) {
            return acc + (item === i);
        }, 0);
        discount = ((i.price.display - i.price.actual) * cartCount) + discount;
        actual = (i.price.display * cartCount) + actual;
    });

    return (
        <React.Fragment>
            <Header count={cartCount}/>
            <div className="cart-bg">
                <div className="cart-wrapper">
                    <div className="cart-detail">
                        <div className="prod-summary">
                            {cartItems.map((item, index) => {
                                return (
                                    cartCount > 0 ?
                                        <div key={index} className="cart-list">
                                            <img src={item.image} />
                                            <div className="item-summary">
                                                <p className="name">
                                                    {item.name}
                                                </p>
                                                <div className="price-info">
                                                    <p className="actual-price">&#8377;{item.price.actual}</p>
                                                    <p className="earlier-price">{item.price.display}</p>
                                                    <p className="item-disc">{item.discount}%</p>
                                                </div>
                                            </div>
                                            <div className="item-count">
                                                <p onClick={() => decreaseCount(index)} className="fa-minus"><FontAwesomeIcon icon={faMinus} /></p>
                                                <input readOnly value={cartItems[index].itemcount} />
                                                <p onClick={() => increaseCount(index)} className="fa-plus"><FontAwesomeIcon icon={faPlus} /></p>
                                            </div>
                                            <button onClick={() => removeItem(index)}>Remove</button>
                                        </div>
                                        : ""
                                )
                            })}
                        </div>
                        <div className="total-section">
                            <p className="price-detail">PRICE DETAILS</p>
                            <div className="price-summary">
                                <p>Price:</p>
                                <p>{actual}</p>
                            </div>
                            <div className="price-summary">
                                <p>Discount:</p>
                                <p>{discount}</p>
                            </div>
                            <div className="price-summary">
                                <p>Total Payable:</p>
                                <p>{actual - discount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>@Copyright</p>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    cartItems: state.itemsReducer.cart,
    cartCount: state.itemsReducer.count,
});

const mapDispatchToProps = dispatch => ({
    increaseCount: (index) => dispatch({ type: 'INCREASE', payload: index }),
    decreaseCount: (index) => dispatch({ type: 'DECREASE', payload: index }),
    removeItem: (index) => dispatch({ type: 'REMOVE_ITEM', payload: index })
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);