import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="bg-slate-950 shadow-lg p-4 ">
      <div className="flex justify-around items-center contain mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-bold border-b-2 border-teal-400 pd-1"
              : "text-gray-300 hover:text-teal-300 transition duration-300"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="register"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-bold border-b-2 border-teal-400 pd-1"
              : "text-gray-300 hover:text-teal-300 transition duration-300"
          }
        >
          Register
        </NavLink>
        <NavLink
          to="todolist"
          className={({ isActive }) =>
            isActive
              ? "text-teal-400 font-bold border-b-2 border-teal-400 pd-1"
              : "text-gray-300 hover:text-teal-300 transition duration-300"
          }
        >
          todolist
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
