import CallToAction from "../../components/CTA/callToAction";
import Footer from "../../components/defaults/footer/Footer";
import Navbar from "../../components/defaults/navbar/Navbar";
import OurCategories from "./components/categories/OurCategories";
import Collections from "./components/collections/Collections";
import FreshSales from "./components/FreshSales/FreshSales";
import Hero from "./components/Hero/Hero";
import AllProduct from "./components/products/AllProduct";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <OurCategories />
      <CallToAction />
      <AllProduct />
      <Collections />
      <FreshSales />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
