import React from "react";

class Order_page_product extends React.Component {
  render() {
    return (
      <tr className="table-row" data-component="cart_page_product">
          <td className="column-1">
            <div className="cart-img-product b-rad-4 o-f-hidden">
              <img src="public/images/item-10.jpg" alt="IMG-PRODUCT" />
            </div>
          </td>
          <td className="column-2">Men Tshirt</td>
          <td className="column-3">$36.00</td>
          <td className="column-4">$36.00</td>
          <td className="column-5">$36.00</td>
      </tr>
    );
  }
}

export default Order_page_product;
