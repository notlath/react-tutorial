import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));
function MainContent() {
  return (
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
            smoother loading experiences and better error handling, especially
            for data fetching.
          </li>
          <li>
            <strong>Performance Improvements:</strong> I&apos;m looking forward
            to any performance boosts like smaller bundle sizes or faster
            rendering.
          </li>
        </ul>
      </div>
    </StrictMode>
  );
}

const vanillaHeader = document.createElement("h1");
vanillaHeader.className = "header";
vanillaHeader.appendChild(
  document.createTextNode("Reasons Why I am Excited for React 9.0")
);
document.getElementById("root").appendChild(vanillaHeader);

root.render(
  <StrictMode>
    <MainContent />
  </StrictMode>
);
