import React, { Component } from "react";
import "./ProductView.css";
import "../../App.css";

import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/ProductActions";

import ProductDetails from "../productdetails/ProductDetails";
import ProductGraph from "../productgraph/ProductGraph";
import ProductSales from "../productsales/ProductSales";

class ProductView extends Component {
  componentDidMount = () => {
    this.props.fetchProduct(this.props.match.params.id);
  };

  render() {
    if (!this.props.item) {
      return <Redirect to="/" />;
    }

    return (
      <div className="product-view">
        <ProductDetails item={this.props.item} />
        <div className="product-right">
          <ProductGraph item={this.props.item} />
          <ProductSales item={this.props.item} />
        </div>
      </div>
    );
  }
}

ProductView.propTypes = {
  item: PropTypes.object,
  fetchProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.items.item,
});

export default connect(mapStateToProps, { fetchProduct })(ProductView);
