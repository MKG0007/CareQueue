import React, { useState } from 'react'
import { assets } from '../assets/assets'

export default function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1  123 456 7890',
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false);

  return (
    <section className="min-h-screen w-full bg-[#f5f5f5] py-10 px-4 flex justify-center">
      <div className="w-full max-w-5xl space-y-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-300">
          <img
            src={userData.image}
            alt="profile"
            className="w-28 h-28 rounded border border-gray-400 shadow-sm object-cover"
          />

          <div className="flex-1 text-center sm:text-left">
            {isEdit ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 border border-gray-400 rounded text-gray-800 text-sm"
              />
            ) : (
              <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">{userData.name}</h1>
            )}
            <p className="text-gray-600 text-sm mt-1">User Profile Overview</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 tracking-wide">Contact Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            {/* Email */}
            <div>
              <p className="font-medium text-gray-700">Email</p>
              <p className="text-gray-700 mt-1">{userData.email}</p>
            </div>

            {/* Phone */}
            <div>
              <p className="font-medium text-gray-700">Phone</p>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                  className="mt-1 w-full p-3 border border-gray-400 rounded"
                />
              ) : (
                <p className="text-gray-700 mt-1">{userData.phone}</p>
              )}
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <p className="font-medium text-gray-700">Address</p>
              {isEdit ? (
                <div className="space-y-2 mt-1">
                  <input
                    type="text"
                    value={userData.address.line1}
                    onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                    className="p-3 border border-gray-400 rounded w-full"
                  />
                  <input
                    type="text"
                    value={userData.address.line2}
                    onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                    className="p-3 border border-gray-400 rounded w-full"
                  />
                </div>
              ) : (
                <p className="text-gray-700 mt-1 leading-relaxed">
                  {userData.address.line1}<br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 tracking-wide">Basic Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            {/* Gender */}
            <div>
              <p className="font-medium text-gray-700">Gender</p>
              {isEdit ? (
                <select
                  value={userData.gender}
                  onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                  className="mt-1 w-full p-3 border border-gray-400 rounded"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="text-gray-700 mt-1">{userData.gender}</p>
              )}
            </div>

            {/* DOB */}
            <div>
              <p className="font-medium text-gray-700">Date of Birth</p>
              {isEdit ? (
                <input
                  type="date"
                  value={userData.dob}
                  onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                  className="mt-1 w-full p-3 border border-gray-400 rounded"
                />
              ) : (
                <p className="text-gray-700 mt-1">{userData.dob}</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 text-center sm:text-right">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="px-6 py-2 bg-gray-800 text-white rounded text-sm tracking-wide hover:bg-black"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-6 py-2 border border-gray-800 text-gray-800 rounded text-sm tracking-wide hover:bg-gray-200"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </section>
  )}
