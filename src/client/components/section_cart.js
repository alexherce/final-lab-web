import React from "react";
import cart_page_product from "./cart_page_product";

class section_cart extends React.Component {
  render() {
    return (
      <section className="cart bgwhite p-t-70 p-b-100">
        <div className="container">
          {}
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
                  <cart_page_product />
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
            <div className="size10 trans-0-4 m-t-10 m-b-10">
              {}
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Update Cart
              </button>
            </div>
          </div>
          {}
          <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
            <h5 className="m-text20 p-b-24">Cart Totals</h5>
            {}
            <div className="flex-w flex-sb-m p-b-12">
              <span className="s-text18 w-size19 w-full-sm">Subtotal:</span>
              <span className="m-text21 w-size20 w-full-sm">$39.00</span>
            </div>
            {}
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">Total:</span>
              <span className="m-text21 w-size20 w-full-sm">$39.00</span>
            </div>
            <div className="size15 trans-0-4">
              {}
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default section_cart;
