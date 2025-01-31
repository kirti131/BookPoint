import React, { useState } from "react";

function AuthModal() {
  const [isSignup, setIsSignup] = useState(true); // Track Signup/Login toggle

  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <form method="dialog">
            {/* Close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => window.history.back()} // Navigate back when closing
            >
              ✕
            </button>
          </form>

          {/* Toggle Between Signup & Login */}
          <h3 className="font-bold text-lg">{isSignup ? "Signup" : "Login"}</h3>

          {isSignup ? (
            <>
              {/* Signup Form */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p>
                  Have an account?{" "}
                  <span
                    onClick={() => setIsSignup(false)}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Login Form */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
                <p>
                  Don't have an account?{" "}
                  <span
                    onClick={() => setIsSignup(true)}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AuthModal;
