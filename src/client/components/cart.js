import React, { Component } from 'react';
import Title_image from './title_image.js';
import CartProduct from "./cart_page_product";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.state = {
      cart: [],
      total: 0.00,
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

  getCart() {
    fetch('/api/session/cart/get')
    .then(res => res.json())
    .then(this.handleErrors)
    .then((res) => {
      document.title = "Cart | marXel";
      this.setState({
        cart: res.cart,
        total: this.getCartTotal(res.cart)
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

  componentDidMount() {
    this.getCart();
  }

  getCartTotal(cart) {
    let total = 0;
    cart.map((product:string,i:number)=> {
      total += (product.price * product.quantity).toFixed(2);
    });
    console.log(total);
    return total;
  }

  handleUpdate(event) {
    event.preventDefault();
    fetch('/api/session/cart/update', {
      method: 'post',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        "id": parseInt(event.target.prod_id.value),
        "quantity": parseInt(event.target.prod_quantity.value)
      })
    })
    .then(res => res.json())
    .then(this.handleErrors)
    .then((res) => {
      this.setState({
        cart: res.cart,
        total: parseFloat(this.getCartTotal(res.cart)).toFixed(2)
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

  handleOrder() {
    fetch('/api/orders/new', {
      method: 'post',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        "products": this.state.cart,
        "postal_code": "00000"
      })
    })
    .then(res => res.json())
    .then(this.handleErrors)
    .then((res) => {
      console.log(res);
      this.setState({
        cart: res.cart,
        total: parseFloat(this.getCartTotal(res.cart)).toFixed(2)
      });
      this.props.history.push("/orders/" + res.orderId);
    })
    .catch((error) => {
      this.setState({
        showAlert: true,
        isError: true,
        message: error.toString()
      });
    });
  }

  ShowAlert(props) {
    if(!props.error){
      return (<div className="alert alert-success"><strong>Success!</strong> {props.message}</div>);
    } else {
      return (<div className="alert alert-danger"><strong>Oh No!</strong> {props.message}</div>);
    }
  }

  render() {
    return (
      <div>
        {this.state.showAlert &&
          <this.ShowAlert error={this.state.isError} message={this.state.message} />
        }
        <section className="cart bgwhite p-t-70 p-b-100">
          <div className="container">
            <div className="container-table-cart pos-relative">
              <div className="wrap-table-shopping-cart bgwhite">
                <table className="table-shopping-cart">
                  <tbody>
                    <tr className="table-head">
                      <th className="column-1">Image</th>
                      <th className="column-2">Product</th>
                      <th className="column-3">Price</th>
                      <th className="column-4 p-l-70">Quantity</th>
                      <th className="column-5">Total</th>
                    </tr>
                    {this.state.cart.map((product:string,i:number)=><CartProduct product={product} key={i} handleUpdate={this.handleUpdate}/>)}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
              <h5 className="m-text20 p-b-24">Cart Total</h5>
              <div className="flex-w flex-sb-m p-t-26 p-b-30">
                <span className="m-text22 w-size19 w-full-sm">Total:</span>
                <span className="m-text21 w-size20 w-full-sm">$ {parseFloat(this.state.total).toFixed(2)}</span>
              </div>
              <div className="size15 trans-0-4">
                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" onClick={this.handleOrder}>
                  Checkout
                </button>

                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
