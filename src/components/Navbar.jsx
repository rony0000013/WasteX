import { useState } from "react";

import { close, logo, menu } from "../assets";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <nav className="w-full h-20 flex py-6 justify-between items-center navbar">
        <div className="relative">
          <img src={logo} alt="WasteX" className=" w-[130px] h-[120px] object-fit" />
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
          <a href="/blog"><li
            key="blog"
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white `}
          >
            Blog
          </li></a>
          <li
            key="Log In"
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white `}
            onClick={() => {
              loginWithRedirect()
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
              <a href="/blog"><li
                key="blog"
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white `}
              >
                Blog
              </li></a>
              <li
                key="blog"
                className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white `}
                onClick={() => {
                  loginWithRedirect()
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
