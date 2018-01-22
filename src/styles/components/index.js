import React from 'react';
import PropTypes from 'prop-types';

import ProductInputForm from './ProductInputForm';

const Header = props =>
  <header>
    <ProductInputForm
       newProductSubmitHandler={props.newProductSubmitHandler}
       pendingProduct={props.pendingProduct}
       handleNameInput={props.handleNameInput}
    />
  </header>;

Header.propTypes = {
    newProductSubmitHandler: PropTypes.func.isRequired,
    pendingProduct: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
};

export default Header;