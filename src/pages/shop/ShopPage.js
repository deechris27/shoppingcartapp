import React from 'react';
import ShoppingList from '../../components/shoppinglist/ShoppingList.Component';
import './ShopPage.styles.scss';
import Filter from '../../components/filter/Filter.Component';
import Sort from '../../components/sort/Sort.Component';
import Header from '../../components/header/Header.Component';
import { connect } from 'react-redux';

class ShopPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            test: 0
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header count={this.props.count} />
                <div className="results-section">
                    <div className="filters">
                        <Filter filterByRange={this.props.filterByRange} />
                    </div>
                    <div className="search-results">
                        <Sort sortHighToLow={this.props.sortHighToLow} sortLowToHigh={this.props.sortLowToHigh} sortByDiscount={this.props.sortByDiscount} />
                        <ShoppingList shopItems={this.props.items} addToCart={this.props.addToCart} />
                    </div>
                    <div className="footer">
                        <p>@Copyright</p>
                    </div>
                </div>
            </React.Fragment>)
    }
}

const mapStateToProps = state => ({
    items: state.itemsReducer.items,
    count: state.itemsReducer.count
});

const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch({ type: 'ADD_TO_CART', payload: id }),
    sortHighToLow: () => dispatch({ type: 'HIGH_TO_LOW' }),
    sortLowToHigh: () => dispatch({ type: 'LOW_TO_HIGH' }),
    sortByDiscount: () => dispatch({ type: 'DISCOUNT' }),
    filterByRange: (min, max) => dispatch({ type: 'RANGE_FILTER', payload: [min, max] })
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);