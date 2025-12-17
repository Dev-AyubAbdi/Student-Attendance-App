import React from 'react'
import { CiSearch } from "react-icons/ci";

export const AttendanceLists = () => {
  return (
    <div>
        <h2 className='mt-6 text-2xl font-semibold text-blue-500'>Attendance Lists</h2>
        <form className='relative mt-6'>
            <CiSearch className='absolute top-2 left-3 text-2xl' />
            <input type="text" placeholder='Search Student...' className='border p-2 w-100 rounded-lg pl-10 outline-0 border-blue-500'  />
        </form>
    </div>
  )
}
