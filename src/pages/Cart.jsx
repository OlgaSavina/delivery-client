import React from "react";

import axios from "axios";
import { CartItem } from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { Formik, useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "../components/Button";
//import {  removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedProducts = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  /*const onRemoveItem = (_id) => {
   
      dispatch(removeCartItem(_id));
    
  };

  const onPlusItem = (_id) => {
    dispatch(plusCartItem(_id));
  };

  const onMinusItem = (_id) => {
    dispatch(minusCartItem(_id));
  };*/

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      adress: "",
      addedProducts,
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:4444/orders", values)
        .then((response) => console.log("👉 Returned data:", response));
    },
  });

  const onSubmit = () => {
    alert("Order is added");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">Кошик</h2>
          </div>
          <Box
     component="form"
     sx={{
       '& > :not(style)': { m: 1, width: '100ch' },
     }}
     noValidate
     autoComplete="off"
    >
          <div className="cart__someDiv">
            <TextField
              label="Name"
              variant="filled"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              margin-left="normal"
            />

            <TextField
              label="Email"
              variant="filled"
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              margin-left ="normal"
            />

            <TextField
              label="Phone"
              variant="filled"
              type="phone"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <TextField
              label="Adress"
              variant="filled"
              type="adress"
              id="adress"
              name="adress"
              value={formik.values.adress}
              onChange={formik.handleChange}
            />
          </div>
          </Box>
          <div className="content__items">
            {addedProducts.map((obj) => (
              <CartItem
                key={obj._id}
                name={obj.name}
                totalPrice={items[obj._id].totalPrice}
                totalCount={items[obj._id].items.length}
                /*onRemove={onRemoveItem}
            onMinus={onMinusItem}
            onPlus={onPlusItem}*/
              />
            ))}

            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Усього: <b>{totalCount} </b>
                </span>
                <span>
                  Сума замовлення: <b>{totalPrice}</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <a
                  href="/"
                  className="button button--outline button--add go-back-btn"
                >
                  <span>Повернутися назад</span>
                </a>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={onSubmit}
                >
                  Замовити
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Cart;
