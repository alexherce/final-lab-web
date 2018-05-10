import React from "react";

class ProductsItem extends React.Component {
  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
        <div className="block2">
          <div className="block2-img wrap-pic-w of-hidden pos-relative">
            <img src="/public/images/grass2.jpg" alt="IMG-PRODUCT"/>

            <div className="block2-overlay trans-0-4">
              <div className="block2-btn-addcart w-size1 trans-0-4">
                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="block2-txt p-t-20">
            <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
              Herschel supply co 25l
            </a>

            <span className="block2-price m-text6 p-r-5">
              $75.00
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsItem;
