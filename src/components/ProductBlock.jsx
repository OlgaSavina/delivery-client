import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function ProductBlock({
  _id,
  name,
  price,
  imageUrl,
  onClickAddProduct,
  isInShop,
}) {
  const onAddProduct = () => {
    const obj = {
      _id,
      name,
      imageUrl,
      price,
    };
    onClickAddProduct(obj);
  };
  return (
    <div className="product-block">
      <img className="product-block__image" src={imageUrl} alt="smth" />

      <h4 className="product-block__title">{name}</h4>

      <div className="product-block__bottom">
        <div className="product-block__price"> {price} грн</div>
        <Button onClick={onAddProduct} className="button--add" outline>
          <span>Добавити</span>
        </Button>
      </div>
    </div>
  );
}

ProductBlock.propTypes = {
  name: PropTypes.string.isRequired,
  //  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClickAddProduct: PropTypes.func,
  addedCount: PropTypes.number,
};

ProductBlock.defaultProps = {
  name: "---",
  price: 0,
};

export default ProductBlock;
