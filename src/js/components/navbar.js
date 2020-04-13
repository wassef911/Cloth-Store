import React from "react";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.scss";
import CartIcon from "./cart-icon";

const NavBar = ({ currentUser }) => {
  return (
    <nav
      className="mb-1 navbar navbar-expand-lg navbar-light bg-light "
      style={{
        clipPath: " polygon( 0 0, 100% 0, 100% 100%, 0 calc(96% - 1vw) )",
      }}
    >
      <a className="navbar-brand" href="/">
        <AiOutlineShoppingCart
          style={{ color: "#ffa45c", marginLeft: "2vm" }}
          size={45}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-4"
        aria-controls="navbarSupportedContent-4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/shop">
              SHOP
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              CONTACT
            </a>
          </li>
          <li className="nav-item">
            {currentUser ? (
              <a className="nav-link" href="/" onClick={() => auth.signOut()}>
                SIGN OUT
              </a>
            ) : (
              <Link className="nav-link" to="/sign">
                SIGN IN
              </Link>
            )}
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <CartIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(NavBar);
