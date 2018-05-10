import React from "react";

class Order_page_product extends React.Component {
  render() {
    return (
      <tr className="table-row" data-component="cart_page_product">
          <td className="column-1">
            <div className="cart-img-product b-rad-4 o-f-hidden">
              <img src={this.props.product.image} alt="IMG-PRODUCT" />
            </div>
          </td>
          <td className="column-2">{this.props.product.name}</td>
          <td className="column-3">{this.props.product.unit_price}</td>
          <td className="column-4">{this.props.product.quantity}</td>
          <td className="column-5">{this.props.product.price}</td>
      </tr>
    );
  }
}

export default Order_page_product;
