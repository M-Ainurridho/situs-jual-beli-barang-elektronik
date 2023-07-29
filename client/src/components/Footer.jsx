import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <>
         <footer className="text-center dark:text-white block self-end mt-5">
            <div className="bg-neutral-100 dark:bg-slate-800 site-info grid grid-cols-2 md:grid-cols-3 gap-3 lg:flex lg:flex-wrap lg:justify-evenly lg:py-10 text-left py-5 ">
               <div className="pl-5 lg:w-64">
                  <h3 className="font-bold mb-1 text-lg">Ridho Electronic</h3>
                  <p>Situs Belanja Online Barang Electronic Termurah, Tercepat, dan Terpercaya Seluruh Indonesia</p>
               </div>
               <div className="pl-5 lg:w-64 lg:pl-8">
                  <h3 className="font-bold mb-1 text-lg">Helps</h3>
                  <Link to="/about" className="block hover:text-blue-500 duration-200">
                     About
                  </Link>
                  <Link to="/contact" className="block hover:text-blue-500 duration-200">
                     Contact
                  </Link>
               </div>
               <div className="pl-5 lg:w-64">
                  <h3 className="font-bold mb-1 text-lg">Have any question?</h3>
                  <div>
                     <i className="bx bxs-map bx-fw bx-xs"></i>
                     <span>Jalan Madura RT00/011 Nomor 8, Cinere - Depok</span>
                  </div>
                  <div>
                     <i className="bx bxs-phone bx-fw bx-xs"></i>
                     <span>+62 858-8348-8601</span>
                  </div>
                  <div>
                     <i className="bx bxs-envelope bx-fw bx-xs"></i>
                     <span>m.ainurridho11@gmail.com</span>
                  </div>
               </div>
            </div>
            <div className="bg-neutral-200 dark:bg-slate-900 py-3">
               &copy; Copyright by Muhammad Ainurridho <i className="bx bxs-heart text-red-600 inline-block translate-y-0.5"></i> for every people
            </div>
         </footer>
      </>
   );
};

export default Footer;
