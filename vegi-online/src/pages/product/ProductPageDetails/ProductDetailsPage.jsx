
import Navbar from '../../../components/defaults/navbar/Navbar'
import ProductDetails from '../components/productDetails/ProductDetails'
import Footer from '../../../components/defaults/footer/Footer'
import RelatedProduct from '../components/RelatedProduct/RelatedProduct'

const ProductDetailsPage = () => {
  return (
    <>
        <Navbar/>
        <ProductDetails/>
        <RelatedProduct/>
        <Footer/>
    </>
  )
}

export default ProductDetailsPage