import React from 'react';
import PropTypes from 'prop-types';
import ProductNameSave from './ProductNameSave.js';
import Input from '@material-ui/core/Input';

const ProductName = props =>{
    if (props.isEditing){
        return(
                <ProductNameSave/>
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