import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import AboutPage from "./routes/AboutPage.jsx";
import DetailPage from "./routes/DetailPage.jsx";
import BeyondPage from "./routes/BeyondPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* basename matches the GitHub Pages subpath (vaughn-joshua.github.io/Portfolio) */}
    <BrowserRouter basename="/Portfolio">
      <Routes>
        {/* App is the persistent layout shell: Hero + Sidebar + <Outlet/> */}
        <Route element={<App />}>
          <Route index element={<Home />} />
        </Route>

        {/* Detail/About/Beyond are full-screen overlay pages — they render
            outside the App shell so they take over the whole viewport, hiding
            the hero and sidebar (matches the reference overlay behavior). */}
        <Route path="about" element={<AboutPage />} />
        <Route path="projects/:slug" element={<DetailPage />} />
        <Route path="beyond" element={<BeyondPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
