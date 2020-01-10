import React, { Component } from "react";
import "./sign.css";
import cogoToast from "cogo-toast";
import App from "../App";

export default class SignIn extends Component {
  state = {
    userId: "",
    userName: "trevor",
    userPhone: "",
    userStatus: "",
    userPassword: "123456"
  };
  handleLogin = event => {
    event.preventDefault();

    const { userName, userPassword } = this.state;
    var data = new FormData();
    data.append("userName", userName);
    data.append("userPassword", userPassword);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://michutaxi.com/android_connect/login.php";

    fetch(proxyurl + url, {
      method: "POST",
      body: data
    })
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then(data => {
        this.setState({
          userId: data.result[0].userId,
          userName: data.result[0].userName,
          userPhone: data.result[0].userPhone,
          userStatus: data.result[0].userStatus
        });
        cogoToast.success("Successfully Registered");
      })
      .catch(error => {
        cogoToast.error("Something went wrong" + error);
      });
  };
  render() {
    if (!this.state.userId) {
      return (
        <div className="login-main-section">
          <form className="form-section-sign">
            <div className="inp-group-section">
              <div className="sign-title-keo">Sign in here</div>
              <input
                type="text"
                placeholder="Enter your user name"
                onChange={e => this.setState({ userName: e.target.value })}
              />
              <input
                type="password"
                placeholder="**********"
                onChange={e => this.setState({ userPassword: e.target.value })}
              />
              <input
                type="submit"
                onClick={e => this.handleLogin(e)}
                value="SignIn"
              />
            </div>
          </form>
        </div>
      );
    } else {
      return <App />;
    }
  }
}
