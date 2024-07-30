import React from 'react'
import { useNavigate } from 'react-router-dom'

function Albumitem( {image ,name,desc,id}) {
    const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#2b1b4a26]'>
        <img className='rounded' src={image} alt=''/>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-gray-600 text-sm'>{desc}</p>
    </div>
  )
}

export default Albumitem