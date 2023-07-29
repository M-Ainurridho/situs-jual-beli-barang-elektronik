import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import InputError from "./errors/InputError";
import LoadingSpin from "../../components/loadings/LoadingSpin";

const Register = () => {
   const [fullname, setFullname] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [validation, setValidation] = useState([]);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);
      const response = await axios
         .post("http://localhost:3000/auth/register", { fullname, email, password })
         .then((res) => res)
         .catch((err) => {
            setValidation(err.response.data.errors);
            setLoading(false);
         });

      if (response?.data) {
         setLoading(false);
         navigate("/auth/login");
      }
   };

   return (
      <>
         <div className="w-full px-6">
            <h1 className="text-2xl text-center">Sign Up</h1>
            <form onSubmit={handleSubmit}>
               <label className="block mb-1">
                  <span className="inline-block mt-2 after:content-['*'] after:ml-0.5 after:text-red-500">Fullname</span>
                  <input
                     type="text"
                     placeholder="Fullname..."
                     className="-mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                     onChange={(e) => setFullname(e.target.value)}
                  />
                  <InputError validation={validation} field="fullname" />
               </label>
               <label className="block mb-1">
                  <span className="inline-block mt-2 after:content-['*'] after:ml-0.5 after:text-red-500">Email</span>
                  <input
                     type="email"
                     placeholder="Email..."
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
                     Register
                  </button>
               )}
            </form>

            <div className="text-center mt-2">
               <p>Already have an account?</p>
               <Link to="/auth/login" className="text-blue-500 hover:text-blue-600 duration-200">
                  Sign In
               </Link>
            </div>
         </div>
      </>
   );
};

export default Register;
