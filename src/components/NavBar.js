import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTruckMonster,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
class NavBar extends Component {
  render() {
    console.log(this.props.userInfo);
    return (
      <NavWrapper className="navbar  navbar-expand-sm navbar-dark px-sm-5">
        <Link
          className="nav-link"
          to={{
            pathname: "/ethiorental/registeration",
            state: {
              userInfo: this.props.userInfo
            }
          }}
        >
          <span className="mr-2">
            <FontAwesomeIcon color="var(--mainYellow)" icon={faPlusCircle} />
          </span>
          Add Property
        </Link>
        <Link className="nav-link" to="/ethiorental/">
          <span className="mr-2">
            <FontAwesomeIcon color="var(--mainYellow)" icon={faHome} />
          </span>{" "}
          House
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link className="nav-link" to="/ethiorental/machinery">
              <span className="mr-2">
                <FontAwesomeIcon
                  color="var(--mainYellow)"
                  icon={faTruckMonster}
                />
              </span>{" "}
              Machinery
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default NavBar;
