import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function About() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-400">About Us</h1>
        <p className="text-xl mb-4">
          We are a dedicated team of innovators passionate about building
          amazing web applications. Our mission is to simplify and enhance
          the user experience through clean, functional, and beautiful designs.
        </p>
        <p className="text-lg text-gray-400 mb-6">
          Our journey started with a simple idea: To make technology more
          accessible and enjoyable for everyone. From students to professionals,
          our team strives to provide solutions that meet the needs of a rapidly
          changing world.
        </p>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold text-indigo-500">Our Vision</h2>
          <p className="mt-2 text-lg text-gray-400">
            To be a leading force in innovation, creating tools that empower
            individuals and businesses to thrive in the digital world.
          </p>
        </div>
        
        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')} // Navigate to home when clicked
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
