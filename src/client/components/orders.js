import React from "react";
import OrderItem from "./order_list_item";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
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
    document.title = "Orders | marXel";

    fetch('/api/orders')
    .then(res => res.json())
    .then(this.handleErrors)
    .then((res) => {
      this.setState({
        orders: res.orders
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

  render() {
    return (
      <section className="cart bgwhite p-t-70 p-b-100">
        <div className="container">
          <h2>Orders</h2>

          {this.state.showAlert &&
            <this.ShowAlert error={this.state.isError} message={this.state.message} />
          }
          <div className="container-table-cart pos-relative">
            <div className="wrap-table-shopping-cart bgwhite">
              <table className="table-shopping-cart">
                <tbody>
                  <tr className="table-head">
                    <th className="column-1">Order ID</th>
                    <th className="column-2">Shipping Address</th>
                    <th className="column-3">Country</th>
                    <th className="column-4">Transaction ID</th>
                    <th className="column-5">Total</th>
                  </tr>
                  {this.state.orders.map((order:string,i:number)=><OrderItem order={order} key={i}/>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Orders;
