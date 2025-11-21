import React from 'react'
import { assets } from '../assets/assets'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-wide uppercase">
          About <span className="text-gray-700">Prescripto</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
          A dependable platform designed to make healthcare access simple, organized and reliable.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full">
          <img
            src={assets.about_image}
            alt="Healthcare about section"
            className="w-full rounded-md border border-gray-300 shadow-md"
          />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
          <p>
            Welcome to <span className="font-semibold text-gray-900">Prescripto</span>, a platform focused on providing a structured and convenient approach to healthcare. Whether you're scheduling appointments or searching for the right doctor, Prescripto ensures a smooth and stress‑free process.
          </p>

          <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
            <h3 className="font-semibold text-gray-900 mb-1 tracking-wide">Our Vision</h3>
            <p className="text-sm text-gray-700">
              To build a dependable digital healthcare ecosystem that connects patients and healthcare providers with ease and transparency.
            </p>
          </div>

          {/* Buttons Section Restored */}
          <div className="flex gap-3 mt-4">
            <button className="px-5 py-2 bg-primary text-white rounded-md text-sm tracking-wide hover:bg-blue-600 transition">Book an Appointment</button>
            <button className="px-5 py-2 border border-gray-700 text-gray-800 rounded-md text-sm tracking-wide hover:bg-gray-200 transition">Explore Doctors</button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold text-gray-900 tracking-wide uppercase">Why Choose Us</h4>
          <p className="text-gray-600 text-sm">Simple, structured, and reliable healthcare assistance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 border border-gray-300 rounded-md bg-white shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2 tracking-wide">Efficiency</h5>
            <p className="text-sm text-gray-700 leading-relaxed">
              Streamlined appointment scheduling that helps you save valuable time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border border-gray-300 rounded-md bg-white shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2 tracking-wide">Convenience</h5>
            <p className="text-sm text-gray-700 leading-relaxed">
              Access reliable doctors and healthcare services without unnecessary hassle.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border border-gray-300 rounded-md bg-white shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2 tracking-wide">Personalization</h5>
            <p className="text-sm text-gray-700 leading-relaxed">
              Receive tailored suggestions and organized reminders for better health management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
