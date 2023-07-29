import { memo } from "react";

const Hero = memo(() => {
   return (
      <>
         <div className="hero bg-center bg-cover h-screen flex items-center justify-center ">
            <div className="introduction z-10 flex flex-col items-center">
               <h1 className="text-lg md:text-2xl text-white text-center font-bold">Situs Belanja Online Barang Electronic Termurah, Tercepat, dan Terpercaya Seluruh Indonesia</h1>
               <a href="#products" className="bg-green-500 hover:bg-green-600 rounded-full p-2 mt-2 text-white shadow-sm ">
                  Beli Sekarang
               </a>
            </div>
         </div>
      </>
   );
});

export default Hero;
