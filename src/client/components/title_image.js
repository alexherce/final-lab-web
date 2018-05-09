import React from "react";

class title_image extends React.Component {
  render() {
    return (
      <section
        className="bg-title-page p-t-40 p-b-50 flex-col-c-m"
        style={{
          backgroundImage: "url(public/images/heading-pages-01.jpg)"
        }}
      >
        <h2 className="l-text2 t-center">Cart</h2>
      </section>
    );
  }
}

export default title_image;
