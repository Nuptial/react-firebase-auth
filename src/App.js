import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Firebase from "./components/Firebase/firebase";
import FirebaseContext from "./components/Firebase/context";

import Navigation from "./components/Navigation/navigation";

const App = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <BrowserRouter>
        <Navigation></Navigation>
      </BrowserRouter>
    </FirebaseContext.Provider>
  );
};

export default App;
