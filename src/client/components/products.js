import React from "react";
import update from 'immutability-helper';

import ProductsItem from "./products_item";
import Category from "./category";

const defaultState = {
  products: [],
  categories: []
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: []
    };
  }

  componentDidMount() {
    document.title = "Products | marXel";

    let apiUrl = '/api/products';
    if(this.props.match.params.catId) {
      apiUrl = '/api/products/category/' + this.props.match.params.catId;
    }

    fetch(apiUrl)
    .then(res => res.json())
    .then((res) => {
      if (!res.products || res.error) return false;
      if (res.products.length > 0) {
        this.setState({
          products: update(this.state.products, {$set: res.products})
        });
      }
    })

    fetch('/api/categories')
    .then(res => res.json())
    .then((res) => {
      if (res.length < 1) return false;
      if (res.length > 0) {
        this.setState({
          categories: update(this.state.categories, {$set: res})
        });
      }
    })
  }

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
      							{this.state.categories.map((category:string,i:number)=><Category category={category} key={i}/>)}
      						</ul>
      					</div>
      				</div>
              <div className="col-sm-6 col-md-8 col-lg-9 p-b-50" data-component="products_holder">
                <div className="row">
                  {this.state.products.map((product:string,i:number)=><ProductsItem product={product} key={i}/>)}
                </div>
              </div>
      			</div>
      		</div>
        </section>
      </div>
    );
  }
}

export default Products;
