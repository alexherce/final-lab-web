import React from "react";

class ProductsItem extends React.Component {
  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
        <div className="block2">
          <div className="block2-img wrap-pic-w of-hidden pos-relative">
            <a href={'/products/detail/' + this.props.product.id}><img src={this.props.product.image} alt="IMG-PRODUCT"/></a>
          </div>

          <div className="block2-txt p-t-20">
            <a href={'/products/detail/' + this.props.product.id} className="block2-name dis-block s-text3 p-b-5">
              {this.props.product.name}
            </a>

            <span className="block2-price m-text6 p-r-5">
              ${this.props.product.price} {this.props.product.currency}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsItem;
