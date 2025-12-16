import React from "react";
import { Link } from "react-router-dom";
import { NewStudents } from "./NewStudents";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

export const AdminDashboard = () => {
  return (
    <div>
      <div className="flex space-x-10">
        <div className="bg-blue-200 shadow w-70 h-screen">
          <nav className="flex flex-col space-y-8 pt-20">
            <Link className="pl-10 flex justify-center items-center space-x-2">
              <IoPersonAddOutline size={20} />
              New Students
            </Link>
             <Link className="pl-10 flex justify-center items-center space-x-2">
              <FaBook size={20} />
             Student Courses
            </Link>
             <Link className="pl-10 flex justify-center items-center space-x-2">
              <MdOutlineAttachMoney size={20} />
             Student Payment
            </Link>
             <Link className=" flex justify-center text-center items-center space-x-2">
              <IoSettings size={20} />
            Settings
            </Link>
          </nav>
        </div>
        <div className="">
          <NewStudents />
        </div>
      </div>
    </div>
  );
};
