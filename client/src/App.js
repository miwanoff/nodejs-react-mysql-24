import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routers/Home"
import Login from "./routers/Login"
import Students from "./routers/Students"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/students"} element={<Students />} />
      </Routes>
    </Router>
  );

}

export default App;
