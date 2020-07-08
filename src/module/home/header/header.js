import React from "react";
import { withRouter } from "react-router-dom";
import "./header.css";

import { withFirebase } from "../../../components/Firebase/context";

const Header = (props) => {
  return (
    <div className="header">
      <img src="/hedwig-logo.png" className="logo" alt="logo" />
      <div className="logout">
        <i className="fa fa-user fa-2x"></i>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
        <div
          className="logout-container"
          onClick={props.firebase.signOut}
        >
          Log out
        </div>
      </div>
    </div>
  );
};

export default withRouter(withFirebase(Header));
