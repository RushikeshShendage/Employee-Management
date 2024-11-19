import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./employee/AddEmp";
import EditEmp from "./employee/EditEmp";
import ViewEmp from "./employee/ViewEmp";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addemp" element={<AddEmp />} />
          <Route exact path="/editemployee/:id" element={<EditEmp/>}/>
          <Route exact path="/viewemp/:id" element={<ViewEmp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
