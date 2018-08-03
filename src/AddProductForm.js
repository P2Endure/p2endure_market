import React, { Component } from 'react';

import Header from './DynamicForm/Header';
import MainContent from './MainContent';
import ProductField from './DynamicForm/Forms/select.js';

class AddProductForm extends Component {

  state = {
    isFiltered: false,
    pendingProducts: require('./DynamicForm/Forms/selectProducts.js'),
    products: []
  };

  lastProductId = 0;

  newProductId = () => {
    const id = this.lastProductId;
    this.lastProductId += 1;
    return id;
  };

  toggleProductProperty = (property, id) =>
    this.setState({
      products: this.state.products.map(product => {
        if (id === product.id) {
          return {
            ...product,
            [property]: !product[property]
          };
        }
        return product;
      })
    });

  toggleConfirmation = id =>
    this.toggleProductProperty("isConfirmed", id);

  removeProduct = id =>
    this.setState({
      products: this.state.products.filter(product => id !== product.id)
    });

  toggleEditing = id =>
    this.toggleProductProperty("isEditing", id);

  setName = (name, id) =>
    this.setState({
      products: this.state.products.map(product => {
        if (id === product.id) {
          return {
            ...product,
            name
          };
        }
        return product;
      })
    });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e =>
    this.setState({ pendingProduct: e.target.value });

  newProductSubmitHandler = e => {
    e.preventDefault();
    const id = this.newProductId();
    this.setState({
        products: [
        {
          name: this.state.pendingProduct,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.products
      ],
      pendingProduct: ''
    });
  }

  getTotalInvited = () => this.state.products.length;

  getAttendingProducts = () =>
    this.state.products.reduce(
      (total, product) => product.isConfirmed ? total + 1 : total,
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingProducts();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header
          newProductSubmitHandler={this.newProductSubmitHandler}
          pendingProduct={this.state.pendingProduct}
          handleNameInput={this.handleNameInput}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          products={this.state.products}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeProduct={this.removeProduct}
          pendingProduct={this.state.pendingProduct}
        />
      </div>
    );
  }
}

export default AddProductForm;
