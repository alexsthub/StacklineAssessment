import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 20,
          backgroundColor: "white",
          fontWeight: "bold",
          boxShadow: "rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem",
        }}
      >
        Stackline
      </div>
    );
  }
}
