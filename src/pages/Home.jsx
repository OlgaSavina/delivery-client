import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ProductBlock, Shops } from "../components";
import { addProductToCart } from "../redux/actions/cart";
import { setShop } from "../redux/actions/shop";

import { getShops } from "../api/getShops";
import { getProducts } from "../api/getProducts";

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ cart }) => cart.items);
  const shop = useSelector(({ shop }) => shop);

  const handleAddProductToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const selectShops = React.useCallback((items) => {
    dispatch(setShop(items));
    console.log(items);
  }, []);

  const [shops, setShops] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);
  React.useEffect(() => {
    getShops().then((response) => {
      setShops(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <h2 className="content__title">All Dishes</h2>

    {  /*  <Shops
          activeItem={shop}
          items={shops.map((shop) => shop.name)}
          onClickShop={selectShops}
  />*/}
      </div>
      <div className="content__items">
        {/*<div className="content__items">
        {shops.map((shop) => (
          <Button> <li key={shop.id}>
              {shop.name}
            </li> </Button> 
          ))}
        </div>*/}
        {products.map((obj) => (
          <ProductBlock
            key={obj._id}
            onClickAddProduct={handleAddProductToCart}
            addedCount={cartItems[obj._id] && cartItems[obj._id].items.length}
            {...obj}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
