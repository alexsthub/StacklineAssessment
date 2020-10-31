import React, { Component } from "react";
import "./ProductGrid.css";
import "../../App.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/ProductActions";
import { Link } from "react-router-dom";

class ProductGrid extends Component {
  componentDidMount = () => {
    this.props.fetchProducts();
  };

  renderProducts = () => {
    const items = this.props.items.map((item) => {
      return (
        <Link key={item.id} to={`/product/${item.id}`} className="link-clear">
          <div className="card">
            <div className="card-content">
              <img className="card-image" src={item.image} alt={item.title} />
              <p className="card-title">{item.title}</p>
              <p className="card-brand">{item.brand}</p>
            </div>
          </div>
        </Link>
      );
    });

    return <div className="product-grid">{items}</div>;
  };

  render() {
    const productGrid = this.renderProducts();

    return (
      <div style={{ padding: 20 }}>
        <h2>Products</h2>
        {productGrid}
      </div>
    );
  }
}

ProductGrid.propTypes = {
  items: PropTypes.array.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps, { fetchProducts })(ProductGrid);
