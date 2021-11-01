import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

const App = () => {

  const [darkMode, setdarkMode] = useState("false");
  
  const clickMode = () => {
    setdarkMode((darkMode) => !darkMode);
  }

  const appClass = darkMode ? "App dark" : "App light"

  return (

    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={clickMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
