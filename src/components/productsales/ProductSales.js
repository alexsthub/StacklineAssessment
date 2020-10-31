import React, { Component } from "react";
import "./ProductSales.css";

import { isEmpty, numToString, formatDate } from "../../helpers/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default class ProductSales extends Component {
  constructor(props) {
    super(props);
    this.state = { sortedColumn: { index: 0, asc: true } };
  }

  handleTableSortChange = (sortIndex) => {
    if (sortIndex === this.state.sortedColumn.index) {
      const newColumn = this.state.sortedColumn;
      newColumn.asc = !newColumn.asc;
      this.setState({ sortedColumn: newColumn });
    } else {
      this.setState({ sortedColumn: { index: sortIndex, asc: true } });
    }
  };

  renderTableRows = () => {
    const { sortedColumn } = this.state;
    const sales = this.props.item.sales;

    let x = sortedColumn.asc ? 1 : -1;
    let y = sortedColumn.asc ? -1 : 1;

    const sortKey = tableHeaders[sortedColumn.index].key;
    sales.sort((a, b) => (a[sortKey] > b[sortKey] ? x : y));

    return sales.map((sale) => {
      return (
        <tr key={sale.weekEnding}>
          <td>{formatDate(sale.weekEnding)}</td>
          <td>{numToString(sale.retailSales)}</td>
          <td>{numToString(sale.wholesaleSales)}</td>
          <td>{sale.unitsSold}</td>
          <td>{numToString(sale.retailerMargin)}</td>
        </tr>
      );
    });
  };

  render() {
    if (isEmpty(this.props.item)) return null;

    const headers = tableHeaders.map((header, index) => {
      return (
        <TableHeader
          key={header.label}
          text={header.label}
          onClick={() => this.handleTableSortChange(index)}
          sortColumn={this.state.sortedColumn.index === index}
          asc={this.state.sortedColumn.asc}
        />
      );
    });
    const tableRows = this.renderTableRows();

    return (
      <div className="product-sales">
        <table>
          <thead>
            <tr>{headers}</tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

const tableHeaders = [
  { key: "weekEnding", label: "ENDING WEEK" },
  { key: "retailSales", label: "RETAIL SALES" },
  { key: "wholesaleSales", label: "WHOLESALE SALES" },
  { key: "unitsSold", label: "UNITS SOLD" },
  { key: "retailerMargin", label: "RETAILER SALES" },
];

class TableHeader extends Component {
  render() {
    let icon = faChevronDown;
    let iconStyle = { color: "lightgray" };
    if (this.props.sortColumn) {
      icon = this.props.asc ? faChevronDown : faChevronUp;
      iconStyle.color = "black";
    }

    return (
      <th>
        <div className="table-header" onClick={this.props.onClick}>
          <p>{this.props.text}</p>
          <FontAwesomeIcon
            icon={icon}
            className="table-header-icon"
            style={iconStyle}
          />
        </div>
      </th>
    );
  }
}
