import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <div className={classes.list}>
      <li>{props.children}</li>
      <button onClick={props.onDeleteProduct}>Delete Product</button>
    </div>
    
  );
};

export default ProductList;
