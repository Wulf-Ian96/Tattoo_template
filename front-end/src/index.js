import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import "./general.css";
import "./pages/artists_page/artists.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
