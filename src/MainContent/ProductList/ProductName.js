import React from 'react';
import PropTypes from 'prop-types';


const ProductName = props =>{
    if (props.isEditing){
        return(
            <input type="text" 
            value={props.children}
            onChange={props.handleNameEdits}
            onChange={props.handleNameEdits}
            />
        );
    }

    return(
        <span>
            {props.children}
        </span>
    )
};

ProductName.propTypes ={
    isEditing: PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired
    
};   

export default ProductName;