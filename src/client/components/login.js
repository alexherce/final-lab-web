import React from "react";


class LogIn extends React.Component {
  render() {
    return (
      <div className="top-content">
        <div className="inner-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text">
                <h1> Login &amp; Register </h1>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-5">
                <div className="form-box">
                  <div className="form-top">
                    <div className="form-top-left">
                      <h3>Login to our site</h3>
                      <p>Enter username and password to log on:</p>
                    </div>
                    <div className="form-top-right">
                      <i className="fa fa-key"></i>
                    </div>
                  </div>
                  <div className="form-bottom">
                    <form role="form" action="" method="post" className="login-form">
                      <div className="form-group">
                        <label className="sr-only" for="form-username">Username</label>
                        <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username"/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="form-password">Password</label>
                        <input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password"/>
                      </div>
                      <button type="submit" className="btn">Sign in!</button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-sm-1 middle-border"></div>
              <div className="col-sm-1"></div>

              <div className="col-sm-5">

                <div className="form-box">
                  <div className="form-top">
                    <div className="form-top-left">
                      <h3>Sign up now</h3>
                      <p>Fill in the form below to get instant access:</p>
                    </div>
                    <div className="form-top-right">
                      <i className="fa fa-pencil"></i>
                    </div>
                  </div>
                  <div className="form-bottom">
                    <form role="form" action="" method="post" className="registration-form">
                      <div className="form-group">
                        <label className="sr-only" for="form-first-name">First name</label>
                        <input type="text" name="form-first-name" placeholder="First name..." className="form-first-name form-control" id="form-first-name"/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="form-last-name">Last name</label>
                        <input type="text" name="form-last-name" placeholder="Last name..." className="form-last-name form-control" id="form-last-name"/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="form-email">Email</label>
                        <input type="text" name="form-email" placeholder="Email..." className="form-email form-control" id="form-email"/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="form-email">Password</label>
                        <input type="text" name="form-email" placeholder="Password..." className="form-email form-control" id="form-email"/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="form-email">Repeat Password</label>
                        <input type="text" name="form-email" placeholder="Repeat Password..." className="form-email form-control" id="form-email"/>
                      </div>
                      <button type="submit" className="btn">Sign me up!</button>
                    </form>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default LogIn;
