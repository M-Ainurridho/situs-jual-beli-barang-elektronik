import { Link } from "react-router-dom";
import ElectronicMenu from "./ElectronicMenu";
import { memo } from "react";

const Offcanvas = memo(({ clicked, setClicked }) => {
   return (
      <>
         <div className="offcanvas"></div>
         {clicked && (
            <div className="offcanvas z-50 bg-neutral-100 dark:bg-slate-800 fixed top-0 left-0 bottom-0 w-4/5 duration-1000 translate-x-0 drop-shadow-lg p-3 divide-y dark:text-white">
               <div className="offcanvas-header flex items-center justify-between mb-2">
                  <h1 className="text-xl pl-2">Ridho Electronic</h1>
                  <i className="bx bx-x bx-sm cursor-pointer" onClick={() => setClicked(!clicked)}></i>
               </div>
               <div className="offcanvas-body pt-5">
                  <Link to="/" className="block pl-2 py-2 hover:bg-neutral-300 dark:hover:bg-slate-600 hover:rounded-md duration-100 ">
                     Home
                  </Link>
                  <div className="dropdown relative cursor-pointer pl-2 py-2">
                     <ElectronicMenu />
                  </div>
                  <Link to="/about" className="block pl-2 py-2 hover:bg-neutral-300 dark:hover:bg-slate-600 hover:rounded-md duration-100 ">
                     About
                  </Link>
                  <Link to="/contact" className="block pl-2 py-2 hover:bg-neutral-300 dark:hover:bg-slate-600 hover:rounded-md duration-100 ">
                     Contact
                  </Link>
               </div>
            </div>
         )}
      </>
   );
});

export default Offcanvas;
