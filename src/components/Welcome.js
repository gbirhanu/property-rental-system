import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

import "./Welcome.css";
import cogoToast from "cogo-toast";
import App from "../App";
import {
  faHouseDamage,
  faTruck,
  faCar
} from "@fortawesome/free-solid-svg-icons";
import { ResourceConsumer } from "../Resource";

export default class Welcome extends Component {
  state = {
    class: "main-welcome-container",
    userId: "6",
    userName: "trevor",
    userPhone: "09100000",
    userStatus: 0,
    userPassword: "",
    isLoggedIn: 0,
    callNow: false
  };
  addRighTransition = () => {
    this.setState({
      class: "main-welcome-container"
    });
  };
  removeRighTransition = () => {
    this.setState({
      class: "main-welcome-container right-panel-active"
    });
  };
  render() {
    return (
      <ResourceConsumer>
        {value => {
          const { hangleUserRegistration, handleLogin, userId } = value;
          if (!userId) {
            return (
              <div className="welcome-body">
                <ReactTooltip />
                <div className={this.state.class}>
                  <div className="form-container sign-up-container">
                    <form action="#">
                      <h1 className="welcome-h1">Sign UP</h1>
                      <div className="social-container">
                        <a
                          href="#"
                          className="social welcome-a"
                          data-tip="This app helps you to manage your house property"
                        >
                          <FontAwesomeIcon icon={faHouseDamage} />
                        </a>
                        <a
                          href="#"
                          className="social welcome-a"
                          data-tip="This app helps you to manage your machinery property"
                        >
                          <FontAwesomeIcon icon={faTruck} />
                        </a>
                        <a
                          href="#"
                          className="social welcome-a"
                          data-tip="This app helps you to manage your car property"
                        >
                          <FontAwesomeIcon icon={faCar} />
                        </a>
                      </div>
                      <span className="welcome-span">
                        Signup to manage your home, machinery and Others
                      </span>
                      <input
                        type="text"
                        placeholder="Name"
                        onChange={e =>
                          this.setState({ userName: e.target.value })
                        }
                      />
                      <input
                        type="telephone"
                        placeholder="Phone"
                        onChange={e =>
                          this.setState({ userPhone: e.target.value })
                        }
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={e =>
                          this.setState({ userPassword: e.target.value })
                        }
                      />
                      <button
                        className="welcome-btn"
                        onClick={event =>
                          hangleUserRegistration(
                            event,
                            this.state.userName,
                            this.state.userPhone,
                            this.state.userPassword,
                            this.state.isLoggedIn
                          )
                        }
                      >
                        Sign Up
                      </button>
                    </form>
                  </div>
                  <div className="form-container sign-in-container">
                    <form action="#">
                      <h1>Sign in</h1>
                      <div className="social-container">
                        <a
                          href="#"
                          className="social welcome-a"
                          data-tip="This app helps you to manage your house property"
                        >
                          <FontAwesomeIcon icon={faHouseDamage} />
                        </a>
                        <a
                          href="#"
                          className="social welcome-a"
                          data-tip="This app helps you to manage your machinery property"
                        >
                          <FontAwesomeIcon icon={faTruck} />
                        </a>
                        <a
                          href="#"
                          className="social welcome-a"
                          data-tip="This app helps you to manage your car property"
                        >
                          <FontAwesomeIcon icon={faCar} />
                        </a>
                      </div>
                      <span className="welcome-span">
                        Here manage your Property
                      </span>
                      <input
                        type="text"
                        placeholder="User Name"
                        onChange={e =>
                          this.setState({ userName: e.target.value })
                        }
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={e =>
                          this.setState({ userPassword: e.target.value })
                        }
                      />
                      <a href="#">Forgot your password?</a>
                      <button
                        className="welcome-btn"
                        onClick={event =>
                          handleLogin(
                            event,
                            this.state.userName,
                            this.state.userPassword
                          )
                        }
                      >
                        Sign In
                      </button>
                    </form>
                  </div>
                  <div className="overlay-container">
                    <div className="overlay">
                      <div className="overlay-panel overlay-left">
                        <h1>Welcome back to Ethio Rental!</h1>
                        <p className="welcome-p">
                          Do you have account? please Signin with your
                          credentials
                        </p>
                        <button
                          className="ghost welcome-btn"
                          id="signIn"
                          onClick={this.addRighTransition}
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="overlay-panel overlay-right">
                        <h1>Welcome to Ethio Rental!</h1>
                        <p>Don't have account? please sign up here</p>
                        <button
                          className="ghost  welcome-btn"
                          id="signUp"
                          onClick={this.removeRighTransition}
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <App
                userinfo={[
                  { userId: this.state.userId },
                  { userName: this.state.userName },
                  { userPhone: this.state.userPhone }
                ]}
              />
            );
          }
        }}
      </ResourceConsumer>
    );
  }
}
