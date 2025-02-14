import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Product from "./pages/product/product";
import ProductDetailsPage from "./pages/product/ProductPageDetails/ProductDetailsPage";
import CartPage from "./pages/cart/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/details" element={<ProductDetailsPage />} />
        <Route path="/products/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;