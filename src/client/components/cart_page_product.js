import React from "react";

class Cart_page_product extends React.Component {
  render() {
    return (
      <tr className="table-row" data-component="cart_page_product">
        <td className="column-1">
          <div className="cart-img-product b-rad-4 o-f-hidden">
            <img src={this.props.product.image} alt="IMG-PRODUCT" />
          </div>
        </td>
        <td className="column-2">{this.props.product.name}</td>
        <td className="column-3">${this.props.product.price}</td>
        <td className="column-4">
          <form onSubmit={this.props.handleUpdate}>
            <div className="flex-w bo5 of-hidden w-size17">
              <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                #
              </button>
              <input
                className="size8 m-text18 t-center num-product"
                type="number"
                name="prod_quantity"
                id="prod_quantity"
                defaultValue={this.props.product.quantity}
              />
              <input type="hidden" name="prod_id" id="prod_id" defaultValue={this.props.product.id} />
              <button type="submit" className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                <i className="fs-12 fa fa-sync" aria-hidden="true" />
              </button>
            </div>
          </form>
        </td>
        <td className="column-5">${(this.props.product.price*this.props.product.quantity).toFixed(2)}</td>
      </tr>
    );
  }
}

export default Cart_page_product;
