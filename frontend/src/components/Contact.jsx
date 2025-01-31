import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Contact() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
        <p className="text-gray-600 mt-2">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>

        <form className="mt-6 space-y-4">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 w-full border rounded-md bg-gray-100 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 w-full border rounded-md bg-gray-100 outline-none"
              required
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="p-3 w-full border rounded-md bg-gray-100 outline-none"
            required
          />

          {/* Message */}
          <textarea
            placeholder="Enter Your Message"
            className="p-3 w-full border rounded-md bg-gray-100 outline-none h-32"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Your Message
          </button>
        </form>

        {/* Back to Home Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')} // Navigate to home when clicked
            className="mt-4 w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
