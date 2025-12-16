import React, { useState } from "react";

import StudentLists from "./StudentLists";


export const AdminDashboard = () => {
    const [studentName, setStudentName] = React.useState("");
    const [studentGrade, setStudentGrade] = useState('')
    const [students, setStudents] = useState([])

    const handleSubmit = (e) => {
            e.preventDefault();
    }
     const handleAdd = () => {
        const newStudent = {id: Date.now(), studentName, setStudentGrade};
        setStudents([...students, newStudent])
            }
  return (
   <div className="max-w-7xl mx-auto pt-6">
    <h2 className="text-2xl font-semibold text-blue-500">Students Registration</h2>
   <form onSubmit={handleSubmit} className="mt-10">
     <input type="text" placeholder="Enter Student Name.." className="w-full p-3 border border-blue-400 outline-0 text-lg rounded-lg mb-4"
        value={studentName} onChange={(e)=> setStudentName(e.target.value)}
     />
        <input type="text" placeholder="Enter Student email.." className="w-full p-3 border border-blue-400 outline-0 text-lg rounded-lg pb-3"
                value={studentGrade} onChange={(e)=> setStudentGrade(e.target.value)}
        
        />
        <button type="submit" onClick={()=> handleAdd()} className="w-full mt-7 bg-blue-500 p-3 rounded-lg text-white text-lg">Add New Student</button>
   </form>

   {
    students.map(student => (
        <div>
            <StudentLists key={student} student={student} />
        </div>
    ))
   }
   </div>
  );
};
