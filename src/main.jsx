import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//product provider
import ProductProvider from "./contexts/ProductContext.jsx";
//sidebarprovider
import SidebarProvider from "./contexts/SidebarContext.jsx";
//cartprovider
import CartProvider from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
