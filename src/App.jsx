import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { AdminDashboard } from "./Components/AdminDashboard";
import { TeacherDashboard } from "./Components/TeacherDashboard";
import { NewStudents } from "./Components/NewStudents";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
          <Route path="/NewStudents" element={<NewStudents />} />
        </Routes>
      
    </>
  );
}

export default App;
