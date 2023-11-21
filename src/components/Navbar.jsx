import React from "react";
import logo from "../assets/Group 1.svg";
import service from "../assets/fig1.png";
import section2 from "../assets/fig2.png"
import footer from '../assets/fig3.png'
import icon from "../assets/icon.png"

function Navbar() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-gray-150 p-4 text-black">
          <nav className="flex justify-between items-center">
            <div style={{}}>
              <a
                href="#"
                className="hover:underline p-8 "
                style={{ fontSize: "24px", fontWeight: 700, marginLeft: 87 }}
              >
                Exclusive
              </a>
            </div>
            <ul className="flex" style={{ marginLeft: "4rem" }}>
              {" "}
              {/* Add ml-8 for left margin */}
              <li>
                <a href="#" className="hover:underline p-8 text-lg ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline p-8 text-lg">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline p-8 text-lg"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline p-8 text-lg"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Sign Up
                </a>
              </li>
              <li>
               
              </li>
            </ul>
            <div className="">
            <img
            src={icon}
            alt="services"
            style={{ width: "100%" }}
            className="mx-auto max-w-full px-20 pt-6 pb-6 "
          />

              {/* <button class="rounded-full px-4 py-2 pr-8 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-red-100 duration-300">
                Sign Up
              </button> */}
            </div>{" "}
          </nav>
        </header>

        <div>
          <img
            src={service}
            alt="services"
            style={{ width: "100%" }}
            className="mx-auto max-w-full px-20 pt-6 pb-6 "
          />
        </div>

        <div>
        <img
            src={section2}
            alt="services"
            style={{ width: "100%" }}
            className="mx-auto max-w-full px-20 pt-6 pb-6 "
          />
        </div>

        <div>
        <img
            src={footer}
            alt="services"
            style={{ width: "100%" }}
            className="mx-auto max-w-full px-20 pt-6 pb-6 "
          />
        </div>

        {/* <Main /> */}
      </div>
    </>
  );
}

export default Navbar;
