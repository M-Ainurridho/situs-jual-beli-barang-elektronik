import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Products from "../../components/products/Products";

const Tablet = () => {
   return (
      <>
         <Banner title={"Tablet"} />
         <Products title={"All Items"} category={"tablet"} />
         <Footer />
      </>
   );
};

export default Tablet;
