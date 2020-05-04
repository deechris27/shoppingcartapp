import React from 'react';
import './Search.styles.scss';
import {connect} from 'react-redux';

const Search = (props) => {
    
    return<form className="form-inline">
        <input className="form-control search" type="search" placeholder="Search" aria-label="Search" onKeyDown={(e)=>e.keyCode===8 || e.keyCode===46 ? props.onKeyPress(e.keyCode) : props.onKeyPress(e.target.value)}/>
   </form>
};


const mapDispatchToProps = dispatch => ({
    onKeyPress: (val) => dispatch({type: 'SEARCH', payload: val})
})

export default connect(null, mapDispatchToProps)(Search);