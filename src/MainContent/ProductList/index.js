import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import PendingProduct from './PendingProduct';

const ProductList = props =>
  <ul>
    <PendingProducts name={props.pendingProduct} />
    {props.productss
      .filter(product => !props.isFiltered || product.isConfirmed)
      .map((product, index) =>
        <Product
          key={index}
          name={product.name}
          isConfirmed={product.isConfirmed}
          isEditing={product.isEditing}
          handleConfirmation={() => props.toggleConfirmation(product.id)}
          handeToggleEditing={() => props.toggleEditing(product.id)}
          setName={text => props.setName(text, product.id)}
          handleRemove={() => props.removeProducts(product.id)} />
      )}
  </ul>;

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeProduct: PropTypes.func.isRequired,
  pendingProduct: PropTypes.string.isRequired
};

export default ProductList;