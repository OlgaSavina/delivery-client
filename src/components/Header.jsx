import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));

  return (
    <div className="header">
      <div className="container">
     
        <Link to="/">
        <div className="header__logo">
          <h1>Delivery App</h1>
          </div>
        </Link>

        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>Cart </span>
              <div className="button__delimiter"></div>

              <span>{totalPrice}</span>
              
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
