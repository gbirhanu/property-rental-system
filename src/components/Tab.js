import React from "react";
import { Link } from "react-router-dom";

export default function Tab() {
  return (
    <React.Fragment>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" to="/ethiorental/">
            House List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ethiorental/map">
            View on Map
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
