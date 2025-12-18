import React, { useState } from "react";
import useStudents from "../Context/Students.Context";
export default function ({ student, setStudents, students }) {
  const [status, setStatus] = useState("pending");
  const getBtnStyle = (type) => {
    const {Students} = useStudents()
    if (status === type) {
      if (type === "present") return "bg-green-500 text-white";
      if (type === "absent") return "bg-red-500 text-white";
      if (type === "late") return "bg-orange-500 text-white";
    }
    return "bg-gray-200 text-black";
  };
  const handleDelete = (id) => {
    const UpdateStudents = students.filter(std => std.id !== id)
    if(UpdateStudents) {
      alert("Are you sure you want to delete this student?")
      setStudents(UpdateStudents)
    }
    

    localStorage.setItem("students", JSON.stringify(UpdateStudents))
  }
  return (
    <div>
      <div className="flex justify-between items-center border-b border-gray-200 mt-10 pb-4">
        <h2>{student.studentName}</h2>
        <p>{student.studentGrade}</p>
        <span className={`p-2 rounded-lg ${getBtnStyle(status)}`}>
          {status}
        </span>
        <div className="flex space-x-6">
          <button
            onClick={() => setStatus("present")}
            className={`${getBtnStyle("present")} rounded-lg p-2`}
          >
            Present
          </button>
          <button
            onClick={()=> setStatus("absent")}
            className={`${getBtnStyle("absent")} p-2 rounded-lg`}
          >
            Absent
          </button>
          <button
            onClick={() =>  setStatus("late")}
            className={`${getBtnStyle("late")} p-2 rounded-lg`}
          >
            Late
          </button>
          <button onClick={()=> handleDelete(student.id)} className="bg-red-600 p-2 text-white font-semibold rounded-lg cursor-pointer">Delete</button>
        </div>
      </div>
    </div>
  );
}
