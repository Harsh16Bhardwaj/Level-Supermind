import React from "react";
import './homepage.css'
import logo from "../../../public/Web_Logo.png";

export default function Navbar() {
  return (
    <>
    <div className="flex justify-center mt-10 ">
        <div><img className="logo w-14" src={logo} alt="" /></div>
      <div className="signika font-medium flex justify-between items-center bg-gray-800 p-1.5 pl-5 pr-2 rounded-3xl w-1/2">
        <div className="text-3xl ">
          <h1>Abs<span className="logo-highlight">T</span>ractions</h1>
        </div>
        <div>
          <ul className="flex justify-evenly gap-x-8 text-sm raleway list-none">
            <li className="a">Home</li>
            <li className="a">About</li>
            <li className="a">Product</li>
            <li className="a">Contact</li>
          </ul>
        </div>
        <div className="">
          <button className="get-started p-1 pl-3 pr-3 text-white  font-bold rounded-3xl">Get Started</button>
        </div>
      </div>
      </div>
    </>
  );
}
