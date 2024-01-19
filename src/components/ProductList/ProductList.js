import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <div className={classes.list}>
      <li>
        {props.children}
        <button className={classes.button} onClick={props.onDeleteProduct}>
          Delete Product
        </button>
      </li>
    </div>
  );
};

export default ProductList;
