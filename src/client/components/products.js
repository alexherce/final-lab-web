import React from "react";
import ProductsHolder from "./products_holder";
import Category from "./category";



class CartHeaderItem extends React.Component {
  render() {
    return (
      <div>
        <section className="bgwhite p-t-55 p-b-65">
      		<div className="container">
      			<div className="row">
      				<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
      					<div className="leftbar p-r-20 p-r-0-sm">
      						<h4 className="m-text14 p-b-7">
      							Categories
      						</h4>

      						<ul className="p-b-54">
      							<Category/>
      						</ul>

      						<h4 className="m-text14 p-b-32">
      							Filters
      						</h4>

      						<div className="search-product pos-relative bo4 of-hidden" >
      							<input className="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..."/>

      							<button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
      								<i className="fs-12 fa fa-search" aria-hidden="true"></i>
      							</button>
      						</div>
      					</div>
      				</div>
              <ProductsHolder/>
      			</div>
      		</div>
        </section>
      </div>
    );
  }
}

export default CartHeaderItem;
