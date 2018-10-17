import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => 
<div>
<table className="counter">
<tbody>
  <tr>
    <td>Marked:</td>
    <td>{props.numberAttending}</td>
  </tr>
  <tr>
    <td>Unmarked:</td>
    <td>{props.numberUnconfirmed}</td>
  </tr>
  <tr>
    <td>Total:</td>
    <td>{props.totalProductListed}</td>
  </tr>
</tbody>
</table>
</div>
Counter.PropTypes={
    numberAttending: PropTypes.number,
    numberUnconfirmed: PropTypes.number,
    totalProductListed: PropTypes.number
};

export default Counter;