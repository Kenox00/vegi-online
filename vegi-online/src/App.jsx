import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Product from "./pages/product/product";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
