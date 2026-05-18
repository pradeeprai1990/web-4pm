import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
);
