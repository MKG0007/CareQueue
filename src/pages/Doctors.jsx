import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const nevigate = useNavigate();
  console.log(speciality);
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = ()=> {
    if (speciality) {
      setFilterDoc(
        doctors.filter(
          doc => doc.speciality.toLowerCase() === speciality.toLowerCase()
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

        <div className=' flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick= {()=>{
            if(speciality === 'General physician'){
              nevigate('/doctors')
            }else{
              nevigate('/doctors/General physician')
            }
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician"?'bg-indigo-100':''}`}>General physician</p>
          <p onClick= {()=>{
            if(speciality === 'Gynecologist'){
              nevigate('/doctors')
            }else{
              nevigate('/doctors/Gynecologist')
            }
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist"?'bg-indigo-100':''}`}>Gynecologist</p>
          <p onClick= {()=>{
            if(speciality === 'Dermatologist'){
              nevigate('/doctors')
            }else{
              nevigate('/doctors/Dermatologist')
            }
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist"?'bg-indigo-100':''}`}>Dermatologist</p>
          <p onClick= {()=>{
            if(speciality === 'Pediatricians'){
              nevigate('/doctors')
            }else{
              nevigate('/doctors/Pediatricians')
            }
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians"?'bg-indigo-100':''}`}>Pediatricians</p>
          <p onClick= {()=>{
            if(speciality === 'Neurologist'){
              nevigate('/doctors')
            }else{
              nevigate('/doctors/Neurologist')
            }
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist"?'bg-indigo-100':''}`}>Neurologist</p>
          <p onClick= {()=>{
            if(speciality === 'Gastroenterologist'){
              nevigate('/doctors')
            }else{
              nevigate('/doctors/Gastroenterologist')
            }
          }} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist"?'bg-indigo-100':''}`}>Gastroenterologist</p>
        </div>
      <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>

      {
        filterDoc.map((item, index) => {
          return (
            <div key={index} onClick={() => {
              nevigate(`/appointment/${item._id}`)
            }} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
              <img className='bg-blue-50 ' src={item.image} alt="" />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>

            </div>
          )
        })
      }
      </div>
      </div>
    </div>
  )
}

export default Doctors