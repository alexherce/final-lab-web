import React from "react";

class OrderListItem extends React.Component {
  render() {
    return (
      <tr className="table-row" data-component="cart_page_product">
          <td className="column-1"><a href={'/orders/' + this.props.order.id}>{this.props.order.id}</a></td>
          <td className="column-2">{this.props.order.postal_code} {this.props.order.city}, {this.props.order.state}</td>
          <td className="column-3">{this.props.order.country}</td>
          <td className="column-4">{this.props.order.paypal_id}</td>
          <td className="column-5">$ {parseFloat(this.props.order.total).toFixed(2)}</td>
      </tr>
    );
  }
}

export default OrderListItem;
