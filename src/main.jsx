import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import "./index.css";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <Page />
  </StrictMode>
);

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
