import React, { Component } from "react";

import ProductDetails from "../productdetails/ProductDetails";
import ProductGraph from "../productgraph/ProductGraph";
import ProdutSales from "../productsales/ProductSales";

export default class ProductView extends Component {
  render() {
    const id = this.props.match.params.id;
    console.log(id);

    return (
      <div
        style={{ marginTop: 50, padding: 20, display: "flex", height: "100%" }}
      >
        <ProductDetails />
        <div style={{ display: "flex", flex: 1 }}>There</div>
      </div>
    );
  }
}
