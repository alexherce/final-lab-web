import React from "react";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '',
        price: '',
        description: '',
        currency: '',
        image: ''
      },
      category: {
        name: '',
        id: ''
      }
    };
  }

  componentDidMount() {
    if(this.props.match.params.prodId) {
      fetch('/api/products/' + this.props.match.params.prodId)
      .then(res => res.json())
      .then((res) => {
        if (res.error) return false;
        document.title = res.name + " | marXel";
        this.setState({
          product: res
        });

        fetch('/api/categories/' + res.category)
        .then(res => res.json())
        .then((res) => {
          if (res.error) return false;
          this.setState({
            category: res
          });
        })
      })
    }
  }

  render() {
    return (
      <div className="container bgwhite p-t-35 p-b-80">
        <div className="flex-w flex-sb">
          <div className="w-size13 p-t-30 respon5">
            <div className="wrap-slick3 flex-sb flex-w">
              <div className="wrap-slick3-dots"></div>
              <div className="slick3">
                <div className="wrap-pic-w">
                  <img src={this.state.product.image} alt="IMG-PRODUCT"/>
                </div>
            </div>
          </div>
        </div>

        <div className="w-size14 p-t-30 respon5">
          <h4 className="product-detail-name m-text16 p-b-13">
            {this.state.product.name}
          </h4>

          <span className="m-text17">
            ${this.state.product.price} {this.state.product.currency}
          </span>

          <p className="s-text8 p-t-10">
  					{this.state.product.description}
  				</p>

          <div className="p-t-33 p-b-60">

            <div className="flex-r-m flex-w p-t-10">
              <div className="w-size16 flex-m flex-w">
                <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">

                  <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                    <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
                  </button>

                  <input className="size8 m-text18 t-center num-product" type="number" name="num-product" defaultValue="1"/>

                  <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                    <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                  <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-b-45">
            <span className="s-text8">Category: {this.state.category.name}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
}

export default ProductDetail;
