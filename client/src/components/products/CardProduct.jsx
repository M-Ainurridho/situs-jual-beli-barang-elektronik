import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewOrder } from "../../redux/reducers";
import { useNavigate } from "react-router-dom";

const CardProduct = memo(({ id, category, brand, name, price, image, discount }) => {
   const [mouseOver, setMouseOver] = useState(false);
   const session = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleOrder = () => {
      if (!session.authorization) {
         return navigate("/auth/login");
      }
      dispatch(addNewOrder({ id, category, brand, name, price, image }));
   };

   return (
      <div className="card border-2 border-neutral-200 rounded-md overflow-hidden">
         <div className="card-header relative overflow-hidden h-36 lg:h-40 lg:h-44 relative">
            <img src={require(`../../assets/images/products/${image}`)} alt="" className="h-full w-full object-cover object-bottom hover:scale-105 hover:duration-500" />
            {discount && (
               <div className="card-discount absolute bottom-0 -right-1 bg-green-400 pl-2 pr-2.5 py-0.5 -skew-x-12 flex items-center">
                  <i className="bx bxs-discount"></i> <span className="text-xs ml-0.5 mb-0.5">{discount}%</span>
               </div>
            )}
         </div>
         <div className="card-body dark:bg-white h-12 lg:h-14 px-2" onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
            {mouseOver ? (
               <p className="gap text-center pt-2 lg:pt-2.5">
                  <i className="bx bx-list-ul cursor-pointer bg-green-400 hover:bg-green-500 p-2 lg:p-2.5 rounded-full mx-1" onClick={() => navigate(`/electronic/${category}/${brand}/${id}`)}></i>

                  <i className="bx bxs-cart-alt cursor-pointer bg-green-400 hover:bg-green-500 p-2 lg:p-2.5 rounded-full mx-1" onClick={handleOrder}></i>
               </p>
            ) : (
               <div className="my-auto text-sm lg:text-base text-center pt-1">
                  <div className="card-title truncate">{name}</div>
                  {discount ? (
                     // Discount available
                     <div className="flex justify-center">
                        <div className="card-price mr-1.5 text-neutral-600">
                           <del>
                              {new Intl.NumberFormat("id-ID", {
                                 style: "currency",
                                 currency: "IDR",
                              }).format(price)}
                           </del>
                        </div>

                        <div className="card-price">
                           {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                           }).format(price - price * (discount / 100))}
                        </div>
                     </div>
                  ) : (
                     // Discount not available
                     <div className="card-price">
                        {new Intl.NumberFormat("id-ID", {
                           style: "currency",
                           currency: "IDR",
                        }).format(price)}
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
});

export default CardProduct;
