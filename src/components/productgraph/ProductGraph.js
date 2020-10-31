import React, { Component } from "react";
import "./ProductGraph.css";

import { isEmpty } from "../../helpers/helpers";

export default class ProductGraph extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // const { timeSeriesData } = this.props;
    // d3Utils.initializeChart(timeSeriesData, "monthToDate");
  }

  componentDidUpdate(prevProps) {
    // This too
  }

  componentWillUnmount() {
    // And finally this
  }

  render() {
    if (isEmpty(this.props.item)) return null;

    return (
      <div className="product-graph">
        <div className="pg-label">Retail Sales</div>
      </div>
    );
  }
}
