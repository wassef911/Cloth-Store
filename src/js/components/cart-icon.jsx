import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

function CartIcon({ ItemsCount }) {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count ">{ItemsCount}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ItemsCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps)(CartIcon);
