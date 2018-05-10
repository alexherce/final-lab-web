import React from "react";
import OrderList from "./Order_list";

class Orders extends React.Component {
  render() {
    return (
      <section className="cart bgwhite p-t-70 p-b-100">
        <div className="container">
          <h2>Orders</h2>
          <OrderList/>

          <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
            <h5 className="m-text20 p-b-24">Order Details</h5>
            <div className="flex-w flex-sb-m p-b-12">
              <span className="s-text18 w-size19 w-full-sm">Address</span>
              <span className="m-text21 w-size20 w-full-sm">La casa de la fregada 187</span>
            </div>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">Total:</span>
              <span className="m-text21 w-size20 w-full-sm">$39.00</span>
            </div>
          </div>
        </div>
      </section>


    );
  }
}

export default Orders;
