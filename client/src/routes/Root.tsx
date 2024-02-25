import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "../pages/About";
import ApplyProfil from "../pages/ApplyProfil";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Models from "../pages/Models";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="mannequins" element={<Models />}></Route>
      <Route path="postuler" element={<ApplyProfil />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Route>
  )
);

export default router;
