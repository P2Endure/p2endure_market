import React from 'react';
import PropTypes from 'prop-types';
import ProductName from './ProductName';
import { Row, Col} from 'react-bootstrap';

const Product = props => 
<Row>
  <Col xs={6} md={12} lg={12}> 
    <div className="productList">
      <li>
        <ProductName 
            isEditing={props.isEditing}
            handleNameEdits={e => props.setName(e.target.value)}>
            {props.name}
        </ProductName>
        <Row>
            <label>
                 <input 
                     type="checkbox"
                     checked={props.isConfirmed}
                     onChange={props.handleConfirmation} />
             </label>

        <Col xs={6} md={4} lg={4}>     
             <button onClick={props.handleToggleEditing}>
                 {props.isEditing ? "save": "edit"}

            </button>
        </Col>    
        <Col xs={6} md={4} lg={4}>
        <button onClick={props.handleRemove}>remove</button>
        </Col> 
        </Row>
      </li>
    </div>
  </Col>  
</Row>
Product.propTypes ={
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handeToggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
};  

export default Product;