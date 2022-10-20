import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartItem } from "../components/index";
import { useSelector} from "react-redux";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "../components/Button";
//import {  removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';

function Cart() {
  //const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedProducts = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      adress: "",
      addedProducts,
      totalPrice,
    },
    onSubmit: (values) => {
      console.log(values.totalPrice);
      alert("Order is added," + values.name + `\nOrder price:` + " "+ values.totalPrice + " hrn");
      axios
        .post("http://localhost:4444/orders", values)
        .then((response) => console.log("👉 Returned data:", response));
        
    },
  });


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
       <div  className="cart__top">
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
              />
            ))}

            <div className="cart__bottom">
              <div className="cart__bottom-details">
               <p> <span>
                  Усього: <b>{totalCount} </b>
                </span>
                </p>
                <p>
                <span>
                  Сума замовлення: <b>{totalPrice}</b>
                </span>
                </p>
              </div>
              <div className="cart__bottom-buttons">
                <Link to="/">
        <Button>  Повернутись назад</Button>  
        </Link>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={formik.onSubmit}
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
