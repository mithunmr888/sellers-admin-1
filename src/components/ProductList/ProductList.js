import classes from "./ProductList.module.css";

const ProductList = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className={classes.list}>
      <li>
        {props.children}
        <button className={classes.button} onClick={deleteHandler}>
          Delete Product
        </button>
      </li>
    </div>
  );
};

export default ProductList;
