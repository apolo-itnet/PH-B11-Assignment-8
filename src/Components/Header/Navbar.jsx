import React from "react";
import { Link, NavLink } from "react-router";
import logoImage from "../../assets/logo.png";
import menuItems from "../../Utilities/menuData";

const Navbar = () => {

  const links = (
    <div className="flex flex-col md:flex-row gap-8 text-md font-semibold">
      {menuItems.map((item) => (
        item.disabled ? (
          <span
            key={item.path}
            className="hover:text-green-500 transition-colors duration-300 cursor-pointer"
          >
            <li>{item.label}</li>
          </span>
        ) : <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
          isActive
            ? "text-green-500 font-semibold border-b border-green-500 pb-2" 
            : "hover:text-green-500 transition-colors duration-300"
        }
      >
        <li>{item.label}</li>
      </NavLink>
      ))}
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-none my-3 px-2 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-50 p-6 shadow-xs border-gray-200 border md:hidden"
            >
              {links}
            </ul>
          </div>
          <a className="btn shadow-none border-none bg-white text-2xl font-bold">
            {" "}
            <img src={logoImage} alt="" /> Law.Bd
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-full bg-green-600 shadow-none border-none text-white  ">
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
