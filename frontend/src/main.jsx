import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>
);
