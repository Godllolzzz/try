import "./App.css";
import Header from "./Components/Layout/Header";
import { Fragment } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CardProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartToggleHandler = (event) => {
    setIsCartOpen(!isCartOpen);
    console.log("clicked");
  };
  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={cartToggleHandler} />}
      <Header onClose={cartToggleHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
