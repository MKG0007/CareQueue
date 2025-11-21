import React from "react";
import { assets } from "../assets/assets";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
      {/* Classic Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-semibold text-gray-900 uppercase tracking-wide">
          Contact Us
        </h1>
        <p className="text-gray-600 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
          We're here to assist you. Reach out for support, queries, or collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Classic Left Image */}
        <div className="hidden lg:block">
          <img
            src={assets.contact_image}
            alt="Contact illustration"
            className="rounded-md border border-gray-300 shadow-md w-full object-cover"
          />
        </div>

        {/* Classic Contact Form */}
        <form
          className="bg-white border border-gray-300 shadow-md p-8 rounded-md"
          id="contact-form"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6 tracking-wide">
            Send us a Message
          </h2>

          <div className="flex flex-col gap-5 text-sm">
            <div>
              <label className="font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                className="w-full mt-1 p-3 border border-gray-400 rounded focus:ring-1 focus:ring-gray-700 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="user_email"
                placeholder="example@mail.com"
                className="w-full mt-1 p-3 border border-gray-400 rounded focus:ring-1 focus:ring-gray-700 outline-none"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Write your message here..."
                className="w-full mt-1 p-3 border border-gray-400 rounded focus:ring-1 focus:ring-gray-700 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded font-medium tracking-wide hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}