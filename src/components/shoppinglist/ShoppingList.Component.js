import React from 'react';
import './ShoppingList.styles.scss';

const ShoppingList = ({ shopItems, addToCart }) => {
    return (
        <div className="shopping-item">
            {shopItems.map((item, index) => {
                return (
                    <div key={index} className="item">
                        <img className="item-picture" src={item.image} />
                        <div className="item-detail">
                            <p>{item.name}</p>
                            <div className="price">
                                <p className="new-price">₹ {item.price.actual}</p>
                                <p className="old-price">{item.price.display}</p>
                                <p className="discount">{item.discount}% off</p>
                            </div>
                            <div className="add-button-wrapper">
                                <button onClick={() => addToCart(index)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ShoppingList;