import React from 'react';
import './Search.styles.scss';
import {connect} from 'react-redux';

const Search = (props) => {
    return<form className="form-inline">
        <input className="form-control search" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>props.onKeyPress(e)}/>
   </form>
};


const mapDispatchToProps = dispatch => ({
    onKeyPress: (e) => dispatch({type: 'SEARCH', payload: e.target.value})
})

export default connect(null, mapDispatchToProps)(Search);