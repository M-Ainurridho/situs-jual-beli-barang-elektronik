import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BtnLogin = () => {
   const navigate = useNavigate();
   const session = useSelector((state) => state.auth.authorization);
   return (
      <>
         {session ? (
            <div className="login ml-3.5">
               <button className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 drop-shadow-md" onClick={() => navigate("/user")}>
                  Dashboard
               </button>
            </div>
         ) : (
            <div className="login ml-3.5">
               <button className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 drop-shadow-md" onClick={() => navigate("/auth/login")}>
                  Sign in
               </button>
            </div>
         )}
      </>
   );
};

export default BtnLogin;
