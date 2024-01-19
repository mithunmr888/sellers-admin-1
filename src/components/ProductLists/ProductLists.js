import Card from "../Card/Card";
import classes from "./ProductLists.module.css";
import ProductList from "../ProductList/ProductList";
import React from "react";

const ProductLists = (props) => {
  return (
    <Card className={classes.all_lists}>
      <h2>Products</h2>
      <ul>
        {props.products.map((product) => (
          <ProductList
            id={Math.random().toString()}
            key={product.id}
            onDeleteProduct={props.onDeleteProduct}
          >{`${product.sellingprice} - ${product.category} - ${product.productname}`}</ProductList>
        ))}
      </ul>
    </Card>
  );
};

export default ProductLists;
