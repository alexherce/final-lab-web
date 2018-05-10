import React from "react";


class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.ShowAlert = this.ShowAlert.bind(this);
    this.state = {
      showAlert: false,
      isError: false,
      message: ''
    }
  }

  handleErrors(res) {
    if (res.error) {
      throw Error(res.error);
    }
    return res;
  }

  componentDidMount() {
    fetch('/api/session/get')
    .then(res => res.json())
    .then((res) => {
      if (res.userId) {
        this.props.history.push("/");
      }
    });
  }

  ShowAlert(props) {
    if(!props.error){
      return (<div className="alert alert-success"><strong>Success!</strong> {props.message}</div>);
    } else {
      return (<div className="alert alert-danger"><strong>Oh No!</strong> {props.message}</div>);
    }
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    fetch('/api/users/login', {
      method: 'post',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        "email": event.target.form_email.value,
        "password": event.target.form_password.value
      })
    })
    .then(res => res.json())
    .then(this.handleErrors)
    .then((res) => {
      this.setState({
        showAlert: true,
        isError: false,
        message: 'Welcome back ' + res.name + '! Redirecting...'
      });
      this.props.history.push("/");
    })
    .catch((error) => {
      this.setState({
        showAlert: true,
        isError: true,
        message: error.toString()
      });
    });
  };

  handleSignupSubmit(event) {
    event.preventDefault();
    if (event.target.signup_password1.value != event.target.signup_password2.value) return this.setState({ showAlert: true, isError: true, message: 'Passwords are not the same.' });

    fetch('/api/users/signup', {
      method: 'post',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        "name": event.target.signup_name.value,
        "last_name": event.target.signup_lastname.value,
        "email": event.target.signup_email.value,
        "password": event.target.signup_password1.value
      })
    })
    .then(res => res.json())
    .then(this.handleErrors)
    .then((res) => {
      this.setState({
        showAlert: true,
        isError: false,
        message: 'Thanks for signing up! You can now login.'
      });
    })
    .catch((error) => {
      this.setState({
        showAlert: true,
        isError: true,
        message: error.toString()
      });
    });
  };

  render() {
    return (
      <div className="top-content">
        <div className="inner-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text">
                <h1> Login or Register </h1>

                {this.state.showAlert &&
                  <this.ShowAlert error={this.state.isError} message={this.state.message} />
                }
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <div className="form-box">
                  <div className="form-top">
                    <div className="form-top-left">
                      <h3>Existing Users</h3>
                    </div>
                  </div>
                  <div className="form-bottom">
                    <form role="form" className="login-form" onSubmit={this.handleLoginSubmit}>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="form_email">Username</label>
                        <input type="text" name="form_email" placeholder="Username..." className="form-username form-control" id="form_email" required/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="form_password">Password</label>
                        <input type="password" name="form_password" placeholder="Password..." className="form-password form-control" id="form_password" required/>
                      </div>
                      <button type="submit" className="btn">Log in!</button>
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
                      <h3>New Users</h3>
                    </div>
                  </div>
                  <div className="form-bottom">
                    <form role="form" className="registration-form" onSubmit={this.handleSignupSubmit}>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="signup_name">First name</label>
                        <input type="text" name="signup_name" placeholder="First name..." className="form-first-name form-control" id="signup_name" required/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="signup_lastname">Last name</label>
                        <input type="text" name="signup_lastname" placeholder="Last name..." className="form-last-name form-control" id="signup_lastname" required/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="signup_email">Email</label>
                        <input type="text" name="signup_email" placeholder="Email..." className="form-email form-control" id="signup_email" required/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="signup_password1">Password</label>
                        <input type="password" name="signup_password1" placeholder="Password..." className="form-email form-control" id="signup_password1" required/>
                      </div>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="signup_password2">Repeat Password</label>
                        <input type="password" name="signup_password2" placeholder="Repeat Password..." className="form-email form-control" id="signup_password2" required/>
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
