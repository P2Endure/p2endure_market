import React from "react";
import PropTypes from "prop-types";

const SelectedFilter = props =>
  <div>
    <h2>Selected</h2>
    <label>
      <input
        type="checkbox"
        onChange={props.toggleFilter}
        checked={props.isFiltered}
      />{" "}
      Hide those who don't selected
    </label>
  </div>;

SelectedFilter.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
};

export default SelectedFilter;
