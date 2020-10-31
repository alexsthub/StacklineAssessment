import React from "react";

import * as d3 from "d3";

class Axis extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
    const { scale, orient, ticks } = this.props;
    const node = this.ref.current;
    let axis;

    if (orient === "bottom") {
      axis = d3
        .axisBottom(scale)
        .tickSize(0)
        .tickFormat(d3.timeFormat("%b"))
        .tickPadding(5);
    }
    if (orient === "left") {
      axis = d3.axisLeft(scale).ticks(ticks);
    }
    d3.select(node)
      .style("font-size", "20px")
      .style("color", "gray")
      .style("font-weight", 100)
      .call(axis);
  }

  render() {
    const { orient, transform } = this.props;
    return (
      <g ref={this.ref} transform={transform} className={`${orient} axis`} />
    );
  }
}

export default Axis;
