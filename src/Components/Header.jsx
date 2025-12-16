import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="p-4 shadow">
      {/* header section */}
     <div className="max-w-7xl mx-auto flex justify-between item-center ">
         <div>
        <Link to={"/"} className="text-3xl font-bold text-blue-500">School-Attendance</Link>
      </div>
      <nav className="space-x-6 pt-2">
        <Link to="/" className="text-lg font-semibol">Home</Link>
        <Link to="/adminDashboard" className="text-lg font-semibol">Admin Dashboard</Link>
        <Link to="/teacherDashboard" className="text-lg font-semibol">Teacher Dashboard</Link>
      </nav>
     </div>
    </div>
  );
};
