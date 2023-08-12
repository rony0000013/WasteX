import { useState } from "react";

import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <nav className="w-full h-20 flex py-6 justify-between items-center navbar">
        <div>
          <img src={logo} alt="hoobank" className="w-[150px] h-[150px] " />
        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li
            key="home"
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white `}
          >
            <a href="#home">Home</a>
          </li>
          <li
            key="features"
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white `}
          >
            <a href="#features">Features</a>
          </li>
          <li
            key="blog"
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white `}
            onClick={() => {
              window.location.href = "/blog";
            }}
          >
            Blog
          </li>
          <li
            key="blog"
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white `}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Log In
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => settoggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? "flex" : "hidden"
              } p-6 bg-black-gradient top-20 absolute right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
          >
            <ul className="list-none flex flex-col justify-end items-start flex-1">
              <li
                key="home"
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white `}
              >
                <a href="#home">Home</a>
              </li>
              <li
                key="features"
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white `}
              >
                <a href="#features">Features</a>
              </li>
              <li
                key="blog"
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white `}
              >
                <a href="#blog">Blog</a>
              </li>
              <li
                key="blog"
                className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white `}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Log In
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
