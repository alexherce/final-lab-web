import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
        <div className="flex-w p-b-90">
          <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
            <h4 className="s-text12 p-b-30">GET IN TOUCH</h4>
            <div>
              <p className="s-text7 w-size27">
                Any questions? Let us know in store at 14th floor, Mariano
                Escobedo 476
              </p>
              <div className="flex-m p-t-30">
                <a href="#" className="fs-18 color1 p-r-20 fab fa-facebook" />
                <a href="#" className="fs-18 color1 p-r-20 fab fa-instagram" />
                <a href="#" className="fs-18 color1 p-r-20 fab fa-pinterest-p" />
                <a
                  href="#"
                  className="fs-18 color1 p-r-20 fab fa-snapchat-ghost"
                />
                <a
                  href="#"
                  className="fs-18 color1 p-r-20 fab fa-youtube-play"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
