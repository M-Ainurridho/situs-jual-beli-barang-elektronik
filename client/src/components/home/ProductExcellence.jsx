import { memo } from "react";
import Cheapest from "../../assets/images/icons/svg/cheapest.svg";
import Fastest from "../../assets/images/icons/svg/fastest.svg";
import Trusted from "../../assets/images/icons/svg/trusted.svg";

const ProductExcellence = memo(() => {
   return (
      <section className="product-excellence my-5 md:my-10">
         <h1 className="dark:text-white text-center text-2xl mb-3 md:text-3xl md:mb-8 font-semibold">Product Excellence</h1>
         <div className="container flex justify-around mx-auto lg:w-2/3">
            <div className="py-2">
               <img src={Cheapest} alt="" className="h-16 md:h-20 lg:h-24 w-auto mx-auto" />
               <p className="dark:text-white text-center text-sm md:text-md lg:text-lg mt-2">Cheaper Than Others</p>
            </div>
            <div className="py-2">
               <img src={Fastest} alt="" className="h-16 md:h-20 lg:h-24 w-auto mx-auto" />
               <p className="dark:text-white text-center text-sm md:text-md lg:text-lg mt-2 ">Faster Delivery</p>
            </div>
            <div className="py-2">
               <img src={Trusted} alt="" className="h-16 md:h-20 lg:h-24 w-auto mx-auto" />
               <p className="dark:text-white text-center text-sm md:text-md lg:text-lg mt-2">100% Trusted</p>
            </div>
         </div>
      </section>
   );
});

export default ProductExcellence;
