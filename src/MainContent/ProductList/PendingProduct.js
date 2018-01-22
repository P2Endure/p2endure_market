import React from 'react';
import PropTypes from 'prop-types';

const PendingProduct = props => {
    if(props.name){
      return(  
      <li className="pending">
        <span>
            {props.name}
        </span>
      </li>
      );
    }
    return null;
};

PendingProduct.propTypes ={
    name: PropTypes.string.isRequired
};   

export default PendingProduct;