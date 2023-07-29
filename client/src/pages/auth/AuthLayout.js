import BG from "../../assets/images/backgrounds/auth-bg.jpg";
import { Link } from "react-router-dom";
const AuthLayout = ({ children }) => {
   return (
      <>
         <div className="wrapper flex max-h-screen">
            <div style={{ flexBasis: "70%" }} className="left overflow-hidden">
               <img src={BG} alt="" className="w-full h-full object-cover" />
            </div>
            <div style={{ flexBasis: "30%" }} className="flex items-center flex-col justify-between relative">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                     fill="#0099ff"
                     fillOpacity="1"
                     d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,245.3C672,267,768,245,864,213.3C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
               </svg>
               {children}
               <p className="-translate-y-1.5 absolute bottom-0 text-sm text-white">
                  &copy; Copyright by
                  <Link to="/" className="text-white hover:text-neutral-900  duration-200 pl-1">
                     ridho-electronics
                  </Link>
               </p>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                     fill="#0099ff"
                     fillOpacity="1"
                     d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,170.7C672,139,768,85,864,90.7C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
               </svg>
            </div>
         </div>
      </>
   );
};

export default AuthLayout;
