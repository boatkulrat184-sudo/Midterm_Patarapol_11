import React from "react";

function Rigister() {
  return (
    <div className="flex justify-center items-center min-h-[85vh] bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Register
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col gap-1">
            <input
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
              type="text"
              placeholder="username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <input
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
              type="text"
              placeholder="password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <input
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
              type="text"
              placeholder="confirm password"
            />
          </div>
          <button className="w-full bg-teal-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition duration-300 mt-6 cursor-pointer ac">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Rigister;
