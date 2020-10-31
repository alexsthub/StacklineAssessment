import React from "react";
import Axis from "./axis";

const XYAxis = ({ xScale, height }) => {
  const xSettings = {
    scale: xScale,
    orient: "bottom",
    transform: `translate(0, ${height})`,
  };
  return (
    <g className="axis-group">
      <Axis {...xSettings} />
    </g>
  );
};

export default XYAxis;
