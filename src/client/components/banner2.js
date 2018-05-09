import React from "react";

class Banner2 extends React.Component {
  render() {
    return (
      <section className="banner2 bg5 p-t-55 p-b-55">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
              <div className="hov-img-zoom pos-relative">
                <img src="public/images/banner-08.jpg" alt="IMG-BANNER" />
                <div className="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15">
                  <span className="m-text9 p-t-45 fs-20-sm">The Beauty</span>
                  <h3 className="l-text1 fs-35-sm">Lookbook</h3>
                  <a href="#" className="s-text4 hov2 p-t-20 ">
                    View Collection
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
              <div className="bgwhite hov-img-zoom pos-relative p-b-20per-ssm">
                <img src="public/images/shop-item-09.jpg" alt="IMG-BANNER" />
                <div className="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20">
                  <div className="t-center">
                    <a
                      href="product-detail.html"
                      className="dis-block s-text3 p-b-5"
                    >
                      Gafas sol Hawkers one
                    </a>
                    <span className="block2-oldprice m-text7 p-r-5">
                      $29.50
                    </span>
                    <span className="block2-newprice m-text8">$15.90</span>
                  </div>
                  <div className="flex-c-m p-t-44 p-t-30-xl">
                    <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                      <span className="m-text10 p-b-1 days">69</span>
                      <span className="s-text5">days</span>
                    </div>
                    <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                      <span className="m-text10 p-b-1 hours">04</span>
                      <span className="s-text5">hrs</span>
                    </div>
                    <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                      <span className="m-text10 p-b-1 minutes">32</span>
                      <span className="s-text5">mins</span>
                    </div>
                    <div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                      <span className="m-text10 p-b-1 seconds">05</span>
                      <span className="s-text5">secs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner2;
