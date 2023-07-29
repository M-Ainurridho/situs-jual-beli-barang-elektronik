import { useState } from "react";

const ScrollTop = () => {
   const [scroll, setScroll] = useState(false);

   return (
      <>
         {window.addEventListener("scroll", () => {
            window.scrollY > 550 ? setScroll(true) : setScroll(false);
         })}

         {scroll && (
            <a href="#" id="scrollTop" className="fixed bottom-3 right-3 text-slate-800 dark:text-neutral-500 z-50">
               <i className="bx bxs-hand-up bx-md md:bx-lg"></i>
            </a>
         )}
      </>
   );
};

export default ScrollTop;
