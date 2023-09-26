import React from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";

function App() {
  return <React.Fragment>
    <Cart/> 
      <Header/>
      <main>
        <Meal/>
      </main>
    </React.Fragment>
}

export default App;
