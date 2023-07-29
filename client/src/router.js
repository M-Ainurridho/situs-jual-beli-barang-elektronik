import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/errors/NotFound";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Laptop from "./pages/electronics/Laptop";
import Smartphone from "./pages/electronics/Smartphone";
import Tablet from "./pages/electronics/Tablet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import User from "./pages/user/User";
import Admin from "./pages/admin/Admin";

const Router = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <Navbar>
                  <Home />
               </Navbar>
            }
         ></Route>
         <Route
            path="/electronic/laptop"
            element={
               <Navbar>
                  <Laptop />
               </Navbar>
            }
         ></Route>
         <Route
            path="/electronic/smartphone"
            element={
               <Navbar>
                  <Smartphone />
               </Navbar>
            }
         ></Route>
         <Route
            path="/electronic/tablet"
            element={
               <Navbar>
                  <Tablet />
               </Navbar>
            }
         ></Route>
         <Route
            path="/about"
            element={
               <Navbar>
                  <About />
               </Navbar>
            }
         ></Route>
         <Route
            path="/contact"
            element={
               <Navbar>
                  <Contact />
               </Navbar>
            }
         ></Route>
         <Route
            path="/auth/login"
            element={
               <AuthLayout>
                  <Login />
               </AuthLayout>
            }
         ></Route>
         <Route
            path="/auth/registration"
            element={
               <AuthLayout>
                  <Register />
               </AuthLayout>
            }
         ></Route>
         <Route path="/user" element={<User />}></Route>
         <Route path="/admin" element={<Admin />}></Route>
         <Route path="*" element={<NotFound />}></Route>
      </Routes>
   );
};

export default Router;
