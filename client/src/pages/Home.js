import Hero from "../components/home/Hero";
import ProductExcellence from "../components/home/ProductExcellence";
import Products from "../components/products/Products";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
   return (
      <>
         <Hero />
         <ScrollTop />
         <ProductExcellence />
         <Products category={"all"} />
         <Footer />
      </>
   );
};

export default Home;
