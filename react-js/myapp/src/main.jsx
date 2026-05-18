import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./Home";
import Header from "./Header";


let root = document.getElementById("root");

createRoot(root).render(
  //HTLM CODE
  <>
  <Header/>
     <Home/>

     <Home></Home>

      <Home/>

       <Home/>
  </>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
