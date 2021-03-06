import React, { Component } from "react";
import "./ProductGraph.css";

import XYAxis from "./xy-axis";
import Line from "./Line";

import { connect } from "react-redux";
import * as d3 from "d3";

import { isEmpty } from "../../helpers/helpers";

class ProductGraph extends Component {
  constructor(props) {
    super(props);
    this.svgContainer = React.createRef();
    this.state = { svgWidth: null, loading: true };
  }

  componentDidMount = () => {
    const width = this.svgContainer.current.offsetWidth;
    if (width === 0) {
      setTimeout(() => {
        this.handleResize();
      }, 50);
    } else {
      this.setState({ svgWidth: width, loading: false });
    }
    window.addEventListener("resize", this.handleResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize);
  };

  handleResize = () => {
    const width = this.svgContainer.current.offsetWidth;
    this.setState({ svgWidth: width, loading: false });
  };

  renderSvg = () => {
    const data = this.props.item.sales;

    const margins = {
      top: 50,
      right: 25,
      bottom: 25,
      left: 25,
    };
    const width = this.state.svgWidth - margins.left - margins.right;
    const height = 500 - margins.top - margins.bottom;
    const ticks = 5;

    const formatDate = d3.timeParse("%Y-%m-%d");
    data.forEach((dataPoint) => {
      dataPoint.formattedDate = formatDate(dataPoint.weekEnding);
    });

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.formattedDate))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.retailSales))
      .range([height, 0])
      .nice();

    const lineGenerator = d3
      .line()
      .x((d) => xScale(d.formattedDate))
      .y((d) => yScale(d.retailSales))
      .curve(d3.curveMonotoneX);

    return (
      <svg
        className="lineChartSvg"
        width={width + margins.left + margins.right}
        height={height + margins.top + margins.bottom}
      >
        <g transform={`translate(${margins.left}, ${margins.top})`}>
          <XYAxis {...{ xScale, height, ticks }} />

          <Line
            data={data}
            xScale={xScale}
            yScale={yScale}
            lineGenerator={lineGenerator}
            width={width}
            height={height}
            lineColor={"lightblue"}
          />
        </g>
      </svg>
    );
  };

  render() {
    let svg;
    if (!isEmpty(this.props.item) && !this.state.loading) {
      svg = this.renderSvg();
    }

    return (
      <div className="product-graph" ref={this.svgContainer}>
        <div className="pg-label">Retail Sales</div>
        {svg}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.items.item,
});

export default connect(mapStateToProps, null)(ProductGraph);
