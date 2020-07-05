import React, { useEffect, useState } from "react";

import { Route, withRouter, Switch } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import Login from "../../module/login/login";
import Home from "../../module/home/home";

import { withFirebase } from "../Firebase/context";

const Navigation = ({ firebase, history }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setAuthUser(authUser);
        history.push(ROUTES.HOME);
      } else {
        setAuthUser(null);
        history.push(ROUTES.LOGIN);
      }
    });
  }, []);

  return (
    <Switch>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</Switch>
  );
};

const NavigationAuth = () => <Route path={ROUTES.HOME} component={Home} />;

const NavigationNonAuth = () => (
  <Route exact path={ROUTES.LOGIN} component={Login} />
);

export default withRouter(withFirebase(Navigation));
