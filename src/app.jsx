import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Particles from "react-particles-js";

import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelector";

import NavBar from "./js/components/navBar-Components/navbar";
import Homepage from "./js/pages/homepage/homepage";
import Shop from "./js/pages/shop/shop";
import Sign from "./js/pages/sign/sign";
import Checkout from "./js/pages/checkout/checkout";
import Contact from "./js/pages/contact/contact";

import "./app.scss";

function App({ setCurrentUser, currentUser }) {
  /*
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
 */
  const params = require("./assets/particles.json");
  return (
    <>
      <Particles className="sticky-top particles " params={params} />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/sign"
          render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
