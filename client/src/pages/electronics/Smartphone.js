import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Products from "../../components/products/Products";

const Smartphone = () => {
   return (
      <>
         <Banner title={"Smartphone"} />
         <Products title={"All Items"} category={"smartphone"} />
         <Footer />
      </>
   );
};

export default Smartphone;
