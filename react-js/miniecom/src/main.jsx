import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Contactus from "./components/pages/Contactus";
import MainLayout from "./components/common/MainLayout";
import Error404 from "./components/pages/Error404";
import Product from "./components/pages/Product";
import MainContext from "./context/MainContext";

createRoot(document.getElementById("root")).render(

   <MainContext >
        <BrowserRouter>
          <Routes>
            {/* http://localhost:5173/ */}
          
            <Route element={<MainLayout/>}>
                  {/* Outlet -->Page Url match data Outlet Psuh */}

                <Route path={"/"} element={<Home />} />
            {/* http://localhost:5173/cart */}
                <Route path={"/cart"} element={<Cart />} />

                <Route path={"/register"} element={<Register />} />

                <Route path={"/user-login"} element={<Login />} />

                <Route path={"/contact-us"} element={<Contactus />} />

                  <Route path={"/product"} element={<Product />} />

                <Route path={"*"} element={<Error404 />} />

            </Route>
          
          </Routes>
        </BrowserRouter>
    </MainContext>
  
);
