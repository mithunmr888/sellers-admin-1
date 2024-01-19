import Card from "../Card/Card";
import classes from "./ProductLists.module.css";
import ProductList from "../ProductList/ProductList";
import React from "react";

const ProductLists = (props) => {
  const categorizedProducts = {
    Electronics: [],
    Food: [],
    Skincare: [],
  };

  props.products.forEach((product) => {
    categorizedProducts[product.category].push(product);
  });

  return (
    <Card className={classes.all_lists}>
      <h2>Products</h2>
      {Object.keys(categorizedProducts).map((category) => (
        <div key={category}>
          <h4>{`${category} Items`}</h4>
          <ul>
            {categorizedProducts[category].map((product) => (
              <ProductList
                key={product.id}
                onDeleteProduct={() => props.onDeleteProduct(product.id)}
              >{`${product.sellingprice} - ${product.productname}`}</ProductList>
            ))}
          </ul>
        </div>
      ))}
    </Card>
  );
};

export default ProductLists;
