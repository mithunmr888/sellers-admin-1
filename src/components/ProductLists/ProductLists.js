import Card from "../Card/Card";
import classes from "./ProductLists.module.css";
import ProductList from "../ProductList/ProductList";
import React from "react";

const ProductLists = (props) => {
    const groupedProducts = {};
  
    props.products.forEach((product) => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }
      groupedProducts[product.category].push(product);
    });
  
    return (
      <Card className={classes.all_lists}>
        <h2>Products</h2>
        {Object.keys(groupedProducts).map((category) => (
          <div key={category}>
            <h4>{category}</h4>
            <ul>
              {groupedProducts[category].map((product) => (
                <ProductList
                  key={product.id}
                  id={product.id}
                  onDelete={props.onDeleteProduct}
                >{`${product.sellingprice} - ${product.productname}`}</ProductList>
              ))}
            </ul>
          </div>
        ))}
      </Card>
    );
};

export default ProductLists;
