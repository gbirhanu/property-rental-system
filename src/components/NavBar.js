import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faHome,
  faTruckMonster,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <NavWrapper className="navbar  navbar-expand-sm navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
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
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            owner
          </ButtonContainer>
        </Link>
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
