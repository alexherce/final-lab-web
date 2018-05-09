import React from "react";
import ItemSlick from "./item_slick";

class WrapSlick extends React.Component {
  render() {
    return (
      <div className="wrap-slick2">
        <div className="slick2">
          <ItemSlick />
        </div>
      </div>
    );
  }
}

export default WrapSlick;
