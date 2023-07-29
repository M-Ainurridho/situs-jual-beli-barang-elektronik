import { memo, useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import axios from "axios";
import LoadingSpin from "../loadings/LoadingSpin";

const Products = memo(({ title, category }) => {
   const [products, setProducts] = useState([]);
   const [search, setSearch] = useState("");
   const [loading, setLoading] = useState(false);

   const allProducts = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/product");
      setProducts(response.data.payload);
      setLoading(false);
   };

   const productCategory = async (category) => {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/product/${category}`);
      if (search.length >= 3) {
         const data = response.data.payload.filter(({ name }) => name.toLowerCase().match(search.toLowerCase()));
         setProducts(data);
         setLoading(false);
         return;
      }
      setProducts(response.data.payload);
      setLoading(false);
   };

   useEffect(() => {
      if (category !== "all") {
         productCategory(category);
      } else {
         allProducts();
      }
   }, [category, search]);

   return (
      <section id="products" className="products h-40 my-10 h-full">
         <h1 className="dark:text-white text-center text-2xl mb-5 md:text-3xl md:mb-7 font-semibold">{title ? title : "All Products"}</h1>

         {category !== "all" && (
            <div className="flex justify-center mb-4 -mt-3 relative">
               <input type="text" value={search} className="border-2 w-80 py-1 px-2 rounded-md" placeholder="Search item title..." onChange={(e) => setSearch(e.target.value)} />

            </div>
         )}

         {loading ? (
            <LoadingSpin />
         ) : (
            <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-auto gap-3 md:gap-5 relative">
               {products.length > 0 ? (
                  products.map(({ id, category, brand, name, price, image, discount }) => {
                     return (
                        <div key={id}>
                           <CardProduct id={id} category={category} brand={brand} name={name} price={price} image={image} discount={discount} />
                        </div>
                     );
                  })
               ) : (
                  <div className="absolute right-0 left-0 text-center">
                     <span className="rounded-md text-lg text-white py-2 px-3 bg-red-500 shadow-sm shadow-neutral-600 dark:shadow-slate-700">Item not found</span>
                  </div>
               )}
            </div>
         )}
      </section>
   );
});

export default Products;
