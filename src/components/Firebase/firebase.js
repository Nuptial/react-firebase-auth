import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCppGfF5mnwnZgAFfpf6xJlRMzfVeItXzI",
  authDomain: "dummy-frontend-project.firebaseapp.com",
  databaseURL: "https://dummy-frontend-project.firebaseio.com",
  projectId: "dummy-frontend-project",
  storageBucket: "dummy-frontend-project.appspot.com",
  messagingSenderId: "909596530093",
  appId: "1:909596530093:web:427d61d903a65e4141fd24",
};

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config);
    }

    this.auth = app.auth();
  }

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => {
    localStorage.removeItem("idToken");
    this.auth.signOut();
  };
}

export default Firebase;
