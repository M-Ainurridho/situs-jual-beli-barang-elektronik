import { memo } from "react";

const Theme = memo(() => {
   const isDark = false;

   return (
      <>
         <div className="theme ml-2">
            <div className="dropdown relative rounded-md border-2 border-neutral-300 bg-white p-0.5 px-1 cursor-pointer">
               <span className="text-sm dark:text-slate-800">Theme</span>
               <div className="dropdown-menu absolute bg-white rounded drop-shadow-sm hidden top-8.5 mt-1 -right-0 lg:-right-7 py-1 ">
                  <button className="dark:text-white py-1 px-3 hover:bg-neutral-300 duration-100 flex items-center" onClick={() => !isDark && document.body.classList.remove("dark")}>
                     <i className="bx bx-sun mr-1 dark:text-slate-800"></i> <span className=" dark:text-slate-800">Light</span>
                  </button>
                  <button className="dark:text-white py-1 px-3 hover:bg-neutral-300 duration-100 w-full flex items-center" onClick={() => !isDark && document.body.classList.add("dark")}>
                     <i className="bx bxs-moon mr-1 dark:text-slate-800"></i> <span className=" dark:text-slate-800">Dark</span>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
});

export default Theme;
