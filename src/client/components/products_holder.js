import React from "react";
import ProductsItem from "./products_item";


class ProductsHolder extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-md-8 col-lg-9 p-b-50" data-component="products_holder">
        <div className="row">
          <ProductsItem/>
          <ProductsItem/>
          <ProductsItem/>
          <ProductsItem/>
          <ProductsItem/>
          <ProductsItem/>
          <ProductsItem/>
          <ProductsItem/>
          <ProductsItem/>
        </div>
      </div>
    );
  }
}

export default ProductsHolder;
