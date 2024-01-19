//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import SellersForm from "./components/SellersForm";
import ProductLists from "./components/ProductLists/ProductLists";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [enteredProduct, setEnteredProduct] = useState([]);

  const addingProductHandler = (productmentioned) => {
    console.log(productmentioned);
    localStorage.setItem(
      JSON.stringify(productmentioned.id),
      JSON.stringify(productmentioned)
    );
    setEnteredProduct((prevstate) => {
      return [productmentioned, ...prevstate];
    });
  };

  const deleteProductHandler = () => {
    localStorage.removeItem();
  };
  return (
    <>
      <MainHeader></MainHeader>
      <SellersForm onAddingProduct={addingProductHandler}></SellersForm>
      <ProductLists
        products={enteredProduct}
        onDeleteProduct={deleteProductHandler}
      ></ProductLists>
    </>
  );
}

export default App;
