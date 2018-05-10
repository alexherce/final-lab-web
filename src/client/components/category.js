import React from "react";


class Category extends React.Component {
  render() {
    return (
      <div>
        <li className="p-t-4" data-component="category">
          <a href={'/products/category/' + this.props.category.id} className="s-text13 active1">
            {this.props.category.name}
          </a>
        </li>
      </div>
    );
  }
}

export default Category;
