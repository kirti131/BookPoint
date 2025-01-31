import React, { useEffect, useState } from "react";
import Login from "./Login";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${sticky ? "bg-white dark:bg-gray-900 shadow-md backdrop-blur-md transition-all duration-300" : "bg-transparent"}`}>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="navbar py-3 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">BookPoint</a>

          {/* Navigation Menu */}
          <div className="hidden lg:flex space-x-6">
            <ul className="menu menu-horizontal">{navItems}</ul>
          </div>

          {/* Search & Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                className="input input-bordered w-[250px] px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
              />
              {/* Search Icon (inside input box) */}
              <span className="absolute right-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd"/>
                </svg>
              </span>
            </div>

            {/* Theme Toggle */}
            <button
              className="p-2 rounded-full"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.364 7.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.364 7.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414"></path>
                </svg>
              )}
            </button>

            {/* Trigger Login Modal Button */}
            <button
              className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300"
              onClick={toggleModal} // Open the modal
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally Render Login Modal */}
      {isModalOpen && <Login closeModal={toggleModal} />}
    </div>
  );
}

export default Navbar;
