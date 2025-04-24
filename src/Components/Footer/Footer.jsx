import React from "react";
import logoImage from "../../assets/logo-footer.png";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import menuItems from "../../Utilities/menuData";
import { NavLink } from "react-router";

const Footer = () => {

  const links = (
    <div className="flex gap-8 text-md font-semibold list-none">
      {
        menuItems.map((item) =>(
          item.disabled ? (
            <span
              key={item.path}
              className="text-white cursor-pointer hover:text-green-500 transition-colors duration-300"
            >
              <li>{item.label}</li>
            </span>
          ) : <NavLink
          key={item.path}
          to={item.path}
          className={({isActive}) => 
            isActive 
          ? "text-green-500 font-semibold" 
          : "text-white hover:text-green-500 transition-colors duration-300"
          }
          >
            <li>{item.label}</li>
          </NavLink>
        ))
      }
    </div>
  )

  return (
    <div className="mt-4 px-0">
      <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10 w-full">
        <div>
          <a className="shadow-none border-none text-2xl font-bold text-white flex items-center">
            {" "}
            <img src={logoImage} alt="" /> Law.Bd
          </a>
        </div>
        <div className="pb-4 border-b border-dashed border-gray-50/30 w-full">
        <nav >
          {links}
        </nav>
        </div>

        <div className="flex gap-8">
          <a
            href="https://github.com"
            target="_blank"
          >
            <FaGithub className="text-2xl text-white hover:text-green-500  transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
          >
            <FaLinkedin className="text-2xl text-white hover:text-green-500  transition-colors" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
          >
            <FaTwitter className="text-2xl text-white hover:text-green-500  transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
          >
            <FaFacebook className="text-2xl text-white hover:text-green-500  transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
