import { Link } from "react-router-dom";
import Logo from "../../assets/images/icons/brands/logo.svg";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Theme from "./Theme";
import ElectronicMenu from "./ElectronicMenu";
import Offcanvas from "./Offcanvas";
import BtnLogin from "../buttons/BtnLogin";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/reducers";

const Navbar = ({ children }) => {
   const [clicked, setClicked] = useState(false);
   const session = useSelector((state) => state.auth.authorization);
   const dispatch = useDispatch();

   return (
      <>
         <nav className="bg-neutral-100 z-50 dark:bg-slate-900 shadow-md py-3 px-5 fixed top-0 left-0 right-0">
            <div className="container mx-auto flex justify-between items-center">
               <i className="bx bx-menu bx-sm lg:hidden text-xl cursor-pointer dark:text-white" onClick={() => setClicked(!clicked)}></i>
               <div className="navbar-left hidden lg:flex items-center">
                  <div className="navbar-brand">
                     <img src={Logo} alt="Logo" className="w-10 h-10" />
                  </div>
                  <ul className="flex">
                     <li className="ml-4">
                        <Link to="/" className="dark:text-white dark:hover:text-blue-500 hover:text-blue-600 duration-200">
                           Home
                        </Link>
                     </li>
                     <li className="dropdown ml-4 relative">
                        <ElectronicMenu />
                     </li>
                  </ul>
               </div>
               <div className="navbar-right dark:text-white flex items-center">
                  <ShoppingCart />
                  <BtnLogin />
                  <Theme />
               </div>
            </div>
         </nav>

         {/* Offcanvas */}
         <Offcanvas clicked={clicked} setClicked={setClicked} />

         <main id="main" className="dark:bg-slate-700 min-h-screen grid">
            {children}
         </main>
      </>
   );
};

export default Navbar;
