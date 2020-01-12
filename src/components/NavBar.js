import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTruckMonster,
  faPlusCircle,
  faLock,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ResourceConsumer } from "../Resource";
class NavBar extends Component {
  render() {
    return (
      <ResourceConsumer>
        {value => {
          const { logOut } = value;

          return (
            <NavWrapper className="navbar  navbar-expand-sm navbar-dark px-sm-5">
              <Link className="nav-link" to="/ethiorental/registeration">
                <span className="mr-2">
                  <FontAwesomeIcon
                    color="var(--mainYellow)"
                    icon={faPlusCircle}
                  />
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
              <ButtonContainer className="ml-auto" onClick={() => logOut()}>
                <span className="mr-2">
                  <FontAwesomeIcon
                    color="var(--mainYellow)"
                    icon={faSignOutAlt}
                  />
                </span>
                Logout
              </ButtonContainer>
            </NavWrapper>
          );
        }}
      </ResourceConsumer>
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
