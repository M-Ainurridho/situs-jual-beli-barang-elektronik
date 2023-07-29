import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/reducers";
import axios from "axios";

const Logout = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleClick = () => {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["log-auth"];
      dispatch(logOut());

      navigate("/");
   };

   return (
      <>
         <button onClick={handleClick} className="bg-red-500 hover:bg-red-600 p-2">
            Logout
         </button>
      </>
   );
};

export default Logout;
