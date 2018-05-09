import React from "react";
import ItemSlick from "./item_slick";

class WrapSlick extends React.Component {
  render() {
    return (
      <div className="wrap-slick2">
        <div className="slick2">
          <div className="item-slick2 p-l-15 p-r-15">
            <div className="block2">
              <ItemSlick />
              <ItemSlick />
              <ItemSlick />
              <ItemSlick />
              <ItemSlick />
              <ItemSlick />
              <ItemSlick />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WrapSlick;
