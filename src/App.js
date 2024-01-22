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
    if (productmentioned.category.toString().length > 0) {
      localStorage.setItem(
        productmentioned.id,
        JSON.stringify(productmentioned)
      );
    }

    setEnteredProduct((prevstate) => {
      const updatedProducts = [...prevstate];
      updatedProducts.push(productmentioned);
      return updatedProducts;
    });
  };

  const deleteProductHandler = (productId) => {
    localStorage.removeItem(productId);
    setEnteredProduct((prevstate) => {
      const updatedProducts = prevstate.filter(
        (product) => product.id !== productId
      );
      return updatedProducts;
    });
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
