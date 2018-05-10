import React, { Component } from 'react';
import Order_page_product from "./order_page_product";




class ProductList extends React.Component {
  render() {
    return (
      <div className="container-table-cart pos-relative">
        <div className="wrap-table-shopping-cart bgwhite">
          <table className="table-shopping-cart">
            <tbody>
              <tr className="table-head">
                <th className="column-1" />
                <th className="column-2">Product</th>
                <th className="column-3">Price</th>
                <th className="column-4 p-l-70">Quantity</th>
                <th className="column-5">Total</th>
              </tr>
                <Order_page_product />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
