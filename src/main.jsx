import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import all_product from "./assets/all_product";
import { ShopContext } from "./Context/ShopContex.jsx";

createRoot(document.getElementById("root")).render(
  <ShopContext.Provider value={all_product}>
    <App />
  </ShopContext.Provider>
);
