import React, { useState } from 'react'
import { Header } from './Header'

export default function ({student}) {
    const [status, setStatus] = useState('Paddng')
    const getBtnStyle = (type) => {
        if(type === "Present") return 'bg-green-500 text-white'
        if(type === "Absent") return 'bg-red-500 text-white'
    }
  return (
    <div>
       <div className='flex justify-between border-b border-gray-200 mt-10 pb-4'>
        <h2>{student.studentName}</h2>
       <p>{student.studentEmail}</p>
       <p className='bg-green-400 p-2 text-white font-semibold rounded-lg'>{status}</p>
       <div className='flex space-x-6'>
        <button onClick={()=> setStatus("Present")} className={`${getBtnStyle('Present')} p-2 text-white font-semibold rounded-lg`}>Present</button>
        <button onClick={()=> setStatus("Absent")} className='bg-red-500 p-2 text-white font-semibold rounded-lg'>Absent</button>
        <button onClick={()=> setStatus('Late')} className='bg-orange-400 p-2 text-white font-semibold rounded-lg'>Late</button>
       </div>
       </div>
    </div>
  )
}
