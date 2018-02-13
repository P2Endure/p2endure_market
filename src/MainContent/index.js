import React from "react";
import PropTypes from "prop-types";

import SelectedFilter from "./SelectedFilter";
import ProductList from "./ProductList";
import Counter from "./Counter";

const MainContent = props =>
  <div className="main">
    <SelectedFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}
    />
    <Counter
      totalProductListed={props.totalProductListed}
      numberAttending={props.numberAttending}
      numberUnconfirmed={props.numberUnconfirmed} />
    <ProductList
      products={props.products}
      toggleConfirmation={props.toggleConfirmation}
      toggleEditing={props.toggleEditing}
      setName={props.setName}
      isFiltered={props.isFiltered}
      removeProduct={props.removeProduct}
      pendingProduct={props.pendingProduct}
    />
  </div>;

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalProductListed: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  pendingProduct: PropTypes.string.isRequired
};

export default MainContent;
