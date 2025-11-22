import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function MyAppointments() {
  const { doctors } = useContext(AppContext)

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">My Appointments</h2>

      <div className="grid gap-6">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col sm:flex-row gap-6 border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt="doctor"
                className="w-32 h-32 object-cover rounded-xl border border-gray-300"
              />
            </div>

            <div className="flex-1 text-gray-700">
              <p className="text-xl font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500 mb-2">{item.speciality}</p>

              <div className="mt-2">
                <p className="font-medium text-gray-800">Address:</p>
                <p className="text-sm">{item.address.line1}</p>
                <p className="text-sm">{item.address.line2}</p>
              </div>

              <p className="mt-3 text-sm font-medium">
                <span className="text-gray-800">Date & Time: </span>
                25, July, 2024 | 8:30 PM
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all">
                Pay Online
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-all">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
