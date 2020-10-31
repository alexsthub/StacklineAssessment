import React from "react";
import * as d3 from "d3";
export default class Line extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    const node = this.ref.current;
    const { data, lineGenerator } = this.props;

    const initialData = data.map((d) => ({
      name: d.name,
      value: 0,
    }));

    d3.select(node)
      .append("path")
      .datum(initialData)
      .attr("id", "line")
      .attr("stroke", this.props.lineColor)
      .attr("stroke-width", 2)
      .attr("fill", "none")
      .attr("d", lineGenerator);

    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    const { lineGenerator, data } = this.props;
    const line = d3.select("#line");
    line.datum(data).attr("d", lineGenerator);
  }
  render() {
    return <g className="line-group" ref={this.ref} />;
  }
}
