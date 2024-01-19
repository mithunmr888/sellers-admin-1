import React, { useState } from "react";
import classes from "./SellersForm.module.css";
import Card from "./Card/Card";
import Button from "./Button/Button";

const SellersForm = (props) => {
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [category1, setCategory1] = useState("");

  const productIdHandler = (e) => {
    setProductId(e.target.value);
  };

  const sellingPriceHandler = (e) => {
    setSellingPrice(e.target.value);
  };

  const productNameHandler = (e) => {
    setProductName(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory1(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const productmentioned = {
      id: productId,
      sellingprice: sellingPrice,
      productname: productName,
      category: category1,
    };
    props.onAddingProduct(productmentioned);
    setProductId("");
    setSellingPrice("");
    setProductName("");
    setCategory1("");
  };

  return (
    <Card className={classes.sellers_login}>
      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="id">Product ID:</label>
          <input
            type="number"
            id="id"
            onChange={productIdHandler}
            value={productId}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="sellingprice">Selling Price:</label>
          <input
            type="number"
            id="sellingprice"
            onChange={sellingPriceHandler}
            value={sellingPrice}
            placeholder="₹"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="productname">Product Name:</label>
          <input
            type="text"
            id="productname"
            onChange={productNameHandler}
            value={productName}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="category">Choose a Category:</label>
          <select
            id="category"
            className={classes.selectors}
            onChange={categoryHandler}
            value={category1}
          >
            <option>Electronics</option>
            <option>Food</option>
            <option>Skincare</option>
          </select>
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Add Product
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default SellersForm;
