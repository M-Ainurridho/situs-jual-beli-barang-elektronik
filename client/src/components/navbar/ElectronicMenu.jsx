import { Link } from "react-router-dom";

const ElectronicMenu = () => {
   return (
      <>
         <span className="cursor-pointer hover:text-blue-600 dark:text-white dark:lg:hover:text-blue-500">
            Electronics<i className="bx bx-caret-down translate-y-0.5"></i>
         </span>
         <div className="dropdown-menu absolute bg-white rounded drop-shadow-sm hidden divide-y py-1">
            <Link to="/electronic/laptop" className="block py-1 pl-2 pr-5 hover:bg-neutral-300 duration-100 dark:text-slate-800">
               Laptop
            </Link>
            <Link to="/electronic/smartphone" className="block py-1 pl-2 pr-5 hover:bg-neutral-300 duration-100 dark:text-slate-800">
               Smartphone
            </Link>
            <Link to="/electronic/tablet" className="block py-1 pl-2 pr-5 hover:bg-neutral-300 duration-100 dark:text-slate-800">
               Tablet
            </Link>
         </div>
      </>
   );
};

export default ElectronicMenu;
