// import { Switch } from "@mui/material";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Watch from "./components/Watch";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    // <div>
    //   <Home></Home>
    // </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} >
        </Route>
        <Route path="/movies" element={<Home type="movie" />}>
        </Route>
        <Route path="/series" element={<Home type="series" />}>
        </Route>
        <Route path="/watch" element={<Watch />}>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
