import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { logIn } from "../../redux/reducers";
import InputError from "./errors/InputError";
import LoadingSpin from "../../components/loadings/LoadingSpin";

const Login = () => {
   const auth = useSelector((state) => state.auth);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [validation, setValidation] = useState([]);
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);
      const response = await axios
         .post("http://localhost:3000/auth/login", { email, password })
         .then((res) => res)
         .catch((err) => {
            err.response.data.status === 402 ? setValidation(err.response.data.errors) : setValidation(err.response.data);

            setLoading(false);
         });

      if (response?.data) {
         localStorage.setItem("token", response.data.token);
         await getUserInfo();
      }
   };

   const getUserInfo = async () => {
      const token = localStorage.getItem("token");

      if (token) {
         axios.defaults.headers.common["log-auth"] = token;
         const res = await axios.get("http://localhost:3000/auth/useraccess");
         const { user } = res.data;

         dispatch(logIn(user));
         if (user.role_id !== 1) {
            navigate("/user");
         } else {
            navigate("/admin");
         }
      } else {
         delete axios.defaults.headers.common["log-auth"];
      }
      setLoading(false);
   };

   useEffect(() => {
      if (auth.authorization === true) {
         if (auth.user.role_id !== 1) {
            navigate("/user");
         }
         navigate("/admin");
      }
   }, []);

   return (
      <div className="w-full px-6">
         <h1 className="text-2xl text-center">Sign In</h1>
         <form onSubmit={handleSubmit}>
            <label className="block mb-1">
               <span className="inline-block mt-2 after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
               <input
                  type="email"
                  placeholder="Email..."
                  value={email}
                  className="-mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <InputError validation={validation} field="email" />
            </label>
            <label className="block mb-1">
               <span className="inline-block mt-2 after:content-['*'] after:ml-0.5 after:text-red-500">Password</span>
               <input
                  type="password"
                  placeholder="Password..."
                  value={password}
                  className="-mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  onChange={(e) => setPassword(e.target.value)}
               />
               <InputError validation={validation} field="password" />
            </label>
            {loading ? (
               <button className="mt-4 bg-neutral-500 block w-full rounded-md py-1.5 px-1 text-white" disabled>
                  {<LoadingSpin />}
               </button>
            ) : (
               <button type="submit" className="mt-4 bg-cyan-400 hover:bg-cyan-500 block w-full rounded-md py-1.5 px-1 text-white">
                  Login
               </button>
            )}
         </form>

         <div className="text-center mt-2">
            <p>Don't have an account yet?</p>
            <Link to="/auth/registration" className="text-blue-500 hover:text-blue-600 duration-200">
               Sign Up
            </Link>
         </div>
      </div>
   );
};

export default Login;
