import React from "react";

class Cart_page_product extends React.Component {
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
          <td className="column-4">
            <div className="flex-w bo5 of-hidden w-size17">
              <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                <i className="fs-12 fa fa-minus" aria-hidden="true" />
              </button>
              <input
                className="size8 m-text18 t-center num-product"
                type="number"
                name="num-product1"
                defaultValue={1}
              />
              <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                <i className="fs-12 fa fa-plus" aria-hidden="true" />
              </button>
            </div>
          </td>
          <td className="column-5">$36.00</td>
      </tr>
    );
  }
}

export default Cart_page_product;
