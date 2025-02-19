import CallToAction from "../../components/CTA/callToAction";
import Footer from "../../components/defaults/footer/Footer";
import Navbar from "../../components/defaults/navbar/Navbar";
import OurCategories from "./components/categories/OurCategories";
import Collections from "./components/collections/Collections";
import FreshSales from "./components/FreshSales/FreshSales";
import Hero from "./components/Hero/Hero";
import { lazy, Suspense } from "react";
const AllProduct = lazy(() => import("./components/products/AllProduct"));


const Home = () => {
  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <Navbar />
        <Hero />
        <OurCategories />
        <CallToAction />
        <AllProduct />
        <Collections />
        <FreshSales />
        <CallToAction />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
