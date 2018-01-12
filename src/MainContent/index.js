import React from "react";
import PropTypes from "prop-types";

import SelectedFilter from "./SelectedFilter";
import ProductList from "./ProductList";
//import Counter from "./Counter";

const MainContent = props =>
  <div className="main">
    <SelectedFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}
    />
    <ProductList
      products={props.products}
      toggleConfirmationAt={props.toggleConfirmationAt}
      toggleEditingAt={props.toggleEditingAt}
      setNameAt={props.setNameAt}
      isFiltered={props.isFiltered}
      removeGuestAt={props.removeGuestAt}
      pendingProducts={props.pendingProducts}
    />
  </div>;

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totaltotalProductListed: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeProductAt: PropTypes.func.isRequired,
  pendingProduct: PropTypes.string.isRequired
};

export default MainContent;
