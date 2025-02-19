import Footer from "../../components/defaults/footer/Footer";
import Navbar from "../../components/defaults/navbar/Navbar";
import Categories from "./components/categories/categories";
import ProductPage from "./components/ProductPage/ProductPage";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Categories />
        <ProductPage />
      </div>
      <Footer />
    </>
  );
};

export default Product;
