import React from "react";
import OrderProduct from "./Order_page_product";

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        id: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        country: '',
        postal_code: '',
        paypal_email: '',
        paypal_id: '',
        status: '',
        total: ''
      },
      products: [],
      showAlert: false,
      isError: false,
      message: ''
    }
  }

  handleErrors(res) {
    if (res.error) {
      throw Error(res.error);
    }
    return res;
  }

  ShowAlert(props) {
    if(!props.error){
      return (<div className="alert alert-success"><strong>Success!</strong> {props.message}</div>);
    } else {
      return (<div className="alert alert-danger"><strong>Oh No!</strong> {props.message}</div>);
    }
  }

  componentDidMount() {
    if(this.props.match.params.ordId) {
      document.title = "Order " + this.props.match.params.ordId + " | marXel";
      fetch('/api/orders/' + this.props.match.params.ordId)
      .then(res => res.json())
      .then(this.handleErrors)
      .then((res) => {
        this.setState({
          order: res.order,
          products: res.products
        });
      })
      .catch((error) => {
        this.setState({
          showAlert: true,
          isError: true,
          message: error.toString()
        });
      });
    }
  }

  render() {
    return (
      <section className="cart bgwhite p-t-70 p-b-100">
        <div className="container">
          {this.state.showAlert &&
            <this.ShowAlert error={this.state.isError} message={this.state.message} />
          }

          <div className="bo9 w-size10 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
            <h5 className="m-text20 p-b-24">Order {this.state.order.id}</h5>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">PayPal Transaction ID:</span>
              <span className="m-text21 w-size20 w-full-sm">{this.state.order.paypal_id}</span>
            </div>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">PayPal Account:</span>
              <span className="m-text21 w-size20 w-full-sm">{this.state.order.paypal_email}</span>
            </div>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">Total:</span>
              <span className="m-text21 w-size20 w-full-sm">$ {parseFloat(this.state.order.total).toFixed(2)}</span>
            </div>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">Address:</span>
              <span className="m-text21 w-size20 w-full-sm">{this.state.order.address_1}</span>
            </div>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">Address 2:</span>
              <span className="m-text21 w-size20 w-full-sm">{this.state.order.address_2}</span>
            </div>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">City:</span>
              <span className="m-text21 w-size20 w-full-sm">{this.state.order.city}</span>
            </div>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">State:</span>
              <span className="m-text21 w-size20 w-full-sm">{this.state.order.state}</span>
            </div>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">Country:</span>
              <span className="m-text21 w-size20 w-full-sm">{this.state.order.country}</span>
            </div>
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">Postal Code:</span>
              <span className="m-text21 w-size20 w-full-sm">{this.state.order.postal_code}</span>
            </div>
          </div>


          <div className="container-table-cart pos-relative">
            <div className="wrap-table-shopping-cart bgwhite">
              <table className="table-shopping-cart">
                <tbody>
                  <tr className="table-head">
                    <th className="column-1">Image</th>
                    <th className="column-2">Name</th>
                    <th className="column-3">Price</th>
                    <th className="column-4">Quantity</th>
                    <th className="column-5">Total</th>
                  </tr>
                  {this.state.products.map((product:string,i:number)=><OrderProduct product={product} key={i}/>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OrderDetail;
