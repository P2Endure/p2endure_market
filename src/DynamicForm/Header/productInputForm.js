import React from "react";
import PropTypes from "prop-types";

const ProductInputForm = props =>
  <form className="uploadForm" onSubmit={props.newProductSubmitHandler}>
    <input
      type="text"
      onChange={props.handleNameInput}
      value={props.pendingProduct}
      placeholder="Upload Product"
    />
    <button type="submit" name="submit" value="submit">Submit</button>
  </form>;

ProductInputForm.propTypes = {
  newProductSubmitHandler: PropTypes.func.isRequired,
  pendingProduct: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
};

export default ProductInputForm;