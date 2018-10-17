import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select-2';

var PRODUCTS = require('./selectProducts.js');

var ProductField = createClass({
	displayName: 'ProductField',
	propTypes: {
		label: PropTypes.string,
		searchable: PropTypes.bool,
	},
	getDefaultProps () {
		return {
			label: 'Products:',
			searchable: true,
		};
	},
	getInitialState () {
		return {
			product: 'EP',
			disabled: false,
			searchable: this.props.searchable,
			selectValue: '',
			clearable: true,
			rtl: false,
		};
	},
	clearValue (e) {
		this.select.setInputValue('');
	},
	switchProduct (e) {
		var newProduct = e.target.value;
		this.setState({
			product: newProduct,
			selectValue: null,
		});
	},
	updateValue (newValue) {
		this.setState({
			selectValue: newValue,
		});
	},
	focusProductSelect () {
		this.select.focus();
	},
	toggleCheckbox (e) {
		let newProduct = {};
		newProduct[e.target.name] = e.target.checked;
		this.setProduct(newProduct);
	},
	render () {
		var options = PRODUCTS[this.state.product];
		return (
			<div className="section">
				<Select
					id="product-select"
					ref={(ref) => { this.select = ref; }}
					onBlurResetsInput={false}
					onSelectResetsInput={false}
					autoFocus
					options={options}
					simpleValue
					clearable={this.state.clearable}
					name="product-state"
					disabled={this.state.disabled}
					value={this.state.selectValue}
					onChange={this.updateValue}
					rtl={this.state.rtl}
					searchable={this.state.searchable}
				/>
				<div className="checkbox-list">
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.product === 'EP'} value="EP" onChange={this.switchProduct}/>
						<span className="checkbox-label">New Product</span>
					</label>
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.product === 'NP'} value="NP" onChange={this.switchProduct}/>
						<span className="checkbox-label">Existing Product</span>
					</label>
				</div>
			</div>
		);
	}
});


export default ProductField;