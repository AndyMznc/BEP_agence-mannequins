import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./views/about";
import Contact from "./views/contact";
import ErrorPage from "./views/error-page";
import Home from "./views/home";
import Models from "./views/models";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/mannequins" element={<Models />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/candidature" element={<Models />} />
      <Route path="/service" element={<Models />} />
      <Route path="/contact" element={<Contact />} />
      <Route errorElement={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
