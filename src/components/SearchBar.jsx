import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SearchBar extends Component {
  render() {
    return <div />;
  }
}

SearchBar.propTypes = {};

const mapStateToProps = state => {
  console.log({ state });
};

export default connect(mapStateToProps)(SearchBar);
