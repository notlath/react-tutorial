import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <div>
      <h1>Reasons Why I am Excited for React 19.0</h1>
      <ul>
        <li>I want to deepen my knowledge in React</li>
        <li>I want to get better</li>
        <li>I dont want to be a loser</li>
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
