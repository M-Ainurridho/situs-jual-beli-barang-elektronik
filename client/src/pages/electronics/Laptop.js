import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Products from "../../components/products/Products";

const Laptop = () => {
   return (
      <>
         <Banner title={"Laptop"} />
         <Products title={"All Items"} category={"laptop"} />
         <Footer />
      </>
   );
};

export default Laptop;
