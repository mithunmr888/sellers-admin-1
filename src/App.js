//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import SellersForm from "./components/SellersForm";
import ProductLists from "./components/ProductLists/ProductLists";

function App() {
  const [enteredProduct, setEnteredProduct] = useState([]);

  const addingProductHandler = (productmentioned) => {
    console.log(productmentioned);
    setEnteredProduct((prevstate) => {
      return [productmentioned, ...prevstate];
    });
  };

  const deleteProductHandler = () => {};
  return (
    <>
      <h1>hi</h1>
      <SellersForm onAddingProduct={addingProductHandler}></SellersForm>
      <ProductLists
        products={enteredProduct}
        onDeleteProduct={deleteProductHandler}
      ></ProductLists>
    </>
  );
}

export default App;
