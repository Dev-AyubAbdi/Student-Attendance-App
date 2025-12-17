import React, { useState } from "react";

export const StudentsDashboard = ({ student }) => {
  const [status, setStatus] = useState("pending");

  const getBtnStyle = (type) => {
    if (status === type) {
      if (type === "present") return "bg-blue-500 text-white";
      if (type === "absent") return "bg-red-500 text-white";
      if (type === "late") return "bg-orange-500 text-white";
    }
    return "bg-gray-200 text-black";
  };
  return (
    <div className="flex justify-between border-b border-gray-200 mt-6 pb-3 ">
      <h2>{student.studentName}</h2>
      <span>{student.studentGrade}</span>
      <p className={`${getBtnStyle(status)} p-2 rounded-lg`}>{status}</p>
      <div className="space-x-5">
        <button
          onClick={() => setStatus("present")}
          className={`${getBtnStyle("present")} p-2 rounded-lg`}
        >
          Present
        </button>
        <button
          onClick={() => setStatus("absent")}
          className={`${getBtnStyle("absent")} p-2 rounded-lg`}
        >
          Absent
        </button>
        <button
          onClick={() => setStatus("late")}
          className={`${getBtnStyle("late")} p-2 rounded-lg`}
        >
          Late
        </button>
      </div>
    </div>
  );
};
