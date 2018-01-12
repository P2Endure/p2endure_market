import React from 'react';
import PropTypes from 'prop-types';
import ProductName from './ProductName';

const Product = props => 
      <li>
        <ProductName 
            isEditing={props.isEditing}
            handleNameEdits={e => props.setName(e.target.value)}>
            {props.name}
        </ProductName>
        <label>
            <input 
                type="checkbox" 
                checked={props.isConfirmed}
                onChange={props.handleConfirmation}
                /> Confirmed
        </label>
        <button onClick={props.handleToggleEditing}>
            {props.isEditing ? "save": "edit"}
            
        </button>
        <button onClick={props.handleRemove}>remove</button>
      </li>;

Product.propTypes ={
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleToggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
};  