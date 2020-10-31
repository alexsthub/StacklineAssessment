import React, { Component } from "react";
import "./ProductDetails.css";
import "../../App.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHome,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

import { isEmpty } from "../../helpers/helpers";

export default class ProductDetails extends Component {
  renderBackArrow = () => {
    return (
      <Link className="link-clear" to="/">
        <div className="back-arr">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </Link>
    );
  };

  renderProductTags = () => {
    const { item } = this.props;
    const tags = !isEmpty(item)
      ? item.tags.map((tag) => {
          return (
            <div key={tag} className="product-tag">
              {tag}
            </div>
          );
        })
      : null;
    return <div className="tag-grid">{tags}</div>;
  };

  render() {
    return (
      <div className="product-details">
        {this.renderBackArrow()}

        <div className="pd-content">
          <img
            className="pd-img"
            src={this.props.item.image}
            alt={this.props.item.title}
          />
          <h3>{this.props.item.title}</h3>
          <h4>{this.props.item.subtitle}</h4>

          {this.renderProductTags()}

          <nav className="pd-nav">
            <div className="flex fac">
              <FontAwesomeIcon icon={faHome} className="pd-icon" />
              <p>OVERVIEW</p>
            </div>
            <div className="flex fac pd-nav-select">
              <FontAwesomeIcon icon={faChartBar} className="pd-icon" />
              <p>SALES</p>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
