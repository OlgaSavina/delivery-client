import React from "react";
import Button from "./Button";

const CartItem = ({
  _id,
  name,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus,
}) => {
  /*const handleRemoveClick = () => {
    onRemove(_id);
  };

  const handlePlusItem = () => {
    onPlus(_id);
  };

  const handleMinusItem = () => {
    onMinus(_id);
  };*/

  return (
    <div className="cart__item">
      
      <div className="cart__item-info">
        <h3>{name}</h3>
      </div>
      <div className="cart__item-count">
        <b>{totalCount} шт. </b>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} грн.</b>
      </div>
    </div>
  );
};

export default CartItem;
