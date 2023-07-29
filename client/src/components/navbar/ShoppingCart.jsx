import { useSelector } from "react-redux";

const ShoppingCart = () => {
   const count = useSelector((state) => state.orders.value);
   const session = useSelector((state) => state.auth.authorization);

   return (
      <>
         <div className="shopping-cart ml-2 cursor-pointer relative ">
            <i className="bx bxs-cart-alt text-2xl hover:text-blue-600 duration-100"></i>

            {session && (
               <span style={{ fontSize: "11px" }} className="absolute -top-0.5 -right-2 bg-red-500 w-5 h-4 rounded-full text-center leading-4.5 text-white">
                  {count.length < 99 ? count.length : "99+"}
               </span>
            )}
         </div>
      </>
   );
};

export default ShoppingCart;
