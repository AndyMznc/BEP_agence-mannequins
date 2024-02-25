import { RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import router from "./routes/Root";
import "./styles/index.scss";

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
