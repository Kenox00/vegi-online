import CallToAction from "../../components/CTA/callToAction";
import Footer from "../../components/defaults/footer/Footer";
import Navbar from "../../components/defaults/navbar/Navbar";
import OurCategories from "./components/categories/OurCategories";
import AllProduct from "./components/products/AllProduct";

const Home = () => {
  return (
    <>
      <Navbar />
      <OurCategories />
      <CallToAction />
      <AllProduct />
      <Footer />
    </>
  );
};

export default Home;
