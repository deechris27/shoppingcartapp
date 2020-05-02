import React, { useState } from 'react';
import './Sort.styles.scss';


export default function Sort({sortHighToLow, sortLowToHigh, sortByDiscount}){

    const [sortType, setSortType] = useState('');

    const lowToHighSort = () => {
        setSortType('low-high');
        sortLowToHigh();
    };
    const highToLowSort = () => {
        setSortType('high-low');
        sortHighToLow();
    }
    const discountSort = () => {
        setSortType('discount');
        sortByDiscount();
    }

    return (
        <div className="sort-wrapper">
            <p className="sort-text">
                Sort By:
                </p>
            <p className={`sort ${sortType === 'low-high' ? 'active' : ''}`} onClick={lowToHighSort}>Price - Low High</p>
            <p className={`sort ${sortType === 'high-low' ? 'active' : ''}`} onClick={highToLowSort}>Price - High Low</p>
            <p className={`sort ${sortType === 'discount' ? 'active' : ''}`} onClick={discountSort}>Discount</p>
        </div>
    )
}
