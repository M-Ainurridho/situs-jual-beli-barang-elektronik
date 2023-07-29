import { useSelector } from "react-redux";
import Logout from "../auth/Logout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const User = () => {
   const auth = useSelector((state) => state.auth);
   const navigate = useNavigate();
   // const { name } = auth.user;

   useEffect(() => {
      if (auth.authorization === false) {
         navigate("/auth/login");
      }
   }, []);

   return (
      <>
         <h1>Selamat Datang</h1>
         <button onClick={() => navigate("/")} className="bg-indigo-500 hover:bg-indigo-600 p-2">
            Home
         </button>
         <Logout />
      </>
   );
};

export default User;
