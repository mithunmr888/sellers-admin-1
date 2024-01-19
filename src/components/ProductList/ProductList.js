import classes from "./ProductList.module.css";

const ProductList = (props) => {
  <div className={classes.list}>
    <li>{props.children}</li>
  </div>;
};

export default ProductList;
