import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import CreateProject from "./components/CreateProject";
import ProjectCreated from "./components/ProjectCreated";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/userlogin' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<Home />}></Route>
          <Route
            path='/dashboard/projectlist'
            element={<ProjectList />}
          ></Route>
          <Route
            path='/dashboard/createproject'
            element={<CreateProject />}
          ></Route>
          <Route path='/dashboard/project_created' element={<ProjectCreated />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// /employee - /projectlist

export default App;
