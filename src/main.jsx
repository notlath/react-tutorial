import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <div>
      <h1>Reasons Why I am Excited for React 19.0</h1>
      <ul>
        <li>
          <strong>Improved Server Components:</strong> These should make pages
          load faster and improve SEO. I want to learn how they simplify data
          fetching.
        </li>
        <li>
          <strong>Enhanced Suspense:</strong> Updates to Suspense promise
          smoother loading experiences and better error handling, especially for
          data fetching.
        </li>
        <li>
          <strong>Performance Improvements:</strong> I&apos;m looking forward to
          any performance boosts like smaller bundle sizes or faster rendering.
        </li>
      </ul>
    </div>
  </StrictMode>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
