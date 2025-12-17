import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CiTimer } from "react-icons/ci";

import useStudents from "../Context/Students.Context";
import { StudentsDashboard } from "./StudentsDashboard";

export const TeacherDashboard = () => {
  const { Students } = useStudents();
  console.log(Students);
  const [present, setPresent] = useState("");
  const [absent, setAbsent] = useState("");
  const [late, setLate] = useState("");
 

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-self-end items-center mt-5">
        <span className="pr-3 font-semibold">Welcome, Teacher!</span>
        <img
          src="./src/assets/teacherImg.jpg"
          className="w-15 h-15 rounded-full border p-1 border-blue-400"
          alt=""
        />
      </div>
      <div className="flex gap-10 mt-6">
        <div className="bg-green-400 w-100 p-5 rounded-lg text-white ">
          <div className="pl-4 flex items-center">
            <IoMdCheckmark
              className="text-blue-500 bg-white rounded-full mr-7"
              size={50}
            />
            <div>
              <span className="text-2xl">Present Students</span>
              <p className="text-center text-4xl font-semibold">20</p>
            </div>
          </div>
        </div>
        <div className="bg-red-400 w-100 p-5 rounded-lg text-white ">
          <div className="pl-4 flex items-center">
            <IoMdClose
              className="text-red-500 font-bold bg-white rounded-full mr-7"
              size={50}
            />
            <div>
              <span className="text-2xl">Absent Students</span>
              <p className="text-center text-4xl font-semibold">20</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-400 w-100 p-5 rounded-lg text-white ">
          <div className="pl-4 flex items-center">
            <CiTimer
              className="text-blue-500 bg-white rounded-full mr-7"
              size={50}
            />
            <div>
              <span className="text-2xl">Late Students</span>
              <p className="text-center text-4xl font-semibold">20</p>
            </div>
          </div>
        </div>
      </div>
      {/* Attendance Lists */}

      <div>
        {Students.length > 0 ? (
          <>
            <h2 className="text-blue-500 text-3xl font-bold mt-10">
              Attendance List
            </h2>
            {Students.map((student) => (
             <StudentsDashboard  student={student}/>
            ))}
          </>
        ) : (
          <h2 className="text-blue-500 text-2xl font-bold mt-10">
            There are no students sent yet.
          </h2>
        )}
      </div>
    </div>
  );
};
