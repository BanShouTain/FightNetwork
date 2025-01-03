import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./navbar.jsx";
import Shop from "./shop.jsx";
import Footer from "./Footer.jsx";
/* Css İmportları Aşağıda */
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/scss/free/_variables.scss";
import "./sp.css";
/* İcon İmportları Aşağıda */

createRoot(document.getElementById("root")).render(
  <div>
    <Navbar />
    <Shop />
    <Footer />
  </div>
);
